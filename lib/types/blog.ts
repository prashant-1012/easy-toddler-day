export type BlogAccentColor = 'coral' | 'sky' | 'sage'

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string[]
  accentColor: BlogAccentColor
  date: string
  author: string
  readTimeMinutes: number
  tags: string[]
}
