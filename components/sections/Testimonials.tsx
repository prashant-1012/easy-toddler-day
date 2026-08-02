import { Quote, Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/lib/data/testimonials";

const avatarColors = [
  "bg-coral/15 text-coral-dark",
  "bg-sky/15 text-sky-dark",
  "bg-sage/15 text-sage-dark",
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function Testimonials() {
  return (
    <section className="bg-cloud py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved by Parents, Adored by Toddlers"
          subtitle="Real words from families who made screen-free learning part of their toddler's day."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.id} delay={(index % 4) * 0.06} className="h-full">
              <Card className="flex h-full flex-col gap-4 p-6">
                <Quote className="h-6 w-6 text-coral/40" aria-hidden="true" />

                <div
                  className="flex gap-0.5"
                  role="img"
                  aria-label={`${testimonial.rating} out of 5 stars`}
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={
                        i < testimonial.rating
                          ? "fill-coral text-coral"
                          : "text-warm-gray-light"
                      }
                    />
                  ))}
                </div>

                <p className="flex-1 text-sm text-warm-gray">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div className="flex items-center gap-3 pt-2">
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${avatarColors[index % avatarColors.length]}`}
                  >
                    {getInitials(testimonial.name)}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-charcoal">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-warm-gray">
                      {testimonial.relation}
                    </p>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
