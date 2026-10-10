"use client";

import { Check, X } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { Blob } from "@/components/ui/Blob";
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
      className="relative mx-auto max-w-5xl overflow-hidden px-4 py-20 sm:px-6 lg:px-10 lg:py-28 xl:px-12"
    >
      <Blob
        color="var(--color-sky)"
        className="left-[-8%] top-[-6%] h-48 w-48"
      />
      <Blob
        color="var(--color-coral)"
        className="bottom-[-6%] right-[-6%] h-56 w-56"
      />

      <Reveal>
        <div className="relative flex flex-col items-center text-center">
          <h2
            id="why-etd-heading"
            className="font-display text-3xl font-bold leading-tight text-charcoal sm:text-4xl lg:text-5xl"
          >
            Why EasyToddlerDay
          </h2>

          <motion.ul
            className="mt-8 flex flex-wrap justify-center gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={pillContainer}
          >
            {brandPillars.map((pillar) => (
              <motion.li
                key={pillar.label}
                variants={pillItem}
                whileHover={
                  shouldReduceMotion ? undefined : { scale: 1.1, rotate: -3 }
                }
                whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
                className={`cursor-default rounded-2xl bg-cloud px-6 py-4 font-display text-base font-bold shadow-soft ${pillar.className}`}
              >
                {pillar.label}
              </motion.li>
            ))}
          </motion.ul>

          <h3 className="mt-10 font-display text-xl font-bold text-charcoal sm:text-2xl">
            How we compare
          </h3>
        </div>
      </Reveal>

      <motion.table
        className="relative mt-8 w-full border-collapse text-left text-base text-charcoal"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={rowContainer}
      >
        <thead className="hidden md:table-header-group">
          <tr>
            <th scope="col" className="w-[26%] px-5 py-5">
              <span className="sr-only">Feature</span>
            </th>
            <th
              scope="col"
              className="w-[38%] px-5 py-5 font-display text-base font-bold text-coral-dark"
            >
              EasyToddlerDay
            </th>
            <th
              scope="col"
              className="w-[36%] px-5 py-5 font-display text-base font-bold text-charcoal"
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
              className="block border-t border-warm-gray-light py-4 transition-colors duration-200 hover:bg-sage/5 md:table-row md:py-0"
            >
              <th
                scope="row"
                className="block px-5 pb-2 font-display text-lg font-semibold md:table-cell md:py-5 md:text-base md:font-normal"
              >
                {row.feature}
              </th>
              <td className="block px-5 py-1 md:table-cell md:py-5">
                <span className="flex items-start gap-2">
                  <motion.span variants={iconPop} className="mt-1 shrink-0">
                    <Check
                      size={18}
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
              <td className="block px-5 py-1 text-warm-gray md:table-cell md:py-5">
                <span className="flex items-start gap-2">
                  <motion.span variants={iconPop} className="mt-1 shrink-0">
                    <X
                      size={18}
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
    </section>
  );
}
