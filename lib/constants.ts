export const SITE_NAME = 'Easy Toddler Day'
export const SITE_DESCRIPTION =
  'Premium, screen-free educational workbooks for toddlers — playful learning parents can trust.'
// TODO: replace with the real production domain before launch
export const SITE_URL = 'https://easytoddlerday.vercel.app'

// Confirmed business WhatsApp number, digits only including country code (required by wa.me links)
export const WHATSAPP_NUMBER = '917020234880'

// Who the customer is greeted by name in the WhatsApp order message — the
// person who actually answers the business number.
export const BUSINESS_OWNER_NAME = 'Sneha'

export const CONTACT_EMAIL = 'easytoddlerday@gmail.com'
export const CONTACT_PHONE = '+91 7020234880'
export const CONTACT_ADDRESS = 'Pune, MAH, INDIA'

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
  highlight: 'up to 40% off bundle',
  href: '/shop/calendar-workbook-bundle',
  ctaLabel: 'Shop Bundle',
} as const
