export type BlogAccentColor = 'coral' | 'sky' | 'sage'

/**
 * Article body, as ordered blocks. Inline text supports `**bold**` only
 * (rendered by BlogContent).
 */
export type BlogBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'cta'; label: string; href: string }

export interface BlogSource {
  label: string
  url: string
}

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  /** Short topic label shown on cards and above the article title, e.g. "Routines". */
  category: string
  content: BlogBlock[]
  /** Real photo, when available. Falls back to a generated icon+color cover (see BlogCoverArt) when omitted. */
  coverImage?: string
  accentColor: BlogAccentColor
  author: string
  /** Derived from the word count of `content` — see lib/data/blogPosts.ts. */
  readTimeMinutes: number
  tags: string[]
  /** Optional attribution line shown at the end of the article. */
  source?: BlogSource
}
