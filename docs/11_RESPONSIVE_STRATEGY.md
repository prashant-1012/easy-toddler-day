# 11 — Responsive Strategy

## Approach

Mobile-first. Every component is designed and built for a 360–420px
viewport first, then enhanced upward. Given the personas
([02_USER_PERSONAS.md](./02_USER_PERSONAS.md)), a large share of
traffic is mobile (Instagram/WhatsApp referrals).

## Breakpoints (Tailwind defaults — no custom breakpoints needed)

| Prefix | Min width | Primary target |
|---|---|---|
| (none) | 0px | Phones |
| `sm:` | 640px | Large phones / small tablets (landscape) |
| `md:` | 768px | Tablets |
| `lg:` | 1024px | Small laptops — where multi-column layouts typically activate |
| `xl:` | 1280px | Desktop |
| `2xl:` | 1536px | Large desktop — cap max content width here, don't stretch infinitely |

## Layout rules

- Global content max-width container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
- Product/testimonial/blog grids: 1 column mobile → 2 columns `sm`/`md`
  → 3–4 columns `lg`+.
- Hero composition: stacked/centered single-column on mobile with a
  simplified decorative layer; asymmetric split layout activates at
  `lg:`.
- Navbar: hamburger menu below `lg:`, full inline nav at `lg:`+.
- Cart drawer: full-width (or near-full) on mobile, fixed
  `max-w-md` panel on larger screens.
- Touch targets: minimum 44×44px for any tappable control (buttons,
  quantity steppers, nav links) regardless of breakpoint.

## Testing checklist

Verify at minimum: 375px (iPhone SE-class), 390px (standard modern
phone), 768px (tablet portrait), 1024px (small laptop), 1440px
(desktop). See [19_TESTING_CHECKLIST.md](./19_TESTING_CHECKLIST.md).
