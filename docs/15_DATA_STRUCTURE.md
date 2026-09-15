# 15 — Data Structure

All content is typed TypeScript data — no CMS, no database. Types live
in `lib/types/`, data lives in `lib/data/`.

## `lib/types/product.ts`

```ts
export interface Product {
  id: string
  slug: string
  name: string
  shortDescription: string
  description: string
  price: number          // in INR, integer (paise-free — display formats via format-price.ts)
  compareAtPrice?: number
  image: string           // primary cover image, path under /public/products
  gallery?: string[]      // additional detail-page images (interior spreads, back cover, etc.)
  highlights: string[]    // "what's inside" bullets shown on the detail page
  ageRange: string        // e.g. "2-4 years"
  category: 'calendar' | 'theme-workbook'
  tags: string[]
  inStock: boolean
  featured: boolean
  comingSoon: boolean     // true = "Coming Soon" tag, Add to Cart replaced by a WhatsApp notify-me CTA
}
```

## Placeholder image note

Each product in `lib/data/products.ts` currently has exactly one cover
image (from `public/products/`) and no `gallery` entries — the product
detail page (`app/shop/[slug]/page.tsx`) is built to render additional
`gallery` images as a thumbnail strip automatically the moment they're
added, so dropping more photos (interior spreads, back cover) into
`public/products/` and listing them in a product's `gallery` array is
enough; no component changes needed.

## `lib/types/cart.ts`

```ts
export interface CartItem {
  productId: string
  name: string
  price: number
  image: string
  slug: string
  quantity: number
}

export interface CartState {
  items: CartItem[]
}

export type CartAction =
  | { type: 'ADD_ITEM'; payload: Omit<CartItem, 'quantity'>; quantity?: number }
  | { type: 'REMOVE_ITEM'; payload: { productId: string } }
  | { type: 'UPDATE_QUANTITY'; payload: { productId: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'HYDRATE'; payload: CartState }
```

## `lib/types/blog.ts`

```ts
export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string        // simple markdown-ish paragraphs for this phase, no MDX pipeline
  coverImage: string
  date: string            // ISO 8601
  author: string
  readTimeMinutes: number
  tags: string[]
}
```

## Testimonial (inline type, `lib/data/testimonials.ts`)

```ts
export interface Testimonial {
  id: string
  name: string
  relation: string        // e.g. "Mom of a 3-year-old"
  quote: string
  rating: 1 | 2 | 3 | 4 | 5
  avatar?: string
}
```

## Placeholder data policy

`lib/data/products.ts` maps the 6 existing images
(`book-1.jpg`…`book-6.png`) to draft `Product` entries with realistic
but placeholder names/descriptions/prices, each flagged with a
`// TODO: replace with real product info` comment above the object.
Same policy applies to `lib/constants.ts` for contact
email/phone/address.
