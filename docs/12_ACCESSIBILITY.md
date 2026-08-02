# 12 — Accessibility

## Baseline target

WCAG 2.1 AA across the site.

## Structural

- One `<h1>` per page (Hero headline on Home, page title on other
  routes); logical heading order thereafter (`h2` for section titles,
  `h3` for cards) — never skip levels for visual sizing reasons.
- Semantic landmarks: `<nav>`, `<main>`, `<footer>`; each section as
  `<section aria-labelledby="...">` tied to its heading id.
- All interactive elements are real `<button>`/`<a>` elements, never
  `<div onClick>`.

## Cart drawer & mobile menu (both are overlays)

- Trap focus within the open drawer/menu; `Escape` closes it; focus
  returns to the triggering button on close.
- `role="dialog"` + `aria-modal="true"` + `aria-label` on the drawer
  panel.
- Background content gets `inert` (or `aria-hidden="true"` on the
  sibling root) while the overlay is open.

## Images

- Every `next/image` usage requires a meaningful `alt`. Purely
  decorative images (blobs, background flourishes) get `alt=""` so
  screen readers skip them.
- Product images: `alt` describes the product ("Alphabet Tracing
  Workbook cover"), not generic "book image."

## Forms (Contact)

- Every input has an associated `<label>` (visible, not
  placeholder-only).
- Inline error messaging tied via `aria-describedby`, not color alone.

## Motion

- Respect `prefers-reduced-motion` per
  [10_ANIMATION_GUIDELINES.md](./10_ANIMATION_GUIDELINES.md) — this is
  an accessibility requirement, not just a nice-to-have.

## Color & contrast

- All text/background pairings validated against
  [07_COLOR_SYSTEM.md](./07_COLOR_SYSTEM.md)'s contrast table before
  shipping a component.
- Never convey state (in stock / out of stock, error) by color alone —
  pair with an icon or text label.

## Keyboard

- Full site must be operable by keyboard alone: tab order follows
  visual order, visible focus ring (`focus-visible:ring-2`) on every
  interactive element, quantity steppers and Add-to-Cart buttons
  reachable and operable without a mouse.
