# 21 — Google Sheets Lead Integration

Every cart checkout (Name + Phone are required fields, added directly above
the "Checkout via WhatsApp" button in `CartDrawer.tsx`) does two things on
submit: opens WhatsApp with the pre-filled order (now including the
customer's name and phone — see `buildOrderMessage` in
`lib/utils/whatsapp.ts`), and fires a best-effort, non-blocking log of the
lead to a Google Sheet via `submitOrderLead()` in `lib/utils/leads.ts`.

## Why this approach (Apps Script Web App, not the Sheets API + service account)

Considered and rejected: a service-account + `googleapis` integration
(Google Cloud project, enabled Sheets API, IAM service account, JSON private
key held in env vars, called from a Next.js API route). Rejected because:

- It requires a persistent server runtime to hold the private key (a Vercel
  serverless function works today, but this project may move hosting to
  Hostinger later — see project owner's 2026-09-16 note — and classic
  shared hosting doesn't run Node/serverless functions). The Apps Script
  approach below is a plain client-side `fetch()` to a public URL — it has
  no server dependency at all, so it survives a hosting change with zero
  rework.
- Heavier one-time setup (Cloud project, IAM, key management) with no real
  payoff at this project's order volume.
- A leaked service-account private key is a much bigger blast radius than a
  leaked Apps Script URL — the URL can only ever do the one narrow thing the
  script explicitly codes (append a row).

The tradeoff: the Apps Script URL is unauthenticated (anyone who inspects
the network tab could POST fake rows). Acceptable here — no money or
sensitive data moves through this endpoint, and volume is low enough that
spam would be obvious in the sheet.

## What you (or the client) need to do — one-time setup

This part is manual and has to be done by whoever owns the Google account —
it can't be automated/scripted from here, since it involves clicking through
Google's own OAuth consent screens.

1. **Create the Google Sheet** (ideally under the business's own Google
   account, not a personal one, so they keep ownership). Add a header row:

   | Timestamp | Name | Phone | Order Summary | Subtotal | Status |
   |---|---|---|---|---|---|

   Leave `Status` blank per row — the client fills it in by hand
   (`Pending` / `Confirmed` / `Fulfilled`) after the WhatsApp chat closes,
   since there's no payment gateway to confirm a sale automatically (see
   [00_PROJECT_OVERVIEW.md](./00_PROJECT_OVERVIEW.md)).

2. In the Sheet, go to **Extensions → Apps Script**. Delete any boilerplate
   code and paste this in:

   ```js
   function doPost(e) {
     var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
     var data = JSON.parse(e.postData.contents);

     sheet.appendRow([
       new Date(),
       data.name || '',
       // Leading apostrophe forces Sheets to treat this as literal text.
       // Without it, a value starting with '+' (phone is sent as "+91
       // XXXXXXXXXX") gets parsed as the start of a formula and shows a
       // parse error in the cell instead of the phone number.
       data.phone ? "'" + data.phone : '',
       data.orderSummary || '',
       data.subtotal || '',
       '', // Status — filled in manually by the client
     ]);

     return ContentService
       .createTextOutput(JSON.stringify({ result: 'success' }))
       .setMimeType(ContentService.MimeType.JSON);
   }
   ```

   **Gotcha**: Sheets (and Apps Script's `appendRow`/`setValue`) auto-detects
   formulas — any value starting with `+`, `-`, `=`, or `@` is parsed as a
   formula, not written as literal text. Since the site sends phone as
   `"+91 9876543210"`, the leading `+` triggers this and shows a parse error
   in the Phone cell instead of the number. The apostrophe prefix above is
   the standard escape for "treat as text." If you already have broken rows
   from before this fix, they need to be retyped by hand — the fix only
   prevents it for new rows going forward.

3. Click **Deploy → New deployment**. For "Select type," choose **Web app**.
   Set:
   - Execute as: **Me** (the account that owns the Sheet)
   - Who has access: **Anyone**

   "Anyone" is required — the site calls this endpoint anonymously from the
   customer's browser, with no Google login involved.

4. Click **Deploy**. Google will show an "unverified app" warning since this
   is a personal, unpublished script — this is expected. Click **Advanced →
   Go to (project name)** → **Allow**.

5. Copy the resulting Web App URL (ends in `/exec`).

6. Hand that URL to the developer, or set it directly as an environment
   variable (see below).

## Wiring it into the project

Set the copied URL as `NEXT_PUBLIC_ORDER_SHEET_WEBHOOK_URL`:

- Locally: copy `.env.example` to `.env.local` and paste the URL in.
- On Vercel: Project Settings → Environment Variables → add
  `NEXT_PUBLIC_ORDER_SHEET_WEBHOOK_URL` for Production (and Preview, if you
  want test deployments to log too) → redeploy.

It must keep the `NEXT_PUBLIC_` prefix — it's read in the browser, not on a
server (see "why this approach" above).

If the variable is unset, `submitOrderLead()` silently no-ops, so local dev
without it configured still works — checkout just won't log to a sheet.

## Why the fetch call looks the way it does

```ts
fetch(url, {
  method: 'POST',
  mode: 'no-cors',
  headers: { 'Content-Type': 'text/plain' },
  body: JSON.stringify({ ... }),
})
```

Apps Script Web Apps don't handle CORS preflight (`OPTIONS`) requests for
custom `doPost` handlers. Sending the body as `text/plain` instead of
`application/json` keeps this a CORS "simple request" (no preflight), so the
POST actually reaches `doPost` and gets processed — Apps Script still
receives valid JSON in `e.postData.contents` since we still `JSON.stringify`
the body ourselves, we're just lying about the content type to the browser.
`mode: 'no-cors'` accepts that the response comes back opaque/unreadable in
exchange for the request going through reliably. This is fine because the
call is fire-and-forget — nothing in the UI depends on reading the response.

## Testing

1. Set `NEXT_PUBLIC_ORDER_SHEET_WEBHOOK_URL` locally, restart `next dev`.
2. Add a product to the cart, open the drawer, fill in Name + Phone, click
   **Checkout via WhatsApp**.
3. Confirm WhatsApp opens with the order (including your name/phone) —this
   must work even if the next step fails.
4. Check the Sheet for a new row within a few seconds.
