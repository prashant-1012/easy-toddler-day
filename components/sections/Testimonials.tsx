import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TestimonialsMarquee } from "@/components/sections/TestimonialsMarquee";
// import { Button } from "@/components/ui/Button";
import { getHomepageTestimonials } from "@/lib/data/testimonials";

export function Testimonials() {
  const testimonials = getHomepageTestimonials();

  return (
    <section className="bg-cloud py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 xl:px-12">
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved by Parents, Adored by Toddlers"
          subtitle="Real words from families who made screen-free learning part of their toddler's day."
        />
      </div>

      {/* Full-bleed so cards slide edge to edge of the viewport. */}
      <Reveal>
        <TestimonialsMarquee testimonials={testimonials} />
      </Reveal>

      {/* Hidden: /testimonials page is not linked for now.
      <div className="mt-12 flex justify-center">
        <Button href="/testimonials" variant="secondary" size="lg">
          View All Testimonials
        </Button>
      </div>
      */}
    </section>
  );
}
