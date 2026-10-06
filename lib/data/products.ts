import type { Product } from '@/lib/types/product'

// TODO: replace prices with real, final pricing before launch — names,
// descriptions, and images below are real (sourced from public/products).
export const products: Product[] = [
  {
    id: 'p1',
    slug: 'weekly-learning-calendar',
    name: 'Weekly Learning Calendar',
    shortDescription:
      'A 26-week, undated calendar that turns everyday routines into playful learning moments.',
    description:
      "Twenty-six weeks of screen-free structure for your toddler's day. Each week introduces a gentle mix of letters, numbers, shapes, and colors through short, repeatable activities — the kind that fit into nap-time gaps and after-dinner wind-downs, not a rigid classroom schedule. Because it's undated, you can start on any week of the year and move at your child's pace, not a calendar's.",
    price: 349,
    image: '/products/weekly-calendar.png',
    highlights: [
      '26 weeks of themed daily activities',
      'Builds letter, number & shape recognition through routine',
      'Undated pages — start on any week of the year',
      'Thick, coloring-friendly paper stock',
    ],
    ageRange: '2-4 years',
    category: 'calendar',
    tags: ['calendar', 'routine', 'planner'],
    inStock: true,
    featured: true,
    comingSoon: false,
  },
  {
    id: 'p2',
    slug: 'toddler-workbook-a-m',
    name: 'Toddler Workbook: Week A–M',
    shortDescription:
      'Letters A to M with tracing, matching, and first vocabulary for little hands.',
    description:
      'A themed toddler workbook covering letters A through M. Each letter gets its own spread — big trace-and-write practice paired with bright, simple pictures that build first vocabulary. Pages are big, uncluttered, and sized for little hands still learning pencil control.',
    price: 249, // TODO: confirm final price
    image: '/products/toddler-workbook-a-m.png',
    highlights: [
      'Covers letters A through M, one theme per letter',
      'Trace-and-write practice for upper & lowercase forms',
      'Vocabulary building through themed pictures',
      'Bright, clutter-free pages sized for little hands',
    ],
    ageRange: '2.5+ years',
    category: 'workbook',
    tags: ['alphabet', 'tracing', 'vocabulary'],
    inStock: true,
    featured: true,
    comingSoon: false,
  },
  {
    id: 'p3',
    slug: 'calendar-workbook-bundle',
    name: 'Bundle: Learning Calendar + Toddler Workbook',
    shortDescription:
      'The 26-week Weekly Learning Calendar plus the Week A–M Toddler Workbook, together.',
    description:
      'Get both together: the 26-week Weekly Learning Calendar for daily structure and the Week A–M Toddler Workbook for hands-on letter practice. A complete screen-free learning routine in one order.',
    price: 549, // TODO: confirm final bundle price
    compareAtPrice: 598,
    image: '/products/bundle-calendar-workbook.png',
    highlights: [
      '26-week Weekly Learning Calendar',
      'Toddler Workbook covering letters A–M',
      'Daily routine plus hands-on tracing practice',
      'Better value than buying separately',
    ],
    ageRange: '2-4 years',
    category: 'bundle',
    tags: ['bundle', 'calendar', 'workbook'],
    inStock: true,
    featured: true,
    comingSoon: false,
  },
  {
    id: 'p4',
    slug: 'free-brain-boosting-activity-sheets',
    name: 'Free Brain Boosting Activity Sheets',
    shortDescription:
      'A free set of playful activity sheets to try before you buy.',
    description:
      'A free set of brain-boosting activity sheets — a gentle way to try our style of screen-free learning at home. Add it to your order and we will share it with you on WhatsApp.',
    price: 0,
    image: '/products/free-activity-sheets.png',
    highlights: [
      'Completely free',
      'Playful, screen-free activities',
      'A taste of our workbook style',
    ],
    ageRange: '2-4 years',
    category: 'free-resource',
    tags: ['free', 'activity sheets'],
    inStock: true,
    featured: false,
    comingSoon: false,
  },
]

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.featured)
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug)
}

export function getRelatedProducts(slug: string, limit = 3): Product[] {
  return products.filter((product) => product.slug !== slug).slice(0, limit)
}
