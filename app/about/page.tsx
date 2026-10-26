import type { Metadata } from "next";
import { CreatorStory } from "@/components/sections/CreatorStory";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Meet the Creator",
  description:
    "Meet Sneha, the creator and mum behind Easy Toddler Day, and read the story behind our screen-free toddler learning.",
};

export default function AboutPage() {
  return (
    <>
      <CreatorStory />

      <div className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-10 lg:pb-24 xl:px-12">
        <Reveal delay={0.2}>
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="font-display text-2xl font-semibold text-charcoal sm:text-3xl">
              Ready to Start Playing, Learning, and Growing Together?
            </h2>
            <Button href="/shop" size="lg">
              Shop Products
            </Button>
          </div>
        </Reveal>
      </div>
    </>
  );
}
