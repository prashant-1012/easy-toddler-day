import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { howToUseSteps } from "@/lib/data/howToUse";

export function HowToUse() {
  return (
    <section
      aria-labelledby="how-to-use-heading"
      // No top padding: it sits directly under "Why EasyToddlerDay", which
      // already provides the bottom spacing.
      className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-10 lg:pb-28 xl:px-12"
    >
      <Reveal>
        <h2
          id="how-to-use-heading"
          className="text-center font-display text-3xl font-bold leading-tight text-charcoal sm:text-4xl lg:text-5xl"
        >
          How to use it
        </h2>
      </Reveal>

      {/* Two columns until xl: the step text is baked into the artwork, so the
          cards need to stay wide enough for it to remain readable. */}
      <ol className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2 xl:max-w-none xl:grid-cols-4">
        {howToUseSteps.map((step, index) => (
          <li key={step.id}>
            <Reveal delay={index * 0.08} className="h-full">
              <Card className="overflow-hidden rounded-3xl">
                <Image
                  src={step.image}
                  alt={step.alt}
                  width={1254}
                  height={1254}
                  sizes="(min-width: 1280px) 25vw, (min-width: 640px) 45vw, 100vw"
                  className="h-auto w-full"
                />
              </Card>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
