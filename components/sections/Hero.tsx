import Image from "next/image";
import { Sparkles } from "lucide-react";
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

      <div className="relative z-10 mx-auto flex max-w-7xl px-4 pb-[90vw] pt-10 sm:px-6 md:min-h-[560px] md:items-center md:pb-16 md:pt-16 lg:min-h-[640px] lg:px-10 xl:min-h-[700px] xl:px-12">
        <div className="hero-fade-up flex flex-col items-center gap-5 text-center md:max-w-[26rem] md:items-start md:text-left lg:max-w-lg xl:max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-sage/15 px-4 py-1.5 text-sm font-semibold text-sage-dark">
            <Sparkles size={16} aria-hidden="true" />
            Screen-Free Learning, Made Joyful
          </span>

          <h1 className="font-display text-4xl font-semibold leading-tight text-charcoal sm:text-5xl xl:text-6xl">
            Playful Workbooks Toddlers{" "}
            <span className="text-coral">Actually Want</span> to Open
          </h1>

          <p className="max-w-md text-base text-warm-gray sm:text-lg">
            Screen-free, Montessori-inspired activity books designed for
            little hands — because the best learning still happens with a
            pencil and a proud smile.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/shop" size="lg">
              Shop Products
            </Button>
            <Button href="#calendar-pack" variant="secondary" size="lg">
              See How It Works
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
