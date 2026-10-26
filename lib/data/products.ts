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
      'The calendar tells you what to explore each week, and the workbook makes it easy to actually sit down and do it. Get both together in one bundle.',
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
    details: {
      title: 'About this Product',
      intro:
        'The calendar tells you what to explore each week, and the workbook makes it easy to actually sit down and do it. Get both together in one bundle.',
      bullets: [
        {
          label: 'Calendar',
          text: '26 weeks of guided learning (hard copy) - a large 12x18" wall calendar with sticking hook, for ages 2-4.',
        },
        {
          label: 'Workbook',
          text: '13 weeks (Week A-M) digital copy - 156 pages with 12 theme-based worksheets every week, for ages 2.5+.',
        },
        {
          label: 'Every Week',
          text: 'One letter, number, shape, colour, animal and body part, a new action & movement song, 6 no-prep activities, 2 daily chores and one role play.',
        },
        {
          label: 'Hands-on Skills',
          text: 'Tracing, cutting and fine-motor practice, including cut-out activities.',
        },
      ],
      notes: [
        '*Returns/refunds are not accepted. Please reach out with any questions!',
        'This file is for personal use only and should not be shared or sold without permission.',
      ],
    },
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
      "HOW WE GO OVER THE WEEKLY LEARNING CALENDAR: Each page focuses on one letter, one number, one shape, one colour, one animal, one body part and one song - plus 6 activities based on these, 2 daily chores and one role play. We focus on one page a week and switch it out every Monday. There's also an empty box at the top of each page to write your child's name.",
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
    details: {
      title: 'About this Calendar',
      intro:
        "HOW WE GO OVER THE WEEKLY LEARNING CALENDAR\nEach page focuses on one letter, one number, one shape, one colour, one animal, one body part and one song - plus 6 activities based on these, 2 daily chores and one role play. We focus on one page a week and switch it out every Monday. There's also an empty box at the top of each page to write your child's name.",
      bullets: [
        { label: 'Name', text: 'Name recognition and name spelling.' },
        {
          label: 'Letter',
          text: 'Letter recognition, uppercase and lowercase, letter sounds, and things that begin with that letter or make that sound.',
        },
        {
          label: 'Number',
          text: 'Number recognition, and counting to and from that number.',
        },
        {
          label: 'Shape',
          text: 'Shape recognition, counting the sides of the shape, and things that are that shape.',
        },
        {
          label: 'Colour',
          text: 'Colour recognition and things that are that colour.',
        },
        {
          label: 'Animal',
          text: 'Animal recognition, the sound it makes, and acting out how it moves.',
        },
        {
          label: 'Body Part',
          text: 'Body part recognition, pointing to it on themselves, and what it helps us do.',
        },
        {
          label: 'Action & Movement Song',
          text: 'A new song every week - sing along, copy the actions and move together.',
        },
        {
          label: '6 Activities',
          text: "One no-prep activity each for the week's letter, number, shape, colour, animal and body part, so the concept is practised through play.",
        },
        {
          label: '2 Daily Chores',
          text: 'Two simple chores shown on every page to build independence at home.',
        },
        {
          label: 'Role Play',
          text: 'One pretend-play idea a week, like Grocery Shopper, Doctor or Restaurant.',
        },
      ],
      notes: [
        '*Returns/refunds are not accepted. Please reach out with any questions!',
        'This file is for personal use only and should not be shared or sold without permission.',
      ],
    },
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
      'Our weekly journals will correspond with our printable circle time board. This journal contains hand-drawn, simple and easy/no-prep toddler worksheets for Week A-M (ages 2.5+ years).',
    price: 199,
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
    details: {
      title: 'About the Theme Workbook (Week A–M)',
      intro:
        'Our weekly journals will correspond with our printable circle time board. This journal contains hand-drawn, simple and easy/no-prep toddler worksheets for Week A-M (ages 2.5+ years).',
      bullets: [
        {
          label: 'Total Pages',
          text: '156 total pages - 13 weeks (A-M) with 12 theme-based worksheets every week.',
        },
        {
          label: 'Skills',
          text: 'Tracing, cutting and fine-motor practice, including cut-out activities.',
        },
        {
          label: 'Style',
          text: 'Hand-drawn, simple and easy/no-prep worksheets.',
        },
        {
          label: 'Supplies',
          text: 'Most supplies needed are dot stickers, dot markers, crayons/markers, a glue stick and scissors (for adult use).',
        },
        {
          label: 'Format',
          text: 'Instant PDF download - print at home anytime.',
        },
      ],
      notes: [
        '*Returns/refunds are not accepted. Please reach out with any questions!',
        'This file is for personal use only and should not be shared or sold without permission.',
      ],
    },
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
      'A free printable from EasyToddlerDay to get your toddler thinking, focusing and having fun - no purchase needed.',
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
    details: {
      title: 'About Free Brain-Boosting Activity Sheets',
      intro:
        'A free printable from EasyToddlerDay to get your toddler thinking, focusing and having fun - no purchase needed.',
      bullets: [
        {
          label: 'Skills Developed',
          text: 'Fine-motor control and pencil grip, hand-eye coordination, focus and concentration, and early problem-solving.',
        },
        {
          label: 'Download & Print',
          text: 'Click the link to download the PDF and print it. For the best result, print it on A3 size paper.',
        },
        {
          label: 'Prefer not to print?',
          text: 'You can also hand-draw it instead - copy the sheet onto paper and draw it together with your toddler.',
        },
      ],
    },
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
