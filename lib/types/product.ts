export type ProductCategory = 'calendar' | 'theme-workbook'

export interface Product {
  id: string
  slug: string
  name: string
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
}
