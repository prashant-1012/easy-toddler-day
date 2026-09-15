import type { CartItem } from '@/lib/types/cart'

interface OrderLead {
  name: string
  phone: string
  items: CartItem[]
  subtotal: number
}

/**
 * Best-effort log of a checkout lead to a Google Sheet via an Apps Script
 * Web App (see docs/21_GOOGLE_SHEETS_LEAD_INTEGRATION.md). Never awaited by
 * callers — this must not delay or block the WhatsApp handoff, which is the
 * actual checkout path. `mode: 'no-cors'` + `text/plain` avoids a CORS
 * preflight that Apps Script doesn't handle, at the cost of an unreadable
 * (opaque) response — acceptable since we don't need to confirm delivery here.
 */
export function submitOrderLead(lead: OrderLead): void {
  const url = process.env.NEXT_PUBLIC_ORDER_SHEET_WEBHOOK_URL
  if (!url) return

  const orderSummary = lead.items
    .map((item) => `${item.name} x${item.quantity}`)
    .join(', ')

  fetch(url, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'text/plain' },
    body: JSON.stringify({
      name: lead.name,
      phone: lead.phone,
      orderSummary,
      subtotal: lead.subtotal,
    }),
  }).catch(() => {
    // Sheet logging is secondary telemetry — a failure here must never
    // surface to the customer or interrupt checkout.
  })
}
