import type { CartItem } from '@/lib/types/cart'
import { formatPrice } from '@/lib/utils/format-price'
import { BUSINESS_OWNER_NAME, SITE_NAME, WHATSAPP_NUMBER } from '@/lib/constants'

// WhatsApp's own markdown: *bold*, _italic_. The markers have to sit tight
// against the text they wrap, otherwise WhatsApp renders them literally.
//
// Deliberately emoji-free: the original wording had a waving hand and a yellow
// heart, but some WhatsApp clients mangle astral-plane (4-byte UTF-8)
// characters in `wa.me` prefilled text and render them as a missing-glyph box.
// The BMP punctuation below (bullet, multiplication sign, em dash, curly
// apostrophe, the rupee sign from formatPrice) is 2-3 byte UTF-8 and is safe.
export function buildOrderMessage(
  items: CartItem[],
  customer: { name: string; phone: string }
): string {
  const lines = items.map(
    (item) =>
      `\u2022 ${item.name} \u00d7 ${item.quantity} \u2014 ${formatPrice(item.price * item.quantity)}`
  )
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return [
    `Hi ${BUSINESS_OWNER_NAME}!`,
    `I\u2019d like to place an order with ${SITE_NAME}.`,
    '',
    `*Customer*: ${customer.name}`,
    `*Mobile*: ${customer.phone}`,
    '',
    '*Order Details*:',
    ...lines,
    '',
    `*Total Items*: ${totalItems}`,
    `*Total Amount*: ${formatPrice(totalPrice)}`,
    '',
    '*Please let me know the next steps.*',
    'Thank you!',
    '',
    `_Order placed through the ${SITE_NAME} website._`,
  ].join('\n')
}

export function buildInquiryMessage(): string {
  return 'Hi! I found Easy Toddler Day and have a question about your products. 😊'
}

export function buildComingSoonInterestMessage(productName: string): string {
  return `Hi! I'm interested in the "${productName}" — please let me know when it's available to order.`
}

export function buildFreeDownloadMessage(productName: string): string {
  return `Hi ${BUSINESS_OWNER_NAME}!\nI'd like to get the free "${productName}" PDF from ${SITE_NAME}. Please share it with me.\n\nThank you!`
}

export function buildContactMessage(data: { name: string; email: string; message: string }): string {
  return `Hi Easy Toddler Day! My name is ${data.name} (${data.email}).\n\n${data.message}`
}

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export function openWhatsApp(message: string): void {
  window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer')
}
