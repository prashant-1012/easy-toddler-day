import Link from "next/link";
import { CONTACT_EMAIL, CONTACT_PHONE, NAV_LINKS, SITE_NAME } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-warm-gray-light bg-cloud">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-12 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:px-8">
        <div className="max-w-sm">
          <span className="font-display text-xl font-semibold text-charcoal">
            {SITE_NAME}
          </span>
          <p className="mt-3 text-sm text-warm-gray">
            Premium, screen-free educational workbooks for toddlers — playful
            learning parents can trust.
          </p>
        </div>

        <nav className="flex flex-col gap-2">
          <span className="text-sm font-semibold uppercase tracking-wide text-warm-gray">
            Explore
          </span>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-charcoal transition-colors hover:text-sky-dark"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-2">
          <span className="text-sm font-semibold uppercase tracking-wide text-warm-gray">
            Contact
          </span>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-sm text-charcoal transition-colors hover:text-sky-dark"
          >
            {CONTACT_EMAIL}
          </a>
          <span className="text-sm text-charcoal">{CONTACT_PHONE}</span>
        </div>
      </div>

      <div className="border-t border-warm-gray-light px-4 py-5 text-center text-xs text-warm-gray sm:px-6 lg:px-8">
        © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
      </div>
    </footer>
  );
}
