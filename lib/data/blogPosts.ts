import type { BlogPost } from '@/lib/types/blog'

// TODO: replace with real blog content before launch.
// blog1.jpeg shows a small third-party school logo on the child's uniform —
// flagged to the owner, who chose to accept it and use the photo unedited
// rather than the generated cover fallback. See 20_CLAUDE_NOTES.md.
export const blogPosts: BlogPost[] = [
  {
    id: 'b1',
    slug: 'screen-free-summer-activities-for-toddlers',
    title: 'Screen-Free Summer Activities for Toddlers',
    excerpt:
      'Summer break doesn\'t have to mean more screen time. Here are simple, hands-on ways to keep toddlers engaged and learning.',
    content: [
      'Summer schedules loosen up, routines slip, and screens quietly fill the gap. It doesn\'t have to be that way.',
      'Toddlers thrive on short, repeatable activities: tracing, sorting, coloring, and simple counting games woven into the day rather than scheduled as "lessons."',
      'A workbook that lives on the coffee table — always within reach for a 10-minute burst of focus — does more for a screen-free routine than any elaborate activity box.',
    ],
    coverImage: '/images/blog1.jpeg',
    accentColor: 'coral',
    date: '2026-05-12',
    author: 'Easy Toddler Day Team',
    readTimeMinutes: 4,
    tags: ['screen-free', 'summer', 'activities'],
  },
  {
    id: 'b2',
    slug: 'how-to-be-your-toddlers-first-learning-coach',
    title: "How to Be Your Toddler's First Learning Coach",
    excerpt:
      'You don\'t need a teaching degree to guide your toddler\'s earliest learning moments — just a few simple habits.',
    content: [
      'Parents often assume "teaching" toddlers requires structure, curriculum, and credentials. It doesn\'t.',
      'Sitting beside your child for five focused minutes, narrating what they\'re doing, and letting them lead the pace builds more confidence than any worksheet alone.',
      'The workbook is a tool, not the lesson — you are the coach.',
    ],
    coverImage: '/images/blog2.webp',
    accentColor: 'sky',
    date: '2026-04-02',
    author: 'Easy Toddler Day Team',
    readTimeMinutes: 5,
    tags: ['parenting', 'early learning'],
  },
  {
    id: 'b3',
    slug: 'phonics-at-home-a-gentle-starting-point',
    title: 'Phonics at Home: A Gentle Starting Point',
    excerpt:
      'Reading readiness starts long before school. Here\'s how to introduce letter sounds without pressure.',
    content: [
      'Phonics can feel like a school-only topic, but the earliest exposure — matching a letter to its sound — happens best at home, in short, playful bursts.',
      'Start with the sounds in your child\'s own name. Familiarity builds confidence faster than alphabetical order ever will.',
      'A few minutes a day, spread across weeks, beats a single long session every time.',
    ],
    coverImage: '/images/blog3.jpg',
    accentColor: 'sage',
    date: '2026-03-18',
    author: 'Easy Toddler Day Team',
    readTimeMinutes: 4,
    tags: ['phonics', 'reading', 'early learning'],
  },
]

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}
