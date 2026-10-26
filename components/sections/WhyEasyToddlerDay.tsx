"use client";

import { Check, X } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { brandPillars, comparisonRows } from "@/lib/data/comparison";

export function WhyEasyToddlerDay() {
  const shouldReduceMotion = useReducedMotion();

  const pillContainer: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };

  const pillItem: Variants = {
    hidden: {
      opacity: 0,
      scale: shouldReduceMotion ? 1 : 0.5,
      y: shouldReduceMotion ? 0 : 14,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 260, damping: 16 },
    },
  };

  const rowContainer: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  // Opacity-only: transforms on table rows render inconsistently across
  // browsers, so the row itself just fades while its icon pops (below).
  const rowItem: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4 } },
  };

  const iconPop: Variants = {
    hidden: {
      opacity: 0,
      scale: shouldReduceMotion ? 1 : 0.3,
      rotate: shouldReduceMotion ? 0 : -15,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 300, damping: 14 },
    },
  };

  return (
    <section
      aria-labelledby="why-etd-heading"
      className="relative w-full overflow-hidden py-8 sm:py-10"
    >
      {/* Ambient background glows anchored to the actual screen corners */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full bg-sky/15 blur-3xl sm:h-96 sm:w-96"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -bottom-24 h-72 w-72 rounded-full bg-coral/15 blur-3xl sm:h-96 sm:w-96"
      />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative flex flex-col items-center text-center">
            <h2
              id="why-etd-heading"
              className="font-display text-2xl font-bold leading-tight text-charcoal sm:text-3xl lg:text-4xl"
            >
              Why EasyToddlerDay
            </h2>

            <motion.ul
              className="mt-3 flex flex-wrap justify-center gap-2.5 sm:mt-4 sm:gap-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={pillContainer}
            >
              {brandPillars.map((pillar) => (
                <motion.li
                  key={pillar.label}
                  variants={pillItem}
                  whileHover={
                    shouldReduceMotion ? undefined : { scale: 1.08, rotate: -2 }
                  }
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.96 }}
                  className={`cursor-default rounded-xl bg-cloud px-4 py-1.5 font-display text-xs font-bold shadow-soft sm:px-5 sm:py-2 sm:text-sm ${pillar.className}`}
                >
                  {pillar.label}
                </motion.li>
              ))}
            </motion.ul>

            <h3 className="mt-3 font-display text-base font-bold text-charcoal sm:mt-4 sm:text-lg">
              How we compare
            </h3>
          </div>
        </Reveal>

        <div className="relative mt-3 overflow-hidden rounded-2xl border border-warm-gray-light/80 bg-cloud/80 p-1.5 shadow-soft backdrop-blur-xs sm:mt-4 sm:rounded-3xl sm:p-3">
          <motion.table
            className="w-full border-collapse text-left text-xs text-charcoal sm:text-sm md:text-sm"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={rowContainer}
          >
            <thead className="hidden md:table-header-group">
              <tr className="border-b border-warm-gray-light/60">
                <th scope="col" className="w-[28%] px-4 py-2 sm:px-5 sm:py-2.5">
                  <span className="sr-only">Feature</span>
                </th>
                <th
                  scope="col"
                  className="w-[36%] px-4 py-2 font-display text-xs font-bold text-coral-dark sm:px-5 sm:py-2.5 sm:text-sm"
                >
                  EasyToddlerDay
                </th>
                <th
                  scope="col"
                  className="w-[36%] px-4 py-2 font-display text-xs font-bold text-charcoal sm:px-5 sm:py-2.5 sm:text-sm"
                >
                  Typical store-bought worksheets
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <motion.tr
                  key={row.feature}
                  variants={rowItem}
                  className="block border-t border-warm-gray-light/60 py-2 transition-colors duration-200 hover:bg-sage/5 first:border-t-0 md:table-row md:py-0"
                >
                  <th
                    scope="row"
                    className="block px-4 pb-1 font-display text-sm font-semibold text-charcoal md:table-cell md:px-5 md:py-2.5 md:text-sm md:font-normal"
                  >
                    {row.feature}
                  </th>
                  <td className="block px-4 py-0.5 md:table-cell md:px-5 md:py-2.5">
                    <span className="flex items-start gap-1.5 sm:gap-2">
                      <motion.span variants={iconPop} className="mt-0.5 shrink-0">
                        <Check
                          size={16}
                          strokeWidth={2.5}
                          className="text-sage-dark"
                          aria-hidden="true"
                        />
                      </motion.span>
                      <span>
                        <span className="sr-only">EasyToddlerDay: </span>
                        {row.us}
                      </span>
                    </span>
                  </td>
                  <td className="block px-4 py-0.5 text-warm-gray md:table-cell md:px-5 md:py-2.5">
                    <span className="flex items-start gap-1.5 sm:gap-2">
                      <motion.span variants={iconPop} className="mt-0.5 shrink-0">
                        <X
                          size={16}
                          strokeWidth={2.5}
                          className="text-coral-dark/60"
                          aria-hidden="true"
                        />
                      </motion.span>
                      <span>
                        <span className="sr-only">
                          Typical store-bought worksheets:{" "}
                        </span>
                        {row.them}
                      </span>
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </motion.table>
        </div>
      </div>
    </section>
  );
}
