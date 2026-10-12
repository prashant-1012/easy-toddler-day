"use client";

import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { INSTAGRAM_URL } from "@/lib/constants";
import { buildInquiryMessage, buildWhatsAppUrl } from "@/lib/utils/whatsapp";

const buttonClass =
  "flex h-12 w-12 sm:h-13 sm:w-13 items-center justify-center rounded-full text-white shadow-lift transition-transform hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky focus-visible:ring-offset-2 focus-visible:ring-offset-cream";

export function WhatsAppFloat() {
  const href = buildWhatsAppUrl(buildInquiryMessage());

  return (
    <div className="fixed bottom-3 right-3 z-40 flex flex-col items-end gap-2 sm:bottom-5 sm:right-5 pointer-events-none">
      <div className="flex flex-col items-end gap-2.5 pointer-events-auto">
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow us on Instagram"
          className={`${buttonClass} bg-gradient-to-tr from-marigold-dark via-coral-dark to-[#8a3ab9]`}
        >
          <InstagramIcon size={24} />
        </a>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className={`${buttonClass} bg-sage`}
        >
          <WhatsAppIcon size={26} />
        </a>
      </div>
      <span className="pointer-events-auto rounded-full bg-cloud/95 px-3 py-1 text-right text-xs font-semibold text-charcoal shadow-soft border border-warm-gray-light/60 backdrop-blur-xs">
        Have a Question? Let&apos;s Chat
      </span>
    </div>
  );
}
