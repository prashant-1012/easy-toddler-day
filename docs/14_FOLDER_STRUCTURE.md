# 14 — Folder Structure

```
easy-toddler-day/
├── app/
│   ├── layout.tsx              (root layout: fonts, CartProvider, Navbar, Footer, WhatsAppFloat, JSON-LD)
│   ├── page.tsx                (Home — composes all section components)
│   ├── globals.css             (Tailwind v4 @theme tokens, base styles)
│   ├── sitemap.ts
│   ├── robots.ts
│   ├── shop/
│   │   └── page.tsx
│   ├── blog/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── about/
│   │   └── page.tsx
│   └── contact/
│       └── page.tsx
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── MobileMenu.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── FeaturedWorkbooks.tsx
│   │   ├── LearningBenefits.tsx
│   │   ├── About.tsx
│   │   ├── Testimonials.tsx
│   │   ├── BlogPreview.tsx
│   │   └── Contact.tsx
│   ├── cart/
│   │   ├── CartProvider.tsx
│   │   ├── CartButton.tsx
│   │   ├── CartDrawer.tsx
│   │   └── CartItemRow.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Badge.tsx
│   │   ├── Card.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── Blob.tsx
│   │   ├── ProductCard.tsx
│   │   ├── QuantityStepper.tsx
│   │   └── Reveal.tsx           (client-only scroll-reveal wrapper, see 10_ANIMATION_GUIDELINES)
│   └── shared/
│       └── WhatsAppFloat.tsx
│
├── lib/
│   ├── data/
│   │   ├── products.ts
│   │   ├── blogPosts.ts
│   │   └── testimonials.ts
│   ├── types/
│   │   ├── product.ts
│   │   ├── cart.ts
│   │   └── blog.ts
│   ├── utils/
│   │   ├── format-price.ts
│   │   ├── whatsapp.ts
│   │   └── cn.ts               (clsx wrapper for conditional classNames)
│   └── constants.ts             (site name, nav links, WhatsApp number, placeholder contact info)
│
├── public/
│   └── images/                  (existing assets — unchanged)
│
└── docs/                        (this documentation)
```

## Rules

- `lib/data/*` files are the **single source of truth** for content —
  components never hardcode product/blog/testimonial content inline.
- `lib/types/*` defines the shape every data file and component prop
  must conform to — see
  [15_DATA_STRUCTURE.md](./15_DATA_STRUCTURE.md).
- No component duplicates logic that already exists in `lib/utils/` —
  e.g. price formatting always goes through `format-price.ts`.
- Path alias `@/*` (already configured in `tsconfig.json`) is used for
  all cross-folder imports instead of relative `../../../` chains.
