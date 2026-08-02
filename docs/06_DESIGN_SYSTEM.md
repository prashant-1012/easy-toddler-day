# 06 — Design System

Tailwind CSS v4 is configured CSS-first via `@theme inline` in
`app/globals.css` (no `tailwind.config.js` in this version — see
[20_CLAUDE_NOTES.md](./20_CLAUDE_NOTES.md)). All tokens below are
added as CSS custom properties in `globals.css` and mapped into
`@theme inline`.

## Spacing scale

Use Tailwind's default scale (4px base). Section vertical padding
standard: `py-20` mobile → `py-28`/`py-32` desktop. Never use arbitrary
one-off spacing values without a reason — stick to the scale for
consistency.

## Border radius

| Token | Value | Use |
|---|---|---|
| `rounded-xl` | 0.75rem | Buttons, inputs, small badges |
| `rounded-2xl` | 1rem | Cards |
| `rounded-3xl` | 1.5rem | Large hero/image panels |
| `rounded-full` | — | Pills, avatar, floating action buttons |

## Shadows

Soft, layered, never harsh:

```css
--shadow-soft: 0 2px 8px rgba(43, 42, 40, 0.06), 0 8px 24px rgba(43, 42, 40, 0.06);
--shadow-lift: 0 8px 16px rgba(43, 42, 40, 0.08), 0 16px 40px rgba(43, 42, 40, 0.10);
```

`shadow-soft` for resting cards, `shadow-lift` on hover/active states.

## Decorative motifs

- **Blobs**: organic SVG shapes (soft blob paths) in brand colors at
  low opacity (10–20%), placed behind content as background texture.
  Built as a reusable `<Blob />` component accepting `color` and
  `className` (for position/size) props.
- **Clouds / stars**: small SVG accents used sparingly in the Hero and
  section dividers, never more than 2–3 per screen.
- **Floating workbook**: a product image given a subtle rotate + drop
  shadow + slow float animation, used in the Hero.

## Component inventory

See [09_COMPONENT_LIBRARY.md](./09_COMPONENT_LIBRARY.md) for the full
list — this doc defines the visual tokens those components consume.

## Design tokens summary (single source of truth)

| Category | Reference doc |
|---|---|
| Color | [07_COLOR_SYSTEM.md](./07_COLOR_SYSTEM.md) |
| Typography | [08_TYPOGRAPHY.md](./08_TYPOGRAPHY.md) |
| Motion | [10_ANIMATION_GUIDELINES.md](./10_ANIMATION_GUIDELINES.md) |
| Breakpoints | [11_RESPONSIVE_STRATEGY.md](./11_RESPONSIVE_STRATEGY.md) |
