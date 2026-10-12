import type { Product } from '@/lib/types/product'

// TODO: replace prices with real, final pricing before launch — names,
// descriptions, and images below are real (sourced from public/products).
export const products: Product[] = [
  {
    id: 'p1',
    slug: 'calendar-workbook-bundle',
    name: 'Calendar + Workbook Bundle',
    cardLabel: 'Bundle · Best Value',
    cardTitle: 'Calendar + Workbook Bundle',
    shortDescription:
      '26 weeks hard copy calendar + 12 theme-based worksheets every week + 13-week Week A–M digital workbook.',
    description:
      'Calendar + Workbook Bundle includes 26 weeks of hard copy calendar with 12 theme-based worksheets every week, plus the 13-week Week A–M digital workbook. Complete screen-free routine in one value bundle.',
    price: 1199,
    compareAtPrice: 1998,
    shippingNote: 'incl. shipping',
    image: '/products/bundle-calendar-workbook.png',
    gallery: [
      '/products/bundle/sample-1.png',
      '/products/bundle/sample-2.png',
      '/products/bundle/sample-3.png',
      '/products/bundle/sample-4.jpeg',
      '/products/bundle/sample-5.jpeg',
      '/products/bundle/sample-6.jpeg',
      '/products/bundle/sample-camera-preview.jpeg',
    ],
    highlights: [
      '26 weeks, hard copy calendar',
      '12 theme-based worksheets every week',
      'Plus 13-week Week A–M digital workbook',
      'Free shipping included',
    ],
    ageRange: '2-4 years',
    category: 'bundle',
    tags: ['bundle', 'calendar', 'workbook', 'routine'],
    inStock: true,
    featured: true,
    comingSoon: false,
  },
  {
    id: 'p2',
    slug: 'weekly-learning-calendar',
    name: 'Weekly Learning Calendar — Level 1',
    cardLabel: 'Hard Copy · Ages 2–4',
    cardTitle: 'Weekly Learning Calendar — Level 1',
    shortDescription:
      '26 weeks of guided learning with theme activities, chores, movement songs, and wall calendar.',
    description:
      'Weekly Learning Calendar — Level 1 offers 26 weeks of guided learning. One alphabet, number, shape, colour, animal & body part per week. Includes a new action & movement song weekly, 6 no-prep theme-based activities per week, 2 easy at-home chores + pretend role play, and a large 12×18″ wall calendar with sticking hook.',
    price: 999,
    compareAtPrice: 1299,
    shippingNote: 'incl. shipping',
    image: '/products/weekly-calendar.png',
    gallery: [
      '/products/calendar/calendar-sample-1.jpeg',
      '/products/calendar/calendar-sample-2.jpeg',
      '/products/calendar/calendar-sample-3.jpeg',
      '/products/calendar/calendar-camera-preview.jpeg',
    ],
    highlights: [
      '26 weeks of guided learning',
      'One alphabet, number, shape, colour, animal & body part per week',
      'New action & movement song weekly',
      '6 no-prep theme-based activities per week',
      '2 easy at-home chores + pretend role play',
      'Large 12×18″ wall calendar with sticking hook',
    ],
    ageRange: '2-4 years',
    category: 'calendar',
    tags: ['calendar', 'routine', 'planner', 'wall calendar'],
    inStock: true,
    featured: true,
    comingSoon: false,
  },
  {
    id: 'p3',
    slug: 'toddler-workbook-a-m',
    name: 'Theme Workbook (Week A–M)',
    cardLabel: 'Digital · Instant Download',
    cardTitle: 'Theme Workbook (Week A–M)',
    shortDescription:
      '13 weeks of tracing, cutting, fine-motor practice, and 12 theme-based worksheets every week.',
    description:
      'Theme Workbook (Week A–M) includes 13 weeks of structured learning for Week A–M with 12 theme-based worksheets every week. Covers tracing, cutting & fine-motor practice, includes cut-out activities, and comes as an instant PDF to print at home anytime.',
    price: 999,
    shippingNote: 'Instant PDF Download',
    image: '/products/toddler-workbook-a-m.png',
    gallery: [
      '/products/workbook/sample-01.png',
      '/products/workbook/sample-02.png',
      '/products/workbook/sample-03.png',
      '/products/workbook/sample-04.png',
      '/products/workbook/sample-05.png',
      '/products/workbook/sample-06.png',
      '/products/workbook/sample-07.png',
      '/products/workbook/sample-08.png',
      '/products/workbook/sample-09.png',
      '/products/workbook/sample-10.png',
      '/products/workbook/sample-11.png',
      '/products/workbook/sample-12.png',
      '/products/workbook/sample-13.jpeg',
    ],
    highlights: [
      '13 weeks, Week A–M',
      '12 theme-based worksheets every week',
      'Tracing, cutting & fine-motor practice',
      'Includes cut-out activities',
      'Instant PDF — print at home anytime',
    ],
    ageRange: '2.5+ years',
    category: 'workbook',
    tags: ['alphabet', 'tracing', 'fine-motor', 'cut-outs', 'pdf'],
    inStock: true,
    featured: true,
    comingSoon: false,
  },
  {
    id: 'p4',
    slug: 'free-brain-boosting-activity-sheets',
    name: 'Brain-Boosting Activity Sheet',
    cardLabel: 'Free Printable',
    cardTitle: 'Brain-Boosting Activity Sheet',
    shortDescription:
      'Free brain-boosting printable to download instantly or hand-draw with your toddler.',
    description:
      'Free brain-boosting printable for toddlers. Download the PDF instantly, or copy & hand-draw it with your toddler for fun, screen-free learning moments at home.',
    price: 0,
    shippingNote: 'Free Instant Download',
    downloadUrl: '/downloads/free-brain-boosting-activity-sheets.pdf',
    image: '/products/free-activity-sheets.png',
    gallery: [
      '/products/activity-sheets/sample-01.png',
      '/products/activity-sheets/sample-02.png',
      '/products/activity-sheets/sample-03.png',
    ],
    highlights: [
      'Free brain-boosting printable',
      'Download the PDF instantly',
      'Or copy & hand-draw it with your toddler',
    ],
    ageRange: '2-4 years',
    category: 'free-resource',
    tags: ['free', 'printable', 'activity sheets', 'instant download'],
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
