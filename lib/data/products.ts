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
    slug: 'theme-workbook-a-f',
    name: 'Theme Workbook: A–F',
    shortDescription:
      'Six playful letter themes from A to F — tracing, matching, and first vocabulary.',
    description:
      'The first volume in our themed workbook series, covering letters A through F. Each letter gets its own themed spread — big trace-and-write practice for uppercase and lowercase forms, paired with bright, simple pictures that build first vocabulary. Pages are big, uncluttered, and sized for little hands still learning pencil control.',
    price: 249,
    image: '/products/theme-workbook-a-f.png',
    highlights: [
      'Covers letters A through F, one theme per letter',
      'Trace-and-write practice for upper & lowercase forms',
      'Vocabulary building through themed pictures',
      'Bright, clutter-free pages sized for little hands',
    ],
    ageRange: '2.5+ years',
    category: 'theme-workbook',
    tags: ['alphabet', 'tracing', 'vocabulary'],
    inStock: true,
    featured: true,
    comingSoon: false,
  },
  {
    id: 'p3',
    slug: 'theme-workbook-g-m',
    name: 'Theme Workbook: G–M',
    shortDescription:
      'Letters G through M continue the themed tracing and vocabulary series.',
    description:
      'The next volume in our themed workbook series, picking up where A–F leaves off with letters G through M. Same format your toddler already knows — one themed spread per letter, big trace-and-write practice, and bright vocabulary pictures — so the learning stays consistent as the letters get new.',
    price: 249,
    image: '/products/theme-workbook-g-m.png',
    highlights: [
      'Covers letters G through M, one theme per letter',
      'Trace-and-write practice for upper & lowercase forms',
      'Vocabulary building through themed pictures',
      'Same trusted format as Theme Workbook A–F',
    ],
    ageRange: '2.5+ years',
    category: 'theme-workbook',
    tags: ['alphabet', 'tracing', 'vocabulary'],
    inStock: false,
    featured: false,
    comingSoon: true,
  },
  {
    id: 'p4',
    slug: 'theme-workbook-n-t',
    name: 'Theme Workbook: N–T',
    shortDescription:
      'Letters N through T keep the themed tracing series going.',
    description:
      "The third volume in our themed workbook series, covering letters N through T. It keeps the same toddler-tested format — one themed spread per letter, guided tracing, and vocabulary-building pictures — so the series stays familiar all the way from A to Z.",
    price: 249,
    image: '/products/theme-workbook-n-t.png',
    highlights: [
      'Covers letters N through T, one theme per letter',
      'Trace-and-write practice for upper & lowercase forms',
      'Vocabulary building through themed pictures',
      'Same trusted format as Theme Workbook A–F',
    ],
    ageRange: '2.5+ years',
    category: 'theme-workbook',
    tags: ['alphabet', 'tracing', 'vocabulary'],
    inStock: false,
    featured: false,
    comingSoon: true,
  },
  {
    id: 'p5',
    slug: 'theme-workbook-u-z',
    name: 'Theme Workbook: U–Z',
    shortDescription: 'Letters U through Z complete the alphabet series.',
    description:
      'The final volume in our themed workbook series, taking letters U through Z all the way to the end of the alphabet. Finishes the same format used across the whole series — themed tracing spreads and vocabulary-building pictures — so toddlers who started at A–F can complete the full set.',
    price: 249,
    image: '/products/theme-workbook-u-z.png',
    highlights: [
      'Covers letters U through Z, one theme per letter',
      'Trace-and-write practice for upper & lowercase forms',
      'Vocabulary building through themed pictures',
      'Completes the full A–Z workbook series',
    ],
    ageRange: '2.5+ years',
    category: 'theme-workbook',
    tags: ['alphabet', 'tracing', 'vocabulary'],
    inStock: false,
    featured: false,
    comingSoon: true,
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
