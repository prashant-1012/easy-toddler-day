import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { TestimonialsColumn } from "@/components/ui/TestimonialsColumn";
import { testimonials } from "@/lib/data/testimonials";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Real feedback from parents, grandparents, and educators using Easy Toddler Day workbooks.",
};

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function TestimonialsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10 lg:py-24 xl:px-12">
      <Reveal>
        <SectionHeading
          eyebrow="Testimonials"
          title="What Parents Are Saying"
          subtitle="Real words from families who made screen-free, hands-on learning part of their toddler's day."
        />
      </Reveal>

      <div className="mt-12 flex max-h-[740px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
        <TestimonialsColumn testimonials={firstColumn} duration={15} />
        <TestimonialsColumn
          testimonials={secondColumn}
          className="hidden md:block"
          duration={19}
        />
        <TestimonialsColumn
          testimonials={thirdColumn}
          className="hidden lg:block"
          duration={17}
        />
      </div>

      <Reveal delay={0.1}>
        <div className="mt-16 flex flex-col items-center gap-4 text-center">
          <h2 className="font-display text-2xl font-semibold text-charcoal sm:text-3xl">
            Ready to Start Your Toddler&apos;s Learning Adventure?
          </h2>
          <Button href="/shop" size="lg">
            Shop Products
          </Button>
        </div>
      </Reveal>
    </div>
  );
}
