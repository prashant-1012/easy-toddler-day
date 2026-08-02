import { Hero } from "@/components/sections/Hero";
import { FeaturedWorkbooks } from "@/components/sections/FeaturedWorkbooks";
import { LearningBenefits } from "@/components/sections/LearningBenefits";
import { About } from "@/components/sections/About";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedWorkbooks />
      <LearningBenefits />
      <About />
      <Testimonials />
    </>
  );
}
