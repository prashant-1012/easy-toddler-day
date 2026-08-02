# 07 — Color System

**Revised (2026-08-02):** the palette below is sampled directly from
the actual logo (`/public/images/easytoddlerday-removebg.png`), not
guessed. The first version of this doc proposed an original palette
inspired by the four reference brands without having inspected the
logo file's real pixel colors — the project owner caught this
mismatch and asked for the theme to match the logo. Colors were
extracted programmatically (dominant-color sampling of the logo PNG)
and the palette below reflects those measured values.

## Core palette

| Name | Hex | Sampled from | Role |
|---|---|---|---|
| Coral (Primary) | `#F0475F` | "easy" + heart icon in the logo | Brand color, primary CTAs |
| Coral Dark | `#D62F49` | Darkened from Coral for contrast | Actual button fill (see contrast note below) |
| Sky (Secondary) | `#2F9CD8` | "toddler" in the logo | Links, secondary badges, Learning Benefits accents |
| Sky Dark | `#1979AA` | Darkened from Sky | Section eyebrow labels, secondary button text/border |
| Sage (Tertiary) | `#2FA854` | "day" in the logo | Montessori-inspired accent for "natural/educational" moments |
| Sage Dark | `#0F752B` | Darkened from Sage | Text on `bg-sage/15` badges, hover state for sage elements |
| Marigold (Support accent) | `#FFB627` | Small orange tagline dot in the logo | Minor highlight only — no longer the primary brand color |
| Marigold Dark | `#F2A100` | Darkened from Marigold | Hover state for marigold elements |
| Cream (Background) | `#FFFBF2` | Not from logo — chosen background | Primary page background — warm, not stark white |
| Cloud White | `#FFFFFF` | — | Card surfaces on top of Cream |
| Charcoal (Text) | `#2B2A28` | Close to the tagline text color in the logo | Primary text |
| Warm Gray | `#726D65` | — | Secondary text, muted labels, borders |
| Warm Gray Light | `#E8E3D9` | — | Dividers, subtle borders |

The logo's three-word coloring (coral/sky/sage) **is** the brand
identity — Coral, Sky, and Sage are not arbitrary decorative choices,
they're literally the three colors used for "easy," "toddler," "day."
Any place the brand name renders as text (not the logo image) should
reuse these same three colors per word — see the `Wordmark` component
below.

## Usage rules

- **One primary CTA color per screen**: Coral for the dominant action
  (Add to Cart, Checkout, main Hero CTA) — this is the "easy"/heart
  color, the most prominent color in the logo.
- **Sage** is reserved for the "educational credibility" moments
  (Learning Benefits icons, Montessori-style callouts) — matches "day"
  in the logo.
- **Sky** is used for links, secondary actions, and badges — matches
  "toddler" in the logo.
- **Marigold** is now a minor supporting accent only (small highlight
  dots, badges) — it is not a dominant color in the logo and should
  never compete with Coral for primary CTA weight.
- Text on Coral buttons: use **white**, and use **Coral Dark**
  (`#D62F49`) as the actual button fill rather than the brighter base
  Coral — see the contrast note below. Reserve bright Coral
  (`#F0475F`) for text, icons, badges, and the `Wordmark` component,
  where it doesn't need to pass solid-fill text contrast rules.

## Accessibility (contrast)

| Pairing | Approx ratio | Verdict |
|---|---|---|
| Charcoal `#2B2A28` on Cream `#FFFBF2` | ~14.8:1 | AAA — primary body text |
| White on Coral Dark `#D62F49` | ~4.8:1 | AA — safe for button text |
| White on bright Coral `#F0475F` | ~3.65:1 | Fails AA for normal text — don't use white-on-bright-Coral for body-sized button labels |
| Charcoal on bright Coral `#F0475F` | ~3.99:1 | Also short of AA 4.5:1 — this is why buttons use Coral Dark, not bright Coral, as the fill |
| Warm Gray `#726D65` on Cream | ~4.97:1 | AA — safe for secondary text at any size |

Bright Coral (`#F0475F`) is too light/saturated to reliably pass 4.5:1
with either white or charcoal text — that's why `Button`'s primary
variant fills with **Coral Dark**, not bright Coral. Bright Coral
stays reserved for text/icon/badge use where it's paired with a light
background (tinted chips, the `Wordmark`), not as a solid fill behind
body-sized text.

**Correction (2026-08-03):** Warm Gray was originally `#7A756D`
(estimated ~4.6:1 against Cream). A QA pass measured the actual
*rendered* contrast — not just the theoretical hex math — and found
it was really **4.43:1**, just under the 4.5:1 AA threshold, on the
Hero's `text-lg` subheading (18px sits just under WCAG's 18.66px
"large text" cutoff, so it needs the full 4.5:1, not the relaxed
3:1). Darkened to `#726D65` (4.97:1, comfortable margin) — same warm
neutral hue, six steps darker per channel. Moral: verify contrast
against actual computed styles at the font sizes it's really used at,
not just the token pair in isolation.

**Correction 2 (2026-08-03):** the same QA pass ran Lighthouse's
automated `color-contrast` audit (axe-core) across every page and
found two more systematic failures, both from shared tokens used in
many places at once:
- **Sky Dark `#1F7FB0`** on white/cream backgrounds measured
  **4.3–4.44:1**, just under 4.5:1. This is the color behind every
  `SectionHeading` eyebrow label (FEATURED WORKBOOKS, LEARNING
  BENEFITS, TESTIMONIALS, etc. — every section on the homepage) and
  the `Button` secondary variant's border/text (See How It Works,
  View All Workbooks, View All Posts). Darkened to **`#1979AA`**
  (~4.82:1).
- **Sage Dark `#23893F`** on the `bg-sage/15` badge background
  (effective composited color `#E0EFDA`) measured **3.71:1**, a more
  significant miss. This is the Hero's "Screen-Free Learning, Made
  Joyful" pill and any other `bg-sage/15` + `text-sage-dark` badge
  pairing. Darkened to **`#0F752B`** (~4.87:1).

Both are one-line token changes in `globals.css` that fix every
instance site-wide, since components reference the token, not a
hardcoded hex.

## The `Wordmark` component

`components/ui/Wordmark.tsx` renders "easy" / "toddler" / "day" each
in their logo-matched color (Coral / Sky / Sage), with an optional
tagline ("Play • Learn • Grow") beneath. Used anywhere the brand name
appears as text rather than as the `<Image>` logo — e.g. the Footer.
The navbar itself uses a cropped version of the actual logo image
(`easytoddlerday-logo-cropped.png` — see
[20_CLAUDE_NOTES.md](./20_CLAUDE_NOTES.md) for why a cropped asset was
needed) rather than the `Wordmark` text component.

## CSS custom properties (in `globals.css`)

```css
:root {
  --marigold: #ffb627;
  --marigold-dark: #f2a100;
  --sky: #2f9cd8;
  --sky-dark: #1979aa;
  --coral: #f0475f;
  --coral-dark: #d62f49;
  --sage: #2fa854;
  --sage-dark: #0f752b;
  --cream: #fffbf2;
  --cloud: #ffffff;
  --charcoal: #2b2a28;
  --warm-gray: #726d65;
  --warm-gray-light: #e8e3d9;
}
```

These get mapped into Tailwind v4's `@theme inline` block so they're
usable as `bg-coral-dark`, `text-charcoal`, etc. — see
[06_DESIGN_SYSTEM.md](./06_DESIGN_SYSTEM.md).
