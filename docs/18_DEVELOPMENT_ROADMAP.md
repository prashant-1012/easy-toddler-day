# 18 — Development Roadmap

Per the master prompt, Phase 5 is built **section-by-section with a
pause for approval after each major section**. Order below follows
that rule and builds foundational pieces before content sections that
depend on them.

## Step 0 — Foundation (build once, no pause needed, but reviewed together)
- Folder structure ([14_FOLDER_STRUCTURE.md](./14_FOLDER_STRUCTURE.md))
- Design tokens in `globals.css` ([06](./06_DESIGN_SYSTEM.md), [07](./07_COLOR_SYSTEM.md), [08](./08_TYPOGRAPHY.md))
- Core types + placeholder data (`lib/types`, `lib/data`, `lib/constants.ts`)
- `ui/` primitives: `Button`, `Card`, `Badge`, `SectionHeading`, `Blob`, `Reveal`

## Step 1 — Shell
- `Navbar` + `MobileMenu` + `Footer`
- `CartProvider` + `CartButton` (badge only, drawer stubbed)
- Wire into `app/layout.tsx`, fix root metadata
→ **pause for approval**

## Step 2 — Hero
- Maximum-effort composition per
  [05_UI_UX_STRATEGY.md](./05_UI_UX_STRATEGY.md)
→ **pause for approval**

## Step 3 — Featured Workbooks + Shop catalog
- `ProductCard`, `FeaturedWorkbooks` (homepage), `/shop` page
- Real "Add to Cart" wiring against `CartProvider`
→ **pause for approval**

## Step 4 — Cart Drawer + WhatsApp Checkout
- `CartDrawer`, `CartItemRow`, `QuantityStepper`
- `lib/utils/whatsapp.ts` checkout flow
- `WhatsAppFloat` (general inquiry button)
→ **pause for approval**

## Step 5 — Learning Benefits
→ **pause for approval**

## Step 6 — About (homepage condensed + `/about` full page)
→ **pause for approval**

## Step 7 — Testimonials
→ **pause for approval**

## Step 8 — Blog Preview (homepage) + `/blog` + `/blog/[slug]`
→ **pause for approval**

## Step 9 — Contact (homepage condensed + `/contact` full page + form)
→ **pause for approval**

## Step 10 — SEO pass
- `sitemap.ts`, `robots.ts`, JSON-LD, OG images, per-page metadata
  ([13_SEO_STRATEGY.md](./13_SEO_STRATEGY.md))
→ **pause for approval**

## Step 11 — Full QA pass
- Run through [19_TESTING_CHECKLIST.md](./19_TESTING_CHECKLIST.md)
  end-to-end before calling the build done.

## Working agreement

Before starting each step, restate: what's being built, which files
change, and why — per the master prompt's Communication Rules. Don't
start the next step until the current one is approved.
