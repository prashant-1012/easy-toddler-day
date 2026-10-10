export const SITE_NAME = 'Easy Toddler Day'
export const SITE_DESCRIPTION =
  'Premium, screen-free educational workbooks for toddlers — playful learning parents can trust.'
// TODO: replace with the real production domain before launch
export const SITE_URL = 'https://easytoddlerday.vercel.app'

// Confirmed business WhatsApp number, digits only including country code (required by wa.me links)
export const WHATSAPP_NUMBER = '917972052896'

// TODO: replace with real contact details before launch
export const CONTACT_EMAIL = 'easytoddlerday@gmail.com'
export const CONTACT_PHONE = '+91 00000 00000'
export const CONTACT_ADDRESS = 'Address to be added'

export const INSTAGRAM_URL = 'https://www.instagram.com/easytoddlerday/'

export const DEVELOPER_NAME = 'Growthentic'
export const DEVELOPER_URL = 'https://growthentic.in/'

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Shop', href: '/shop' },
  // Hidden for now — both are shown as sections on the home page instead.
  // { label: 'Blogs', href: '/blog' },
  // { label: 'Testimonials', href: '/testimonials' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const

// Announcement strip shown above the navbar. Closing it lasts until the next
// page refresh (see PromoBanner).
export const PROMO_BANNER = {
  highlight: 'up to 24% off',
  href: '/shop/calendar-workbook-bundle',
  ctaLabel: 'Shop Now',
} as const
