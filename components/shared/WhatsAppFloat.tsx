"use client";

import { MessageCircle } from "lucide-react";
import { buildInquiryMessage, buildWhatsAppUrl } from "@/lib/utils/whatsapp";

export function WhatsAppFloat() {
  const href = buildWhatsAppUrl(buildInquiryMessage());

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-sage text-white shadow-lift transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
    >
      <MessageCircle size={26} aria-hidden="true" />
    </a>
  );
}
