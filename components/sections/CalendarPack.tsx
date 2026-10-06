import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

// TODO: placeholder card copy — replace with the real Calendar Pack contents.
// Every panel reuses the calendar cover (cropped at a different position)
// until per-card artwork exists.
const packItems = [
  {
    heading: "26 Letters",
    label: "Uppercase & Lowercase Tracing",
    description:
      "From A to Z, each letter gets its own week of tracing and first-word practice.",
    panelClass: "bg-sky/20",
    headingClass: "text-sky-dark",
    objectPosition: "50% 5%",
  },
  {
    heading: "Numbers 1-20",
    label: "Counting, Tracing & Grouping",
    description:
      "Counting, tracing, and grouping with playful pictures that make numbers click.",
    panelClass: "bg-sage/20",
    headingClass: "text-sage-dark",
    objectPosition: "50% 30%",
  },
  {
    heading: "Shapes",
    label: "Find, Trace & Create",
    description:
      "From circles to triangles, spotting shapes in everyday objects around the house.",
    panelClass: "bg-marigold/25",
    headingClass: "text-marigold-dark",
    objectPosition: "50% 55%",
  },
  {
    heading: "Colours",
    label: "Mix, Match & Colour",
    description:
      "Matching and colouring activities that help toddlers name and tell colours apart.",
    panelClass: "bg-coral/15",
    headingClass: "text-coral-dark",
    objectPosition: "50% 80%",
  },
  {
    heading: "Daily Routines",
    label: "Learn Through Play",
    description:
      "Short, repeatable activities that fit into nap-time gaps and after-dinner wind-downs.",
    panelClass: "bg-sky/20",
    headingClass: "text-sky-dark",
    objectPosition: "50% 100%",
  },
];

export function CalendarPack() {
  return (
    <section id="calendar-pack" className="scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 xl:px-12">
        <SectionHeading
          title="Meet the Toddlers Calendar Pack"
          subtitle="A complete 26-week learning journey. Just print, play, and watch them grow"
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {packItems.map((item, index) => (
            <Reveal key={item.heading} delay={(index % 5) * 0.08} className="h-full">
              <Card className="flex h-full flex-col gap-4 rounded-3xl p-4">
                <div
                  className={`relative aspect-square w-full overflow-hidden rounded-2xl ${item.panelClass}`}
                >
                  <Image
                    src="/products/weekly-calendar.png"
                    alt=""
                    fill
                    sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                    className="object-cover opacity-90"
                    style={{ objectPosition: item.objectPosition }}
                  />
                  <span className="absolute inset-x-3 bottom-3 rounded-full bg-cloud px-3 py-1.5 text-center text-xs font-semibold text-charcoal shadow-soft">
                    {item.label}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-2 px-2 pb-2">
                  <h3
                    className={`font-display text-xl font-semibold ${item.headingClass}`}
                  >
                    {item.heading}
                  </h3>
                  <p className="text-sm text-warm-gray">{item.description}</p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
