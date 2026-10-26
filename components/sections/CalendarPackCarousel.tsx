"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

export interface CalendarPackSlide {
  heading: string;
  description: string;
  image: string;
  headingClass: string;
  fullDetail?: string;
}

interface CalendarPackCarouselProps {
  slides: CalendarPackSlide[];
}

export function CalendarPackCarousel({ slides }: CalendarPackCarouselProps) {
  const [selectedSlideIndex, setSelectedSlideIndex] = useState<number | null>(null);

  const activeSlide = selectedSlideIndex !== null ? slides[selectedSlideIndex] : null;

  const handleClose = useCallback(() => {
    setSelectedSlideIndex(null);
  }, []);

  const handlePrev = useCallback(() => {
    setSelectedSlideIndex((prev) =>
      prev !== null ? (prev - 1 + slides.length) % slides.length : null
    );
  }, [slides.length]);

  const handleNext = useCallback(() => {
    setSelectedSlideIndex((prev) =>
      prev !== null ? (prev + 1) % slides.length : null
    );
  }, [slides.length]);

  // Handle keyboard navigation & body scroll locking
  useEffect(() => {
    if (selectedSlideIndex === null) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        handleClose();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedSlideIndex, handleClose, handlePrev, handleNext]);

  return (
    <div className="mt-8 sm:mt-10">
      {/* 2 rows with 6 cards in each row on desktop (grid-cols-6) */}
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 lg:grid-cols-6 lg:gap-3.5">
        {slides.map((slide, index) => (
          <Reveal
            key={slide.heading}
            delay={(index % 6) * 0.04}
            className="h-full"
          >
            <div
              role="button"
              tabIndex={0}
              aria-haspopup="dialog"
              aria-label={`View full details for ${slide.heading}`}
              onClick={() => setSelectedSlideIndex(index)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedSlideIndex(index);
                }
              }}
              className="group h-full cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-sky-dark rounded-2xl block text-left"
            >
              <Card className="flex h-full flex-col overflow-hidden rounded-2xl bg-cloud p-2 sm:p-2.5 shadow-soft transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-lift group-hover:border-sky-light/80">
                <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-cream/70">
                  <Image
                    src={slide.image}
                    alt={`${slide.heading} card artwork`}
                    fill
                    sizes="(min-width: 1024px) 16vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, 50vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Subtle hover expand chip */}
                  <span className="absolute bottom-1.5 right-1.5 rounded-full bg-charcoal/70 px-1.5 py-0.5 text-[10px] font-medium text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 backdrop-blur-xs">
                    View
                  </span>
                </div>
                <div className="flex flex-1 flex-col pt-2 pb-0.5 px-0.5">
                  <div className="flex min-h-[2rem] sm:min-h-[2.25rem] items-center">
                    <h3
                      className={`font-display text-xs sm:text-[13px] font-semibold leading-tight line-clamp-2 ${slide.headingClass}`}
                      title={slide.heading}
                    >
                      {slide.heading}
                    </h3>
                  </div>
                  <p className="mt-0.5 text-[11px] sm:text-xs text-warm-gray leading-snug line-clamp-2">
                    {slide.description}
                  </p>
                </div>
              </Card>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Accessible Detail Popup Modal */}
      <AnimatePresence>
        {activeSlide !== null && selectedSlideIndex !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="explore-modal-title"
          >
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-charcoal/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              aria-hidden="true"
            />

            {/* Modal Dialog Content */}
            <motion.div
              className="relative z-10 w-full max-w-lg overflow-hidden rounded-3xl bg-cloud shadow-2xl border border-warm-gray-light sm:max-w-xl"
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              {/* Header bar */}
              <div className="flex items-center justify-between border-b border-warm-gray-light/60 px-5 py-3.5 sm:px-6">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-cream px-3 py-1 text-xs font-semibold text-charcoal">
                  <Sparkles size={13} className="text-sun" aria-hidden="true" />
                  Activity {selectedSlideIndex + 1} of {slides.length}
                </div>

                <button
                  type="button"
                  onClick={handleClose}
                  className="rounded-full p-1.5 text-warm-gray transition-colors hover:bg-cream hover:text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-dark"
                  aria-label="Close dialog"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-5 sm:p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
                  {/* Artwork Image */}
                  <div className="relative mx-auto aspect-square w-44 shrink-0 overflow-hidden rounded-2xl bg-cream/70 shadow-soft sm:mx-0 sm:w-48">
                    <Image
                      src={activeSlide.image}
                      alt={`${activeSlide.heading} artwork`}
                      fill
                      sizes="200px"
                      className="object-cover"
                      priority
                    />
                  </div>

                  {/* Text Details */}
                  <div className="flex flex-1 flex-col text-left">
                    <h2
                      id="explore-modal-title"
                      className={`font-display text-xl sm:text-2xl font-bold leading-tight ${activeSlide.headingClass}`}
                    >
                      {activeSlide.heading}
                    </h2>

                    <p className="mt-2 text-sm sm:text-base font-medium text-charcoal leading-relaxed">
                      {activeSlide.description}
                    </p>

                    {activeSlide.fullDetail && (
                      <p className="mt-2.5 text-xs sm:text-sm text-warm-gray leading-relaxed bg-cream/50 rounded-xl p-3 border border-warm-gray-light/40">
                        {activeSlide.fullDetail}
                      </p>
                    )}

                    <div className="mt-4 flex items-center gap-2">
                      <span className="rounded-md bg-sky-light/40 px-2 py-0.5 text-[11px] font-semibold text-sky-dark">
                        Weekly Focus
                      </span>
                      <span className="rounded-md bg-sage-light/40 px-2 py-0.5 text-[11px] font-semibold text-sage-dark">
                        Screen-Free
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer bar with Previous / Next navigation */}
              <div className="flex items-center justify-between border-t border-warm-gray-light/60 bg-cream/40 px-5 py-3 sm:px-6">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="inline-flex items-center gap-1 rounded-xl px-3 py-1.5 text-xs font-semibold text-charcoal transition-colors hover:bg-cream hover:text-sky-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-dark"
                  aria-label="Previous activity"
                >
                  <ChevronLeft size={16} />
                  <span>Previous</span>
                </button>

                <div className="text-xs text-warm-gray">
                  Use <kbd className="rounded bg-cloud px-1 py-0.5 font-mono text-[10px] shadow-xs">←</kbd> <kbd className="rounded bg-cloud px-1 py-0.5 font-mono text-[10px] shadow-xs">→</kbd> keys
                </div>

                <button
                  type="button"
                  onClick={handleNext}
                  className="inline-flex items-center gap-1 rounded-xl px-3 py-1.5 text-xs font-semibold text-charcoal transition-colors hover:bg-cream hover:text-sky-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-dark"
                  aria-label="Next activity"
                >
                  <span>Next</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
