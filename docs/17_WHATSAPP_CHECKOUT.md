# 17 — WhatsApp Checkout

## Confirmed number

`+91 7020234880` — stored in `lib/constants.ts` as
`WHATSAPP_NUMBER = "917020234880"` (digits only, country code included,
no `+`/spaces — required format for `wa.me` links).

## Message format

Built in `lib/utils/whatsapp.ts`, a pure function
`buildOrderMessage(items: CartItem[], customer: { name: string; phone:
string }): string`. Name and phone come from two required fields in the
cart drawer, directly above the checkout button (added 2026-09-16 — see
[21_GOOGLE_SHEETS_LEAD_INTEGRATION.md](./21_GOOGLE_SHEETS_LEAD_INTEGRATION.md)
for why):

```
Hi Sneha!
I’d like to place an order with Easy Toddler Day.

*Customer*: Priya Sharma
*Mobile*: +91 9876543210

*Order Details*:
• Weekly Learning Calendar × 2 — ₹698
• Theme Workbook A–F × 1 — ₹499

*Total Items*: 3
*Total Amount*: ₹1,197

*Please let me know the next steps.*
Thank you!

_Order placed through the Easy Toddler Day website._
```

**Revised 2026-10-10** — the owner supplied this exact wording to replace
the earlier plain-text format. Rules:

- Greets the owner **by name** (`BUSINESS_OWNER_NAME = 'Sneha'` in
  `lib/constants.ts`), not the brand — it reads like a person writing to a
  person, which is the point of a WhatsApp handoff. Change that constant if
  whoever answers the business number changes.
- Uses **WhatsApp's own markdown**: `*bold*` for the field labels and the
  closing ask, `_italic_` for the provenance line. The markers must sit
  tight against the text they wrap (`*Customer*:`, not `* Customer *:`) or
  WhatsApp renders them as literal asterisks.
- `*Customer*` / `*Mobile*` are their own labelled lines rather than being
  folded into the greeting, so the owner can scan who they're talking to
  without reading a sentence.
- One bulleted line per item: `• <name> × <quantity> — ₹<line total>`
  (U+2022 bullet, U+00D7 multiplication sign, U+2014 em dash — not `*`,
  `x` or `-`; a leading `*` or `-` would collide with WhatsApp's own
  list/bold syntax).
- `Total Items` = sum of quantities (not distinct product count).
- `Total Amount` = sum of `price * quantity`, formatted via the same
  `format-price.ts` helper used everywhere else (no separate formatting
  logic here).
- Trailing italic `_Order placed through the Easy Toddler Day website._`
  line so the owner can distinguish website orders from organic WhatsApp
  messages.
- **No emoji (2026-10-11).** The owner's original wording had a waving hand
  (U+1F44B) after the greeting and a yellow heart (U+1F49B) after "Thank
  you!", and they were implemented as-is. The owner then reported both
  arriving in WhatsApp as a missing-glyph box. The source and transport were
  verified correct — the compiled bundle keeps `👋` as an escape the
  JS parser resolves to the real code point, and `encodeURIComponent` emits
  valid UTF-8 (`%F0%9F%91%8B`) — so nothing in this project was corrupting
  them; some WhatsApp clients mangle astral-plane (4-byte UTF-8) characters
  in `wa.me` prefilled text. Both were removed rather than debugged per
  client, since they carried no information and a broken glyph in a
  customer's order message looks worse than none. **Don't re-add emoji to
  this message** without testing on a real device first. BMP punctuation
  (bullet, ×, em dash, curly apostrophe, ₹) is 2-3 byte UTF-8 and is fine.

## Link construction

```ts
const encoded = encodeURIComponent(message)
const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`
window.open(url, '_blank', 'noopener,noreferrer')
```

- Always `encodeURIComponent` the full message — never hand-build the
  query string.
- Open in a new tab (`_blank`) with `noopener,noreferrer` so the
  storefront tab stays open and the cart isn't lost if the user comes
  back.
- Do **not** clear the cart automatically after opening WhatsApp — the
  order isn't confirmed until the business owner replies; clearing
  would lose the user's selection if they made a typo or the chat
  didn't open (e.g. desktop without WhatsApp Web session). Provide a
  separate manual "Clear Cart" affordance instead.

## Floating WhatsApp button (general inquiries)

- Separate from checkout — a fixed link to
  `https://wa.me/917020234880?text=<encoded generic greeting>` (e.g.
  "Hi! I have a question about Easy Toddler Day workbooks."), not tied
  to cart contents.

## Edge cases

- Empty cart: the checkout CTA in the drawer should be disabled (or
  hidden in favor of the empty-state CTA) rather than sending a blank
  order message.
- Very long carts: WhatsApp URLs have a practical length limit in some
  clients; if this becomes a real concern post-launch, revisit
  (out of scope for this phase given expected small toddler-workbook
  order sizes).
