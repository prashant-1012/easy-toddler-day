import Image from "next/image";
import { Blob } from "@/components/ui/Blob";
import { Reveal } from "@/components/ui/Reveal";

export function ContactHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-5xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-16">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-wide text-sky-dark">
            Contact Us
          </span>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-charcoal sm:text-5xl">
            We&apos;d Love to Hear From You
          </h1>
          <p className="mt-4 text-lg text-warm-gray">
            Questions about a workbook, bulk orders for a classroom, or just
            want to say hi — reach out and we&apos;ll get back to you over
            WhatsApp.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mx-auto h-[280px] w-[280px] sm:h-[340px] sm:w-[340px]">
            <Blob
              color="var(--color-coral)"
              className="left-[-10%] top-[-8%] h-56 w-56"
            />
            <Blob
              color="var(--color-sky)"
              className="bottom-[-8%] right-[-8%] h-64 w-64"
            />
            <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] shadow-lift">
              <Image
                src="/images/contact-hero-boy-coloring.png"
                alt="A toddler happily coloring at home"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 340px, 280px"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
