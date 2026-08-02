# 08 — Typography

## Current setup

`app/layout.tsx` already loads **Geist Sans** and **Geist Mono** via
`next/font/google`, exposed as CSS variables `--font-geist-sans` /
`--font-geist-mono` and wired into Tailwind's `@theme inline` as
`--font-sans` / `--font-mono`. Geist Sans is a strong, clean, highly
legible UI face — good for body text, nav, buttons, forms.

## Display face for headings — **decided: Fredoka**

Geist alone read too corporate/neutral for a toddler-brand hero.
**Fredoka** (Google Font) is used for all headings (H1/H2/H3, hero
headline, section titles) — a soft, rounded, confident display face
that adds toddler-brand personality without tipping into
"children's-book clip-art" territory. Loaded via `next/font/google`
alongside Geist, exposed as `--font-display` and mapped into Tailwind
as `font-display`.

```ts
// app/layout.tsx
import { Fredoka } from 'next/font/google'

const fredoka = Fredoka({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
})
```

Body/UI text stays on Geist Sans (`font-sans`); only heading-level
elements get `font-display`.

## Type scale

| Token | Size (mobile → desktop) | Weight | Use |
|---|---|---|---|
| Display / Hero H1 | `text-4xl` → `text-6xl/7xl` | 700 | Hero headline only |
| H2 | `text-3xl` → `text-4xl/5xl` | 700 | Section titles |
| H3 | `text-xl` → `text-2xl` | 600 | Card titles, sub-sections |
| Body Large | `text-lg` | 400 | Hero subhead, intro paragraphs |
| Body | `text-base` | 400 | Default paragraph text |
| Small | `text-sm` | 400/500 | Meta text, labels, captions |
| Button | `text-base` | 600 | All CTA buttons |

## Rules

- Line-height: generous for body (`leading-relaxed`), tighter for
  large display headings (`leading-tight`).
- Max line length for body copy: constrain paragraph containers to
  `max-w-prose` (~65ch) for readability.
- Never use more than 2 font families total (one sans for UI/body, one
  optional display for headings).
- All heading levels must remain semantically correct (one `<h1>` per
  page) regardless of visual size — accessibility over convenience.
