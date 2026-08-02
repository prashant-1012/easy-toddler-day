# 17 — WhatsApp Checkout

## Confirmed number

`+91 79720 52896` — stored in `lib/constants.ts` as
`WHATSAPP_NUMBER = "917972052896"` (digits only, country code included,
no `+`/spaces — required format for `wa.me` links).

## Message format

Built in `lib/utils/whatsapp.ts`, a pure function
`buildOrderMessage(items: CartItem[]): string`:

```
Hi Easy Toddler Day! I'd like to order:

1. Alphabet Tracing Workbook x2 — ₹598
2. Number Fun Workbook x1 — ₹299

Total Items: 3
Total Price: ₹897

(Sent from the website cart)
```

Rules:
- One line per item: `<name> x<quantity> — ₹<line total>`.
- `Total Items` = sum of quantities (not distinct product count).
- `Total Price` = sum of `price * quantity` across items, formatted via
  the same `format-price.ts` helper used everywhere else (no separate
  formatting logic here).
- Trailing `(Sent from the website cart)` line so the business owner
  can distinguish website orders from organic WhatsApp messages.

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
  `https://wa.me/917972052896?text=<encoded generic greeting>` (e.g.
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
