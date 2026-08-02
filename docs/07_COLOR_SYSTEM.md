# 07 — Color System (proposed — pending approval)

Since no existing brand colors were provided, this palette is designed
fresh, inspired by Apple's restraint, Canva's friendliness, Duolingo's
playful confidence, and Montessori's natural warmth. **Please review
before Phase 5 build begins.**

## Core palette

| Name | Hex | Role |
|---|---|---|
| Marigold (Primary) | `#FFB627` | Brand color, primary CTAs, key accents |
| Marigold Dark | `#F2A100` | Hover/active state for primary buttons |
| Sky (Secondary) | `#4EC5E0` | Links, secondary badges, Learning Benefits accents |
| Sky Dark | `#2FA8C4` | Hover state for sky elements |
| Coral (Accent) | `#FF6F5E` | Sparingly — sale badges, highlight icons, testimonial stars |
| Sage (Tertiary) | `#7CB893` | Montessori-inspired accent for "natural/educational" moments (Learning Benefits, About) |
| Cream (Background) | `#FFFBF2` | Primary page background — warm, not stark white |
| Cloud White | `#FFFFFF` | Card surfaces on top of Cream |
| Charcoal (Text) | `#2B2A28` | Primary text — soft near-black, warm undertone, not pure `#000` |
| Warm Gray | `#7A756D` | Secondary text, muted labels, borders |
| Warm Gray Light | `#E8E3D9` | Dividers, subtle borders |

## Usage rules

- **One primary CTA color per screen**: Marigold for the dominant
  action (Add to Cart, Checkout, main Hero CTA). Don't let Sky and
  Coral compete for the same visual weight in one view.
- **Sage** is reserved for the "educational credibility" moments
  (Learning Benefits icons, Montessori-style callouts) — keep it out
  of pure commerce UI (cart, pricing) so it doesn't dilute meaning.
- **Coral** is a highlight/alert color (badges like "New," star
  ratings) — never a large fill area.
- Text on Marigold/Coral buttons: use Charcoal or White depending on
  contrast check (Marigold `#FFB627` is light enough that white text
  fails contrast — use Charcoal `#2B2A28` on Marigold buttons; use
  White on Sky Dark/Coral buttons).

## Accessibility (contrast)

| Pairing | Approx ratio | Verdict |
|---|---|---|
| Charcoal `#2B2A28` on Cream `#FFFBF2` | ~14.8:1 | AAA — primary body text |
| Charcoal on Marigold `#FFB627` | ~9.2:1 | AAA — button text |
| White on Sky Dark `#2FA8C4` | ~3.4:1 | AA for large text/UI only — use for buttons ≥18px bold or icons, not small body copy |
| Warm Gray `#7A756D` on Cream | ~4.6:1 | AA — fine for secondary text ≥14px |

Re-verify with a contrast checker once real component code exists;
these are pre-implementation estimates.

## CSS custom properties (to add in `globals.css`)

```css
:root {
  --color-marigold: #FFB627;
  --color-marigold-dark: #F2A100;
  --color-sky: #4EC5E0;
  --color-sky-dark: #2FA8C4;
  --color-coral: #FF6F5E;
  --color-sage: #7CB893;
  --color-cream: #FFFBF2;
  --color-cloud: #FFFFFF;
  --color-charcoal: #2B2A28;
  --color-warm-gray: #7A756D;
  --color-warm-gray-light: #E8E3D9;
}
```

These get mapped into Tailwind v4's `@theme inline` block so they're
usable as `bg-marigold`, `text-charcoal`, etc. — see
[06_DESIGN_SYSTEM.md](./06_DESIGN_SYSTEM.md).
