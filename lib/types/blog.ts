export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string[]
  coverImage: string
  date: string
  author: string
  readTimeMinutes: number
  tags: string[]
}
