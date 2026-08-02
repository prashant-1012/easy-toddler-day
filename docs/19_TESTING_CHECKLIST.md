# 19 — Testing Checklist

Run this checklist after each section (Phase 5 step) and once more
fully at the end.

## Functional
- [ ] Add to cart from Featured Workbooks and `/shop` both work and
      merge quantities correctly for the same product
- [ ] Cart drawer opens/closes from the navbar on every route
- [ ] Quantity stepper never goes below 1; remove button removes the
      line entirely
- [ ] Cart persists across a full page reload (`localStorage`)
- [ ] Cart persists across navigation between routes
- [ ] Checkout button opens WhatsApp with correctly formatted message
      (verify item names, quantities, per-line price, total items,
      total price all match the drawer's displayed totals)
- [ ] Empty cart shows an empty state, checkout CTA disabled/hidden
- [ ] Floating WhatsApp button opens a general-inquiry chat, unrelated
      to cart contents
- [ ] All nav links route correctly; mobile menu opens/closes and
      closes on route change
- [ ] Blog listing → blog detail navigation works for every post slug

## Responsive (see [11_RESPONSIVE_STRATEGY.md](./11_RESPONSIVE_STRATEGY.md))
- [ ] 375px, 390px, 768px, 1024px, 1440px all reviewed for every
      shipped section
- [ ] No horizontal scroll at any breakpoint
- [ ] Touch targets ≥44px on mobile

## Accessibility (see [12_ACCESSIBILITY.md](./12_ACCESSIBILITY.md))
- [ ] Full keyboard traversal: nav, cart drawer, mobile menu, product
      cards, contact form
- [ ] Focus trap + `Escape`-to-close verified on cart drawer and
      mobile menu
- [ ] All images have appropriate `alt` (or `alt=""` if decorative)
- [ ] Color contrast spot-checked against
      [07_COLOR_SYSTEM.md](./07_COLOR_SYSTEM.md)'s table
- [ ] `prefers-reduced-motion` respected (test via OS/browser setting)

## Performance / SEO
- [ ] Lighthouse run on Home, `/shop`, a blog detail page — target
      ≥90 across Performance/Accessibility/Best Practices/SEO
- [ ] All images use `next/image`, no raw `<img>` tags
- [ ] Root metadata no longer says "Create Next App" (placeholder
      scaffolding text)
- [ ] Sitemap and robots.txt reachable and correct

## Cross-browser (spot check, not exhaustive)
- [ ] Chrome, Safari (mobile + desktop — WhatsApp deep links behave
      differently on iOS Safari vs Android Chrome, verify both)
- [ ] Firefox

## Build
- [ ] `npm run build` succeeds with no type errors
- [ ] `npm run lint` passes
