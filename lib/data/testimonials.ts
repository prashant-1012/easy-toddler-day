export interface Testimonial {
  id: string
  name: string
  relation: string
  quote: string
  rating: 1 | 2 | 3 | 4 | 5
  avatar?: string
}

// TODO: replace with real customer testimonials before launch
export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Ananya Rao',
    relation: 'Mom of a 3-year-old',
    quote:
      "The tracing workbook has become our favorite quiet-time activity. It's screen-free, my daughter loves it, and I can actually see her pencil grip improving.",
    rating: 5,
    avatar: '/images/ananya.webp',
  },
  {
    id: 't2',
    name: 'Kabir Malhotra',
    relation: 'Dad of a 4-year-old',
    quote:
      'Finally a workbook that doesn\'t feel like a school worksheet. The pages are colorful without being overwhelming, and my son asks for it by name.',
    rating: 5,
    avatar: '/images/kabir.webp',
  },
  {
    id: 't3',
    name: 'Sneha Iyer',
    relation: 'Mom of twin 2-year-olds',
    quote:
      'Ordering was so easy — added everything to cart and sorted the rest over WhatsApp in minutes. The quality of the print and paper is genuinely premium.',
    rating: 5,
    avatar: '/images/sneha.webp',
  },
  {
    id: 't4',
    name: 'Farah Sheikh',
    relation: 'Grandmother, gifting for a 3-year-old',
    quote:
      'I wanted a thoughtful gift that wasn\'t another toy. These workbooks were the perfect middle ground — educational, but still fun for a toddler.',
    rating: 5,
    avatar: '/images/farah.webp',
  },
]
