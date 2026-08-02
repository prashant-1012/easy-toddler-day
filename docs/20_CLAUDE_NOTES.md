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
- Brand color palette: initially approved (2026-08-02), then
  **corrected the same day** after the owner pointed out the theme
  didn't actually match the logo's real colors. The original palette
  was invented (inspired by the four reference brands) without
  sampling the logo file itself. Re-derived by extracting dominant
  colors from `easytoddlerday-removebg.png` programmatically: Coral
  `#F0475F` ("easy"/heart), Sky `#2F9CD8` ("toddler"), Sage `#2FA854`
  ("day"). Marigold was demoted from primary to a minor accent since
  it isn't actually a dominant logo color. See
  [07_COLOR_SYSTEM.md](./07_COLOR_SYSTEM.md) for the corrected
  palette and the contrast math behind using Coral Dark (not bright
  Coral) as the solid button fill.
- **Navbar logo asset**: the source PNG
  (`easytoddlerday-removebg.png`) is a 500×500 canvas where the actual
  visible logo content is only ~156px tall (~31% of the canvas),
  centered with heavy transparent padding above/below. Rendering it at
  a normal navbar height left the visible logo tiny even though the
  container looked reasonably sized — this was the root cause of the
  "logo looks too small" feedback, not just a sizing tweak. Fixed by
  cropping to the content's alpha bounding box and saving a new
  derived asset, `public/images/easytoddlerday-logo-cropped.png`
  (490×156, ~3.14:1) — the original file is untouched. The Navbar now
  renders the cropped asset. If the logo file is ever replaced,
  re-run the same crop (find the alpha-channel bounding box, trim to
  it) rather than reusing the stale cropped file.
- Wherever the brand name appears as **text** (not the logo image),
  use `components/ui/Wordmark.tsx`, which colors "easy"/"toddler"/"day"
  to match the logo exactly, rather than a plain single-color heading.
  Wired into the Footer; consider it for the Hero too when that's
  built.
- Display font: **approved — Fredoka**, alongside Geist Sans. See
  [08_TYPOGRAPHY.md](./08_TYPOGRAPHY.md).
- Contact form: **approved — opens WhatsApp chat** with the form
  content, consistent with the cart checkout pattern (not `mailto:`).
- Contact email/phone/address: **placeholder**, marked `TODO` in
  `lib/constants.ts`.

- **Blog cover images** (2026-08-02): the owner added
  `blog1.jpeg`, `blog2.webp`, `blog3.jpg` to `/public/images` for use
  as blog post covers.
  - `blog2.webp` (mom + daughter painting) → used for "How to Be Your
    Toddler's First Learning Coach."
  - `blog3.jpg` (girl writing with colored pencils) → used for
    "Phonics at Home: A Gentle Starting Point."
  - `blog1.jpeg` was **not** used — it shows a visible third-party
    school logo ("Bachpan Play School") on the child's uniform, and
    depicts a smart/audio pen device, which both risks implying an
    affiliation we don't have and cuts against the site's screen-free
    positioning. The "Screen-Free Summer Activities" post still uses
    the generated `BlogCoverArt` fallback. Flag to the owner if a
    replacement photo becomes available.
  - `BlogPost.coverImage` is now optional — `BlogCover`
    (`components/ui/BlogCover.tsx`) renders the real photo when
    present, otherwise falls back to `BlogCoverArt`.
- **About/Contact page hero images** (2026-08-02): the owner asked to
  use the remaining unused images
  (`summer-class-hero-image.png`, `Parent-Coach-hero-Image.gif`,
  `phonics-for-hom-hero-1.gif`, `MiniMakersClubSliderImg.png`) as hero
  banners on `/about` and `/contact`. Two of the four were salvageable
  by cropping; two were not:
  - `Parent-Coach-hero-Image.gif` → its "NEW LAUNCH" badge and
    decorative squiggles all sit in the transparent margin *outside*
    the photo's organic blob shape, so a rectangular crop through the
    middle avoids them entirely. Cropped to
    `public/images/about-hero-parent-coach.png` (800×620, from the
    1080×1080 source at x:150 y:250), used in `AboutHero`
    (`components/sections/AboutHero.tsx`).
  - `summer-class-hero-image.png` is a 4-panel collage; the
    "LIVE CLASSES"/"PERSONALIZED CLASSES" panel has its text baked
    directly across the child's body and can't be cropped clean, but
    the bottom-left panel (boy coloring) only had its
    "LIMITED SPOTS AVAILABLE" banner and the "+898" avatar bubble
    intruding from the edges. Cropped to
    `public/images/contact-hero-boy-coloring.png` (440×320, from the
    1080×1080 source at x:115 y:550), used in `ContactHero`
    (`components/sections/ContactHero.tsx`).
  - `phonics-for-hom-hero-1.gif` (shows a competing product box,
    "Skill Boosters PHONICS EDITION") and `MiniMakersClubSliderImg.png`
    (visible Lacoste logo on the child's shirt) were **not** used —
    in both, the problem element runs through the main subject rather
    than sitting in a marginal/croppable area, so there's no clean
    rectangular crop that keeps the subject and loses the issue.
    Still unused; revisit if the owner wants them for a future page
    and can accept cropping down to a much tighter, subject-only
    region (likely losing most of the frame), or has a replacement
    photo.
  - Original source files are untouched; the new files are cropped
    derivatives, following the same pattern as the navbar logo crop.

## Open items still to revisit with the user

1. Confirm whether `/shop/[slug]` product detail pages are needed or
   if card-level info is sufficient for a 6-product catalog (default:
   not building these yet, per
   [04_SITE_MAP.md](./04_SITE_MAP.md)).
2. A replacement photo for the "Screen-Free Summer Activities" blog
   post cover, if the owner wants a real photo instead of the
   generated cover treatment (see blog cover note above).
