import { Check, X } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { brandPillars, comparisonRows } from "@/lib/data/comparison";

export function WhyEasyToddlerDay() {
  return (
    <section
      aria-labelledby="why-etd-heading"
      className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-10 lg:py-28 xl:px-12"
    >
      <Reveal>
        <div className="flex flex-col items-center text-center">
          <h2
            id="why-etd-heading"
            className="font-display text-3xl font-bold leading-tight text-charcoal sm:text-4xl lg:text-5xl"
          >
            Why EasyToddlerDay
          </h2>

          <ul className="mt-8 flex flex-wrap justify-center gap-4">
            {brandPillars.map((pillar) => (
              <li
                key={pillar.label}
                className={`rounded-2xl bg-cloud px-6 py-4 font-display text-base font-bold shadow-soft ${pillar.className}`}
              >
                {pillar.label}
              </li>
            ))}
          </ul>

          <h3 className="mt-10 font-display text-xl font-bold text-charcoal sm:text-2xl">
            How we compare
          </h3>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <table className="mt-8 w-full border-collapse text-left text-base text-charcoal">
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
              <tr
                key={row.feature}
                className="block border-t border-warm-gray-light py-4 md:table-row md:py-0"
              >
                <th
                  scope="row"
                  className="block px-5 pb-2 font-display text-lg font-semibold md:table-cell md:py-5 md:text-base md:font-normal"
                >
                  {row.feature}
                </th>
                <td className="block px-5 py-1 md:table-cell md:py-5">
                  <span className="flex items-start gap-2">
                    <Check
                      size={18}
                      strokeWidth={2.5}
                      className="mt-1 shrink-0 text-sage-dark"
                      aria-hidden="true"
                    />
                    <span>
                      <span className="sr-only">EasyToddlerDay: </span>
                      {row.us}
                    </span>
                  </span>
                </td>
                <td className="block px-5 py-1 text-warm-gray md:table-cell md:py-5">
                  <span className="flex items-start gap-2">
                    <X
                      size={18}
                      strokeWidth={2.5}
                      className="mt-1 shrink-0 text-coral-dark/60"
                      aria-hidden="true"
                    />
                    <span>
                      <span className="sr-only">
                        Typical store-bought worksheets:{" "}
                      </span>
                      {row.them}
                    </span>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>
    </section>
  );
}
