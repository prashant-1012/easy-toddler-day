export type ProductCategory = 'calendar' | 'workbook' | 'bundle' | 'free-resource'

export interface ProductDetailBullet {
  label: string
  text: string
}

export interface ProductDetails {
  title: string
  intro?: string
  bullets?: ProductDetailBullet[]
  notes?: string[]
}

export interface Product {
  id: string
  slug: string
  name: string
  /** Short pill shown above the title on shop cards, e.g. "Bundle · Best Value". */
  cardLabel?: string
  /** Title shown on shop cards when it should differ from `name` (cart, WhatsApp and detail page keep `name`). */
  cardTitle?: string
  shortDescription: string
  description: string
  price: number
  compareAtPrice?: number
  /** Primary cover image, shown on cards and as the first gallery image. */
  image: string
  /** Additional photos (back cover, inside spreads, etc.) shown on the product detail page gallery. */
  gallery?: string[]
  /** Short "what's inside" bullet points shown on the product detail page. */
  highlights: string[]
  ageRange: string
  category: ProductCategory
  tags: string[]
  inStock: boolean
  featured: boolean
  /** True for products announced but not yet available to order — shows a "Coming Soon" tag and disables Add to Cart. */
  comingSoon: boolean
  /** Optional shipping or delivery note, e.g. "incl. shipping" or "Instant PDF download". */
  shippingNote?: string
  /** Direct link to download a digital resource or PDF printable if available. */
  downloadUrl?: string
  /** Structured rich description details for product page. */
  details?: ProductDetails
}
