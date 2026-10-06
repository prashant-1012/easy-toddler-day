import { Hero } from "@/components/sections/Hero";
import { FeaturedWorkbooks } from "@/components/sections/FeaturedWorkbooks";
import { CalendarPack } from "@/components/sections/CalendarPack";
// import { LearningBenefits } from "@/components/sections/LearningBenefits";
import { About } from "@/components/sections/About";
import { Testimonials } from "@/components/sections/Testimonials";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedWorkbooks />
      <CalendarPack />
      {/* <LearningBenefits /> */}
      <About />
      <Testimonials />
      <BlogPreview />
      <Contact />
    </>
  );
}
