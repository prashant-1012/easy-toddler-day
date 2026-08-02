# 09 — Component Library

Component inventory to be built under `components/`. See
[14_FOLDER_STRUCTURE.md](./14_FOLDER_STRUCTURE.md) for exact file
paths.

## `ui/` — primitive, reusable, no business logic

| Component | Purpose |
|---|---|
| `Button` | Variants: `primary` (Marigold fill), `secondary` (Sky outline), `ghost`. Sizes: `sm`/`md`/`lg`. Handles hover/press motion internally. |
| `Badge` | Small pill label (e.g. "New", age range tag, "Best Seller"). |
| `Card` | Base card shell with `shadow-soft`, `rounded-2xl`, hover → `shadow-lift`. |
| `SectionHeading` | Consistent eyebrow + H2 + optional subtext pattern used across all homepage sections. |
| `Blob` | Decorative SVG background shape, accepts `color`/`className`. |
| `ProductCard` | Image, name, price, age range badge, Add to Cart button — used in Featured Workbooks and `/shop`. |
| `QuantityStepper` | `-` / count / `+` control, used in cart. |

## `layout/`

| Component | Purpose |
|---|---|
| `Navbar` | Logo, nav links, Cart button with badge, mobile hamburger trigger. Sticky on scroll. |
| `MobileMenu` | Slide-in/full-screen nav for small viewports. |
| `Footer` | Nav links, social placeholders, contact placeholder, copyright. |

## `sections/` — homepage sections, one component per section from the master prompt

`Hero`, `FeaturedWorkbooks`, `LearningBenefits`, `About`,
`Testimonials`, `BlogPreview`, `Contact` — each self-contained,
imported in order into `app/page.tsx`.

## `cart/`

| Component | Purpose |
|---|---|
| `CartProvider` | Client Component wrapping the app in `layout.tsx`; owns cart state + localStorage sync. |
| `CartButton` | Navbar icon + item-count badge, opens drawer. |
| `CartDrawer` | Slide-over panel: line items, totals, WhatsApp checkout CTA. |
| `CartItemRow` | Single line item with image, name, price, `QuantityStepper`, remove action. |

## `shared/`

| Component | Purpose |
|---|---|
| `WhatsAppFloat` | Persistent floating action button, bottom-right, opens general-inquiry WhatsApp chat. |

## Composition rule

Sections and layout components may import `ui/` primitives freely.
`ui/` primitives must never import from `sections/` or `cart/` —
keeps the dependency graph one-directional and the primitives reusable.
