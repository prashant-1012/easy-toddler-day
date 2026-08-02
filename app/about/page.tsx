import type { Metadata } from "next";
import { BookOpen, PlayCircle, Sprout } from "lucide-react";
import { AboutHero } from "@/components/sections/AboutHero";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Easy Toddler Day's mission to bring screen-free, Montessori-inspired learning to toddlers everywhere.",
};

const values = [
  {
    icon: PlayCircle,
    word: "Play",
    color: "coral" as const,
    description:
      "Learning sticks when it feels like play. Every activity is designed to feel like a game, not a lesson.",
  },
  {
    icon: BookOpen,
    word: "Learn",
    color: "sky" as const,
    description:
      "Real skills, built gently. Letter sounds, number sense, and fine motor control — introduced at a toddler's pace, not a curriculum's.",
  },
  {
    icon: Sprout,
    word: "Grow",
    color: "sage" as const,
    description:
      "Confidence comes from finishing things. Short, achievable pages help every toddler feel proud of what they made.",
  },
];

const colorClasses = {
  coral: "bg-coral/15 text-coral-dark",
  sky: "bg-sky/15 text-sky-dark",
  sage: "bg-sage/15 text-sage-dark",
};

// TODO: personalize with the real founder story / brand history if desired
export default function AboutPage() {
  return (
    <>
      <AboutHero />

      <div className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <Reveal>
          <div className="mx-auto flex max-w-2xl flex-col gap-4 text-center text-lg text-warm-gray">
            <p>
              Easy Toddler Day started with a simple frustration: most
              &ldquo;educational&rdquo; products for toddlers were either
              screens in disguise or worksheets designed for kids twice their
              age. We wanted something different — workbooks that respect how
              short a toddler&apos;s attention span actually is, and how much
              they love repetition, big bold pages, and finishing something
              with their own two hands.
            </p>
            <p>
              So we build workbooks the way a good toy is built: simple,
              sturdy, and genuinely fun to come back to. No apps to open, no
              subscriptions to manage — just paper, crayons, and a toddler
              who feels proud of what they made.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {values.map((value, index) => (
            <Reveal key={value.word} delay={index * 0.1} className="h-full">
              <Card className="flex h-full flex-col items-center gap-4 p-8 text-center">
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-full ${colorClasses[value.color]}`}
                >
                  <value.icon size={26} aria-hidden="true" />
                </span>
                <h3 className="font-display text-2xl font-semibold text-charcoal">
                  {value.word}
                </h3>
                <p className="text-sm text-warm-gray">{value.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-16 flex flex-col items-center gap-4 text-center">
            <h2 className="font-display text-2xl font-semibold text-charcoal sm:text-3xl">
              Ready to Start Playing, Learning, and Growing Together?
            </h2>
            <Button href="/shop" size="lg">
              Shop Workbooks
            </Button>
          </div>
        </Reveal>
      </div>
    </>
  );
}
