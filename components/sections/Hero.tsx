"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Blob } from "@/components/ui/Blob";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const floatSlow = shouldReduceMotion
    ? {}
    : { y: [0, -14, 0], transition: { duration: 5, repeat: Infinity, ease: "easeInOut" as const } };
  const floatFast = shouldReduceMotion
    ? {}
    : {
        y: [0, 10, 0],
        transition: { duration: 4, repeat: Infinity, ease: "easeInOut" as const, delay: 0.4 },
      };

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:py-24 lg:px-8">
        <div className="hero-fade-up flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-sage/15 px-4 py-1.5 text-sm font-semibold text-sage-dark">
            <Sparkles size={16} aria-hidden="true" />
            Screen-Free Learning, Made Joyful
          </span>

          <h1 className="font-display text-4xl font-semibold leading-tight text-charcoal sm:text-5xl lg:text-6xl">
            Playful Workbooks Toddlers{" "}
            <span className="text-coral">Actually Want</span> to Open
          </h1>

          <p className="max-w-md text-lg text-warm-gray">
            Screen-free, Montessori-inspired activity books designed for
            little hands — because the best learning still happens with a
            pencil and a proud smile.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/shop" size="lg">
              Shop Workbooks
            </Button>
            <Button href="#learning-benefits" variant="secondary" size="lg">
              See How It Works
            </Button>
          </div>
        </div>

        <div className="hero-fade-scale relative mx-auto h-[340px] w-[280px] sm:h-[420px] sm:w-[360px] lg:h-[480px] lg:w-[440px]">
          <Blob color="var(--color-coral)" className="left-[-12%] top-[-8%] h-56 w-56 sm:h-64 sm:w-64" />
          <Blob color="var(--color-sky)" className="bottom-[-12%] right-[-12%] h-64 w-64 sm:h-72 sm:w-72" />

          <motion.div
            animate={floatSlow}
            className="absolute inset-x-6 top-0 h-[85%] overflow-hidden rounded-[2.5rem]"
          >
            <Image
              src="/images/banner-quiz.png"
              alt="Curious toddler pausing to think"
              fill
              priority
              className="object-contain"
              sizes="(min-width: 1024px) 440px, 360px"
            />
          </motion.div>

          <motion.div
            animate={floatFast}
            className="absolute -bottom-2 -left-2 w-24 rotate-[-8deg] overflow-hidden rounded-xl shadow-lift sm:w-32"
          >
            <Image
              src="/images/book-1.jpg"
              alt="Alphabet Tracing Workbook cover"
              width={200}
              height={260}
              className="h-auto w-full object-cover"
            />
          </motion.div>

          <motion.div
            animate={floatFast}
            className="absolute -right-2 -top-4 flex items-center gap-2 rounded-full bg-cloud px-3 py-1.5 shadow-soft sm:right-0 sm:top-8 sm:px-4 sm:py-2"
          >
            <Heart size={16} className="text-coral" fill="currentColor" aria-hidden="true" />
            <span className="text-sm font-semibold text-charcoal">
              Loved by Little Learners
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
