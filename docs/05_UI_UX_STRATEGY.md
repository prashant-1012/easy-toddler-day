# 05 — UI/UX Strategy

## Reference brands and what we borrow from each

| Brand | What we borrow | What we avoid |
|---|---|---|
| **Apple** | Generous whitespace, restrained color use per screen, large confident typography, product-as-hero photography | Cold/sterile minimalism — toddlers need warmth |
| **Canva** | Friendly rounded shapes, layered soft-shadow cards, approachable color pairing | Over-busy template look |
| **Duolingo** | Playful motion, bold single-accent CTAs, mascot-like energy in illustration/blobs | Cartoonish clutter, neon overload |
| **Montessori** | Natural, calm materials feel (wood tones, muted greens), sense of "purposeful" learning | Beige/boring — needs the playful accent layer on top |

The site should read as **"a premium studio made this for my toddler,"**
not "a template with kid clip-art."

## Core visual principles

1. **Whitespace first.** Every section gets room to breathe. Never
   stack more than 3 content density levels on one screen.
2. **One playful accent per view.** A blob, a floating book, a cloud —
   not five decorative elements competing at once.
3. **Photography over illustration.** Where real workbook photos
   exist, they are the hero, not generic icons.
4. **Rounded, soft, layered.** Large border radii (see
   [06_DESIGN_SYSTEM.md](./06_DESIGN_SYSTEM.md)), soft multi-stop
   shadows, cards that visually float above the background.
5. **Motion with purpose.** Framer Motion is used for entrance reveals
   and micro-interactions, never decoration for its own sake — see
   [10_ANIMATION_GUIDELINES.md](./10_ANIMATION_GUIDELINES.md).

## The Hero (special focus, per master prompt)

The hero must **not** be a boring centered headline+button. Target
composition:

- Asymmetric split layout: headline + CTA on one side, a layered
  floating composition of hero imagery (using the existing hero
  PNGs/GIFs and a floating workbook cover) on the other.
- Decorative background elements (soft blobs, cloud shapes, a couple
  of star/sparkle accents) positioned behind the imagery, animated
  with slow float/parallax on mount and subtle scroll parallax.
- Logo integrated tastefully (small, in the navbar — not competing in
  the hero itself unless it reads as part of the composition).
- Strong single CTA ("Shop Workbooks" or similar) plus a secondary
  lower-emphasis link (e.g. "See how it works" scrolling to Learning
  Benefits).
- On mobile, the layered composition simplifies to a single centered
  hero image with the same decorative accents scaled down — never
  literally the desktop layout squeezed smaller.

## Interaction feel

- Buttons: soft press (scale-down on tap), color shift on hover, never
  an abrupt/instant state change.
- Cards: gentle lift (translateY + shadow increase) on hover.
- Cart drawer: slides in from the right with spring easing, backdrop
  fades in behind it.
