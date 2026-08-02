# 13 — SEO Strategy

## Metadata

- Every route exports a `metadata` object (or `generateMetadata` for
  dynamic routes like `/blog/[slug]`) with a unique `title`,
  `description`, and canonical-friendly structure.
- Root layout sets a `title.template` (e.g. `"%s | Easy Toddler Day"`)
  so child routes only need their own segment title.
- Replace the current placeholder metadata in `app/layout.tsx`
  (`title: "Create Next App"`) — this is a leftover from scaffolding
  and must be fixed in Phase 5.

## Open Graph / social

- Use the file-convention `opengraph-image` (static image or generated
  via `opengraph-image.tsx`) at the root and per blog post so shared
  links (WhatsApp/Instagram, matching the personas) render a rich
  preview card.

## Structured data (JSON-LD)

- `Organization` schema in the root layout (name, logo, URL, contact
  point — using placeholder contact info until real values are
  provided).
- `Product` schema per workbook on `/shop` (name, image, price,
  availability) — note: price/availability are placeholder values
  until real product data lands.
- `BlogPosting` schema per blog detail page.

## Sitemap & robots

- `app/sitemap.ts` — generated sitemap covering `/`, `/shop`, `/blog`,
  every `/blog/[slug]`, `/about`, `/contact`.
- `app/robots.ts` — allow all, point to the sitemap.

## Performance-as-SEO

- All images via `next/image` (automatic sizing, lazy-loading,
  modern formats) — see
  [12_ACCESSIBILITY.md](./12_ACCESSIBILITY.md) for the `alt` text
  requirement that overlaps here.
- Fonts already optimized via `next/font/google` (self-hosted, no
  render-blocking external font requests).

## Content/keyword notes

- Primary intent keywords to weave naturally into copy: "toddler
  workbooks," "toddler learning activities," "screen-free toddler
  activities," "Montessori-inspired workbooks for toddlers." Don't
  keyword-stuff — this is a premium brand, copy quality matters more
  than density.
