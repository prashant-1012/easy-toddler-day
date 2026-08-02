# 03 — Information Architecture

## Primary navigation

```
Home · Shop · Blogs · About · Contact          [Cart icon w/ badge]
```

- **Home**, **About**, **Contact** are conceptually sections, but
  About and Contact also get their own dedicated routes
  (`/about`, `/contact`) for direct linkability and SEO — the navbar
  links to the routes; the homepage additionally surfaces condensed
  versions of About/Testimonials/Contact as scroll sections so a
  single-page visitor gets the full pitch without navigating away.
- **Cart** is not a route — it's a drawer, triggered from anywhere.

## Homepage section order (top → bottom)

1. Hero
2. Featured Workbooks
3. Learning Benefits
4. About (condensed)
5. Testimonials
6. Blog Preview
7. Contact
8. Footer

This order is deliberate: hook → product proof → value proposition →
trust (who's behind this) → social proof → soft content touchpoint →
conversion → utility links. Don't reorder without re-checking this
narrative arc.

## Route map

| Route | Purpose |
|---|---|
| `/` | Homepage — all sections above |
| `/shop` | Full product catalog |
| `/shop/[slug]` | Optional — single product detail (only if catalog grows beyond quick-glance cards; flag to user before building) |
| `/blog` | Blog listing |
| `/blog/[slug]` | Blog post detail |
| `/about` | Full About page (deeper version of homepage section) |
| `/contact` | Full Contact page (deeper version of homepage section) |

## Global/persistent UI (not routes)

- Navbar (all pages)
- Footer (all pages)
- Cart drawer (all pages)
- Floating WhatsApp button (all pages)

See [04_SITE_MAP.md](./04_SITE_MAP.md) for the file-system mapping of
this structure under `app/`.
