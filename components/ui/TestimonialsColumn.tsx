"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { Testimonial } from "@/lib/data/testimonials";
import { avatarColors, getInitials } from "@/lib/utils/avatar";

interface TestimonialsColumnProps {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}

function TestimonialCard({
  testimonial,
  colorIndex,
}: {
  testimonial: Testimonial;
  colorIndex: number;
}) {
  return (
    <div className="w-full max-w-xs rounded-3xl border border-warm-gray-light/60 bg-cloud p-8 shadow-soft">
      <p className="whitespace-pre-line text-sm text-warm-gray">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="mt-5 flex items-center gap-3">
        {testimonial.avatar ? (
          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
            <Image
              src={testimonial.avatar}
              alt=""
              fill
              className="object-cover"
              sizes="40px"
            />
          </div>
        ) : (
          <span
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${avatarColors[colorIndex % avatarColors.length]}`}
          >
            {getInitials(testimonial.name)}
          </span>
        )}
        <div className="flex flex-col leading-tight">
          <span className="font-semibold tracking-tight text-charcoal">
            {testimonial.name}
          </span>
          {testimonial.relation && (
            <span className="text-xs text-warm-gray">{testimonial.relation}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export function TestimonialsColumn({
  className,
  testimonials,
  duration = 10,
}: TestimonialsColumnProps) {
  const shouldReduceMotion = useReducedMotion();

  // Reduced motion: render the column once, statically, instead of the
  // duplicated/looping track used for the marquee effect below.
  if (shouldReduceMotion) {
    return (
      <div className={className}>
        <div className="flex flex-col gap-6 pb-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              colorIndex={index}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[0, 1].map((copy) => (
          <div key={copy} className="flex flex-col gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={`${testimonial.id}-${copy}`}
                testimonial={testimonial}
                colorIndex={index}
              />
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
