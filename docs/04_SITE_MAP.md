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

## Deferred / not built in this phase

- `/shop/[slug]` product detail pages — only add if the catalog grows
  past what a card grid can communicate. Revisit after Phase 5 review.
