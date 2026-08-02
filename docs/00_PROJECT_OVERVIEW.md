# 00 — Project Overview

## What this is

**Easy Toddler Day** sells physical, printed educational workbooks for
toddlers (roughly ages 1.5–6). The website is a marketing + catalog +
lightweight ordering site — not a full e-commerce platform. There is no
backend, no payment gateway, and no user accounts. Orders are collected
via a **WhatsApp handoff**: the customer builds a cart in the browser,
clicks checkout, and a pre-filled WhatsApp message opens so the actual
sale is closed in a chat with the business owner.

## Business goals

1. Build trust with parents in the first 3 seconds (premium visual
   quality signals "this is a real, careful product," not a dropship
   listing).
2. Communicate the educational value (Montessori-adjacent, screen-free,
   developmentally appropriate) without sounding academic or dry.
3. Make browsing the catalog and adding to cart frictionless on mobile
   — most traffic is expected to come from Instagram/WhatsApp shares.
4. Convert intent into a WhatsApp conversation, since there's no
   payment gateway.

## Tech stack

| Layer | Choice | Notes |
|---|---|---|
| Framework | Next.js 16.2.12 (App Router) | See [20_CLAUDE_NOTES.md](./20_CLAUDE_NOTES.md) for version-specific API differences from older Next.js knowledge. |
| Language | TypeScript | Strict mode, no `any` in shipped code. |
| Styling | Tailwind CSS v4 | CSS-first config via `@theme inline` in `globals.css`, not `tailwind.config.js`. |
| Motion | Framer Motion 12 | Used for hero composition, scroll reveals, cart drawer transitions. |
| Icons | lucide-react 1.28 | Tree-shakeable, consistent stroke-based icon set. |
| Fonts | `next/font/google` (Geist Sans / Geist Mono, already wired in `layout.tsx`) | See [08_TYPOGRAPHY.md](./08_TYPOGRAPHY.md) for a proposal to add a playful display face for headings. |
| State | React Context + `useReducer` for cart, `localStorage` for persistence | No Redux/Zustand — the app is small enough that Context is sufficient. |
| Deployment | Vercel | Static/ISR where possible; no server runtime needed since there's no backend. |

## Non-goals (explicitly out of scope)

- User authentication / accounts
- A real payment gateway (Razorpay, Stripe, etc.)
- A CMS or database — content (products, blog posts, testimonials) is
  authored as typed TypeScript data files (see
  [15_DATA_STRUCTURE.md](./15_DATA_STRUCTURE.md)).
- Server-side order storage — the cart lives entirely in the browser.

## Placeholder data in this build

Per the project owner, the following are placeholders to be swapped
before launch:

- **Product names, descriptions, and prices** for the 6 existing
  workbook images (`book-1.jpg` … `book-6.png`) — drafted as realistic
  placeholder content, clearly marked `TODO` in `lib/data/products.ts`.
- **Contact email, phone (voice), and address** — placeholder values in
  `lib/constants.ts`, marked `TODO`.
- **WhatsApp checkout number** — this one is **real**: `+91 79720 52896`.

## Related docs

Start with [01_REQUIREMENTS.md](./01_REQUIREMENTS.md), then
[05_UI_UX_STRATEGY.md](./05_UI_UX_STRATEGY.md) and
[06_DESIGN_SYSTEM.md](./06_DESIGN_SYSTEM.md) before touching code.
