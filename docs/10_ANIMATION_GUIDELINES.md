# 10 — Animation Guidelines (Framer Motion)

## Principles

- Motion communicates hierarchy and delight — it never blocks
  interaction or delays perceived load. No animation should gate
  content visibility beyond ~400ms.
- Respect `prefers-reduced-motion`: wrap durations/transforms with a
  check (Framer Motion's `useReducedMotion()` hook) and fall back to
  simple opacity fades or no animation.
- All animated components that use hooks/variants must be Client
  Components (`'use client'`) — keep the animated wrapper as small as
  possible so the rest of the section can stay a Server Component
  where feasible (e.g. a `<Reveal>` client wrapper around
  server-rendered children).

## Standard timings

| Interaction | Duration | Easing |
|---|---|---|
| Scroll reveal (section/card entrance) | 0.5–0.6s | `easeOut` (custom cubic-bezier `[0.16, 1, 0.3, 1]`) |
| Hover lift (card) | 0.2s | `easeOut` |
| Button press | 0.1s | `easeInOut`, scale to `0.97` |
| Cart drawer open/close | 0.35s | spring (`stiffness: 300, damping: 30`) |
| Hero decorative float (blobs, floating book) | 4–6s loop | `easeInOut`, `repeat: Infinity`, `yoyo`/`repeatType: "mirror"` |
| Mobile menu slide-in | 0.3s | `easeOut` |

## Patterns

- **Scroll reveals**: `initial={{ opacity: 0, y: 24 }}`,
  `whileInView={{ opacity: 1, y: 0 }}`, `viewport={{ once: true, margin: "-80px" }}`.
  Stagger children (cards in a grid) with `staggerChildren: 0.08` on
  the parent variant.
- **Hero entrance**: headline/CTA fade+rise in first, imagery
  composition follows ~100–150ms later for a layered feel, decorative
  blobs start their infinite float loop after entrance completes.
- **Cart badge**: small scale "pop" (`scale: [1, 1.3, 1]`) whenever an
  item is added, to confirm the action without a toast/modal.

## What to avoid

- No parallax so aggressive it causes layout jank on scroll.
- No animating `width`/`height`/`top`/`left` directly — animate
  `transform`/`opacity` only, for performance.
- No more than one infinite-loop animation visible per viewport at a
  time outside the Hero (infinite loops elsewhere read as distracting,
  not premium).
