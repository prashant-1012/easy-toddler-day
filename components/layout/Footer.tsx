import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import {
  CONTACT_EMAIL,
  DEVELOPER_NAME,
  DEVELOPER_URL,
  INSTAGRAM_URL,
  NAV_LINKS,
} from "@/lib/constants";
import { buildInquiryMessage, buildWhatsAppUrl } from "@/lib/utils/whatsapp";

const linkClass =
  "flex items-center px-3 py-3 text-base font-semibold text-charcoal transition-colors hover:text-sky-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-dark focus-visible:ring-offset-2 rounded-xl";

export function Footer() {
  const socialLinks = [
    { label: "WhatsApp", href: buildWhatsAppUrl(buildInquiryMessage()), external: true },
    { label: "Instagram", href: INSTAGRAM_URL, external: true },
    { label: "Email", href: `mailto:${CONTACT_EMAIL}`, external: false },
  ];

  return (
    <footer className="border-t border-warm-gray-light bg-cream">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-12 text-center sm:px-6 lg:px-10 xl:px-12">
        <Link href="/" aria-label="Easy Toddler Day home">
          <Image
            src="/images/easytoddlerday-logo.png"
            alt="Easy Toddler Day"
            width={1000}
            height={246}
            className="h-14 w-auto"
          />
        </Link>

        <p className="text-lg text-warm-gray">
          Toddler activities &amp; learning, planned week by week.
        </p>

        <nav aria-label="Footer" className="flex flex-wrap items-center justify-center">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={linkClass}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-wrap items-center justify-center">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className={linkClass}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-2 border-t border-warm-gray-light px-4 py-5 text-center text-sm text-warm-gray sm:px-6 lg:px-10 xl:px-12">
        <span>
          © {new Date().getFullYear()} EasyToddlerDay. All rights reserved.
        </span>
        <span className="inline-flex items-center gap-1.5 text-xs">
          Made with
          <Heart size={12} className="text-coral" fill="currentColor" aria-hidden="true" />
          by{" "}
          <a
            href={DEVELOPER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-sky-dark transition-colors hover:text-sky"
          >
            {DEVELOPER_NAME}
          </a>
        </span>
      </div>
    </footer>
  );
}
