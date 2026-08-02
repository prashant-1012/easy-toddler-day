# 01 — Requirements

## Functional requirements

### Navigation
- Sticky/floating navbar with: Home, Shop, Blogs, About, Contact, Cart
  (with item-count badge).
- Mobile: hamburger → full-screen or slide-in menu.
- Smooth-scroll to in-page sections from the homepage nav where
  applicable (Home is a single long page composed of sections).

### Catalog / Shop
- Featured Workbooks section on the homepage (subset, e.g. 4–6 items).
- Full `/shop` listing page with all products.
- Each product: image, name, short description, age range, price, "Add
  to Cart" action.
- Product data driven entirely by `lib/data/products.ts` — no CMS.

### Cart
- Add / remove / update quantity, persisted in `localStorage`.
- Slide-over drawer (not a separate page) accessible from the navbar
  cart icon at any time.
- Drawer shows line items, quantity steppers, subtotal, and a
  "Checkout via WhatsApp" CTA.
- Cart must survive a page refresh (hydrated from `localStorage` on
  mount).

### Checkout
- No payment gateway. Clicking checkout builds a formatted WhatsApp
  message (item names, quantities, per-item price, total items, total
  price) and opens `wa.me/<number>?text=<encoded message>` in a new
  tab.
- See [17_WHATSAPP_CHECKOUT.md](./17_WHATSAPP_CHECKOUT.md) for the
  exact message format.

### Content sections (homepage)
Hero, Featured Workbooks, Learning Benefits, About, Testimonials, Blog
Preview, Contact, Footer — see
[03_INFORMATION_ARCHITECTURE.md](./03_INFORMATION_ARCHITECTURE.md).

### Blog
- `/blog` listing page, `/blog/[slug]` detail page.
- Posts authored as static data (`lib/data/blogPosts.ts`) for this
  phase — no MDX/CMS pipeline unless requested later.

### Contact
- Contact section/page with a simple form (name, email, message).
  Since there's no backend, submitting opens a WhatsApp chat with the
  form content pre-filled as the message (same pattern as cart
  checkout) rather than a `mailto:` link.

### Floating WhatsApp button
- Persistent floating action button (bottom-right) that opens a direct
  WhatsApp chat (not tied to cart contents) for general inquiries.

## Non-functional requirements

- **Performance**: Lighthouse ≥ 90 on Performance, Accessibility, Best
  Practices, SEO for the homepage. Use `next/image` for all raster
  images (see [12_ACCESSIBILITY.md](./12_ACCESSIBILITY.md) and Next.js
  image docs referenced in [20_CLAUDE_NOTES.md](./20_CLAUDE_NOTES.md)).
- **Responsive**: Mobile-first; must look premium from 360px up to
  large desktop. See
  [11_RESPONSIVE_STRATEGY.md](./11_RESPONSIVE_STRATEGY.md).
- **Accessibility**: Keyboard-navigable cart drawer and mobile menu,
  visible focus states, sufficient color contrast, semantic landmarks.
- **SEO**: Per-page metadata, Open Graph images, JSON-LD
  `Product`/`Organization` structured data, sitemap, robots.txt. See
  [13_SEO_STRATEGY.md](./13_SEO_STRATEGY.md).
- **Type safety**: All data shapes defined in `lib/types/`, no implicit
  `any`.
- **No backend dependency**: The site must build and run fully static
  (or with client-only interactivity) with zero environment variables
  required for a fresh clone to run `npm run dev` successfully.

## Open questions resolved

| Question | Resolution |
|---|---|
| WhatsApp checkout number | `+91 79720 52896` (confirmed) |
| Product names/prices | Placeholder content, swappable later |
| Brand colors | Approved — [07_COLOR_SYSTEM.md](./07_COLOR_SYSTEM.md) |
| Headline font | Approved — Fredoka, see [08_TYPOGRAPHY.md](./08_TYPOGRAPHY.md) |
| Contact form | Approved — opens WhatsApp chat, see [17_WHATSAPP_CHECKOUT.md](./17_WHATSAPP_CHECKOUT.md) |
| Contact email/phone/address | Placeholders, marked `TODO` |
