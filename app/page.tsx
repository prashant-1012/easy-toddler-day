import { Hero } from "@/components/sections/Hero";
import { FeaturedWorkbooks } from "@/components/sections/FeaturedWorkbooks";
import { LearningBenefits } from "@/components/sections/LearningBenefits";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedWorkbooks />
      <LearningBenefits />
    </>
  );
}
