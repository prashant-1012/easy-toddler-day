export type BlogAccentColor = 'coral' | 'sky' | 'sage'

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string[]
  /** Real photo, when available. Falls back to a generated icon+color cover (see BlogCoverArt) when omitted. */
  coverImage?: string
  accentColor: BlogAccentColor
  date: string
  author: string
  readTimeMinutes: number
  tags: string[]
}
