# 08 — Typography

## Current setup

`app/layout.tsx` already loads **Geist Sans** and **Geist Mono** via
`next/font/google`, exposed as CSS variables `--font-geist-sans` /
`--font-geist-mono` and wired into Tailwind's `@theme inline` as
`--font-sans` / `--font-mono`. Geist Sans is a strong, clean, highly
legible UI face — good for body text, nav, buttons, forms.

## Proposal: a display face for headings

Geist alone can read a little corporate/neutral for a toddler-brand
hero. Recommend adding **one** rounded, friendly display font for
headings only (H1/H2, hero headline, section titles), loaded via
`next/font/google` alongside Geist — e.g. **Baloo 2** or **Fredoka**
(both are free Google Fonts with a soft, rounded, toddler-friendly
character without tipping into "children's book clip-art" territory).

This is a **design decision pending your approval** — flag before
Phase 5. If declined, Geist Sans at heavier weights (`font-semibold`
/`font-bold`) with generous letter-spacing on headlines is the
fallback.

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
