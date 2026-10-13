import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      {/* Mobile / small tablet: portrait image anchored to the bottom. Its empty
          top area sits behind the text and fades into the page background. */}
      <div
        className="absolute inset-x-0 bottom-0 aspect-[2/3] md:hidden"
        style={{
          maskImage: "linear-gradient(to bottom, transparent 0%, black 22%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 22%)",
        }}
      >
        <Image
          src="/images/hero-mobile.png"
          alt="A toddler happily coloring with markers beside a stack of workbooks"
          fill
          priority
          sizes="(max-width: 767px) 100vw, 1px"
          className="object-cover object-bottom"
        />
      </div>

      {/* Tablet / desktop: landscape image fills the hero, child on the right. */}
      <div className="absolute inset-0 hidden md:block">
        <Image
          src="/images/hero-desktop.png"
          alt="A toddler happily coloring with markers beside a stack of workbooks"
          fill
          priority
          sizes="(min-width: 768px) 100vw, 1px"
          className="object-cover object-right"
        />
        {/* Keeps the text readable where it sits close to the child on narrower screens. */}
        <div className="absolute inset-0 bg-gradient-to-r from-cream/90 via-cream/50 to-transparent lg:from-cream/70 lg:via-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl px-4 pb-[90vw] pt-6 sm:px-6 sm:pt-8 md:min-h-[480px] md:pb-12 md:pt-8 lg:min-h-[520px] lg:px-10 lg:pt-10 xl:min-h-[560px] xl:px-12 xl:pt-12">
        <div className="hero-fade-up flex flex-col items-center gap-5 text-center md:max-w-xl md:items-start md:text-left lg:max-w-2xl xl:max-w-3xl">
          <h1 className="font-display text-3xl font-semibold leading-tight text-charcoal sm:text-4xl lg:text-5xl">
            <span className="md:whitespace-nowrap">One themed week at a time, make</span>{" "}
            <span className="block md:whitespace-nowrap">
              toddler time <span className="text-coral">joyful learning.</span>
            </span>
          </h1>

          <p className="max-w-lg text-base text-warm-gray sm:text-lg">
            No-prep weekly calendars and workbooks for toddlers aged 2–4 —
            alphabets, numbers, shapes, songs and hands-on play, planned out so
            you don&apos;t have to.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="/shop" size="lg" className="whitespace-nowrap">
              Browse Calendars & Workbooks
            </Button>
            <Button
              href="/shop/free-brain-boosting-activity-sheets"
              variant="secondary"
              size="lg"
              className="whitespace-nowrap"
            >
              Get Free Activity Sheet
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
