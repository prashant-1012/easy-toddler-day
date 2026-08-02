export type ProductCategory = 'phonics' | 'motor-skills' | 'numbers' | 'general'

export interface Product {
  id: string
  slug: string
  name: string
  shortDescription: string
  description: string
  price: number
  compareAtPrice?: number
  image: string
  ageRange: string
  category: ProductCategory
  tags: string[]
  inStock: boolean
  featured: boolean
}
