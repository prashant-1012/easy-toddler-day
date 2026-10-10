"use client";

import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { INSTAGRAM_URL } from "@/lib/constants";
import { buildInquiryMessage, buildWhatsAppUrl } from "@/lib/utils/whatsapp";

const buttonClass =
  "flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lift transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky focus-visible:ring-offset-2 focus-visible:ring-offset-cream";

export function WhatsAppFloat() {
  const href = buildWhatsAppUrl(buildInquiryMessage());

  return (
    <div className="fixed bottom-5 right-5 z-20 flex flex-col items-center gap-3">
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow us on Instagram"
        className={`${buttonClass} bg-gradient-to-tr from-marigold-dark via-coral-dark to-[#8a3ab9]`}
      >
        <InstagramIcon size={28} />
      </a>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className={`${buttonClass} bg-sage`}
      >
        <WhatsAppIcon size={28} />
      </a>
      <span className="max-w-[10rem] rounded-2xl bg-cloud px-3 py-1.5 text-center text-xs font-semibold text-charcoal shadow-soft sm:max-w-xs sm:rounded-full">
        Any doubts? DM me - Have a Question? Let&apos;s Chat
      </span>
    </div>
  );
}
