"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Tag, X } from "lucide-react";
import { PROMO_BANNER } from "@/lib/constants";

// Dismissal is plain component state: the navbar lives in the root layout, so
// the banner stays closed while navigating between pages, but a full page
// refresh remounts it and the banner shows again.
export function PromoBanner() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          role="region"
          aria-label="Promotion"
          className="overflow-hidden bg-charcoal text-white"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-3 gap-y-1 px-10 py-1.5 text-xs sm:gap-x-4 sm:px-12 sm:text-sm">
            <p className="flex items-center gap-1.5 text-center">
              <Tag
                className="h-3.5 w-3.5 shrink-0 fill-marigold text-marigold"
                aria-hidden="true"
              />
              <span>
                Offer applied:{" "}
                <strong className="font-bold">{PROMO_BANNER.highlight}</strong> on
                the Bundle
              </span>
            </p>
            <Link
              href={PROMO_BANNER.href}
              className="inline-flex min-h-7 items-center rounded-full bg-marigold px-3.5 text-xs font-semibold text-charcoal transition-all duration-150 hover:bg-marigold-dark active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal"
            >
              {PROMO_BANNER.ctaLabel}
            </Link>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close promotion"
              className="absolute right-1 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:right-3"
            >
              <X size={15} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
