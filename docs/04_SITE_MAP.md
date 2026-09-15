# 04 — Site Map (route → file mapping)

Next.js 16 App Router, file-system based routing under `app/`.

```
app/
├── layout.tsx              → root layout (Navbar, Footer, CartProvider, WhatsAppFloat)
├── page.tsx                → "/"            Home (all homepage sections)
├── globals.css
├── sitemap.ts               → /sitemap.xml (generated)
├── robots.ts                → /robots.txt (generated)
├── shop/
│   └── page.tsx             → "/shop"        Full catalog
├── blog/
│   ├── page.tsx             → "/blog"        Blog listing
│   └── [slug]/
│       └── page.tsx         → "/blog/[slug]" Blog post detail
├── about/
│   └── page.tsx             → "/about"
└── contact/
    └── page.tsx             → "/contact"
```

## Notes specific to this Next.js version

- `params` in dynamic routes (e.g. `app/blog/[slug]/page.tsx`) are a
  **Promise** and must be awaited: `const { slug } = await params`.
- This version generates global `PageProps<'/blog/[slug]'>` and
  `LayoutProps<'/route'>` helper types automatically during
  `next dev`/`next build` — prefer these over hand-writing the
  `params`/`searchParams` prop types. See
  [20_CLAUDE_NOTES.md](./20_CLAUDE_NOTES.md).
- No `middleware.ts` is needed for this project (no auth/redirect
  logic), but note this version renamed that file to `proxy.ts` if it's
  ever needed.

## Route additions since the initial build

- `/shop/[slug]` product detail pages — built (2026-09-15), per the
  project owner's request once the real product catalog (5 products
  under `public/products/`) replaced the 6 placeholder workbooks.
  Statically generated via `generateStaticParams` in
  `app/shop/[slug]/page.tsx`, mirroring the existing `/blog/[slug]`
  pattern. See [15_DATA_STRUCTURE.md](./15_DATA_STRUCTURE.md) for the
  updated `Product` shape and [09_COMPONENT_LIBRARY.md](./09_COMPONENT_LIBRARY.md)
  for the new `shop/` components.
