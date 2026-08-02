import type { Product } from '@/lib/types/product'

// TODO: replace all names, descriptions, and prices with real product info before launch
export const products: Product[] = [
  {
    id: 'p1',
    slug: 'alphabet-tracing-workbook',
    name: 'Alphabet Tracing Workbook',
    shortDescription: 'Big, friendly letters for little hands to trace and learn.',
    description:
      'A guided tracing workbook that introduces uppercase and lowercase letters through large, toddler-friendly strokes. Designed to build pencil control and letter recognition before formal writing begins.',
    price: 299,
    image: '/images/book-1.jpg',
    ageRange: '2-4 years',
    category: 'phonics',
    tags: ['alphabet', 'tracing', 'pre-writing'],
    inStock: true,
    featured: true,
  },
  {
    id: 'p2',
    slug: 'number-fun-workbook',
    name: 'Number Fun Workbook',
    shortDescription: 'Counting, tracing, and number recognition made playful.',
    description:
      'From counting dots to tracing numerals 1–20, this workbook turns early math into a game with colorful, uncluttered pages toddlers actually want to finish.',
    price: 299,
    image: '/images/book-2.jpg',
    ageRange: '3-5 years',
    category: 'numbers',
    tags: ['numbers', 'counting', 'math'],
    inStock: true,
    featured: true,
  },
  {
    id: 'p3',
    slug: 'pre-writing-strokes-workbook',
    name: 'Pre-Writing Strokes Workbook',
    shortDescription: 'Lines, curves, and zigzags that build the muscles behind handwriting.',
    description:
      'Before letters, little hands need control. This workbook builds fine motor strength and pencil grip through simple, satisfying stroke patterns.',
    price: 249,
    image: '/images/book-3.jpg',
    ageRange: '2-4 years',
    category: 'motor-skills',
    tags: ['pre-writing', 'fine motor'],
    inStock: true,
    featured: false,
  },
  {
    id: 'p4',
    slug: 'shapes-and-colors-workbook',
    name: 'Shapes & Colors Workbook',
    shortDescription: 'The first workbook for the youngest learners in the house.',
    description:
      'Simple shape and color recognition activities designed for toddlers just starting their learning journey, with plenty of room to color and explore.',
    price: 249,
    image: '/images/book-4.jpg',
    ageRange: '1.5-3 years',
    category: 'general',
    tags: ['shapes', 'colors', 'toddler'],
    inStock: true,
    featured: false,
  },
  {
    id: 'p5',
    slug: 'phonics-starter-workbook',
    name: 'Phonics Starter Workbook',
    shortDescription: 'Letter sounds and simple blends to kickstart early reading.',
    description:
      'A gentle introduction to phonics — letter sounds, simple blends, and picture-matching activities that lay the foundation for reading.',
    price: 349,
    image: '/images/book-5.jpeg',
    ageRange: '3-5 years',
    category: 'phonics',
    tags: ['phonics', 'reading', 'sounds'],
    inStock: true,
    featured: true,
  },
  {
    id: 'p6',
    slug: 'fine-motor-skills-activity-book',
    name: 'Fine Motor Skills Activity Book',
    shortDescription: 'Cutting, lacing-style tracing, and dexterity activities in one book.',
    description:
      'A collection of hands-on activities — mazes, dot-to-dots, cutting practice guides — built to strengthen fine motor skills through play.',
    price: 299,
    image: '/images/book-6.png',
    ageRange: '2-4 years',
    category: 'motor-skills',
    tags: ['fine motor', 'activities'],
    inStock: true,
    featured: true,
  },
]

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.featured)
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug)
}
