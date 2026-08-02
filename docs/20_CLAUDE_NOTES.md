# 20 — Claude Notes

Internal working notes: version-specific facts discovered during
Phase 1 analysis, decisions made, and things still pending input.

## Next.js 16.2.12 — differences from general Next.js knowledge

Confirmed by reading `node_modules/next/dist/docs/` directly (per
`AGENTS.md` instruction) rather than assuming prior training data
still applies:

- **`middleware.ts` → `proxy.ts`**: request-interception file was
  renamed. Not needed for this project (no auth/redirects), but don't
  reach for `middleware.ts` if it ever comes up.
- **New global route-prop helpers**: `PageProps<'/route/[param]'>` and
  `LayoutProps<'/route'>` are auto-generated (via `next dev`/`next
  build`/`next typegen`) and globally available with no import —
  prefer these over hand-rolling `{ params: Promise<{...}> }` prop
  types on page/layout components.
- **`params`/`searchParams` are Promises** and must be `await`ed — this
  matches recent-era Next.js, confirmed still true here, not a
  regression to worry about.
- **Tailwind CSS v4 is CSS-first**: `app/globals.css` already uses
  `@import "tailwindcss"` + `@theme inline` instead of a
  `tailwind.config.js`/`.ts` file. All new design tokens (color,
  fonts) get added as CSS custom properties in `globals.css`, not in a
  JS config file that doesn't exist in this setup.
- **`lucide-react` is on `1.28.0`**, not the more commonly seen `0.x`
  line — checked `package.json`; standard named-icon-import usage
  (`import { IconName } from 'lucide-react'`) is unaffected, no API
  migration needed for this project's usage.

## Business decisions confirmed by project owner (2026-08-02)

- WhatsApp checkout number: `+91 79720 52896` (real, confirmed).
- Product names/descriptions/prices for the 6 existing workbook
  images: **placeholder** content to be drafted, clearly marked for
  later replacement.
- Brand color palette: **approved** (2026-08-02) — see
  [07_COLOR_SYSTEM.md](./07_COLOR_SYSTEM.md).
- Display font: **approved — Fredoka**, alongside Geist Sans. See
  [08_TYPOGRAPHY.md](./08_TYPOGRAPHY.md).
- Contact form: **approved — opens WhatsApp chat** with the form
  content, consistent with the cart checkout pattern (not `mailto:`).
- Contact email/phone/address: **placeholder**, marked `TODO` in
  `lib/constants.ts`.

## Open items still to revisit with the user

1. Confirm whether `/shop/[slug]` product detail pages are needed or
   if card-level info is sufficient for a 6-product catalog (default:
   not building these yet, per
   [04_SITE_MAP.md](./04_SITE_MAP.md)).
