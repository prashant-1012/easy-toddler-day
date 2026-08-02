import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Blob } from "@/components/ui/Blob";
import { Reveal } from "@/components/ui/Reveal";

// TODO: personalize with the real founder story / brand history if desired
export function About() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative mx-auto h-[320px] w-[280px] sm:h-[380px] sm:w-[340px]">
            <Blob
              color="var(--color-sage)"
              className="left-[-10%] top-[-5%] h-56 w-56"
            />
            <Blob
              color="var(--color-coral)"
              className="bottom-[-8%] right-[-8%] h-64 w-64"
            />
            <div className="absolute left-0 top-6 w-40 rotate-[-6deg] overflow-hidden rounded-2xl shadow-lift sm:w-48">
              <Image
                src="/images/book-2.jpg"
                alt="Number Fun Workbook cover"
                width={240}
                height={310}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-40 rotate-[7deg] overflow-hidden rounded-2xl shadow-lift sm:w-48">
              <Image
                src="/images/book-4.jpg"
                alt="Shapes & Colors Workbook cover"
                width={240}
                height={310}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <SectionHeading
            eyebrow="Our Story"
            title="Made by People Who Actually Like Toddlers"
            align="left"
          />
          <p className="mt-6 text-lg text-warm-gray">
            Easy Toddler Day started with a simple frustration: most
            &ldquo;educational&rdquo; products for toddlers were either
            screens in disguise or worksheets designed for kids twice their
            age. We wanted something different — workbooks that respect how
            short a toddler&apos;s attention span actually is, and how much
            they love repetition, big bold pages, and finishing something
            with their own two hands.
          </p>
          <p className="mt-4 text-lg text-warm-gray">
            Every workbook we make is tested against one question above all:
            does a toddler actually want to open it again tomorrow?
          </p>
          <div className="mt-8">
            <Button href="/about" variant="secondary" size="lg">
              Learn More About Us
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
