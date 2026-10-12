"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Maximize2,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils/cn";

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const thumbnailsContainerRef = useRef<HTMLDivElement>(null);

  // Clamp active index if images length changes
  const safeActiveIndex = Math.min(activeIndex, Math.max(0, images.length - 1));
  const activeImage = images[safeActiveIndex] ?? images[0];

  const handleSelect = useCallback((index: number) => {
    setActiveIndex(index);
    const thumbEl = thumbnailRefs.current[index];
    if (thumbEl) {
      thumbEl.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
    }
  }, []);

  const handlePrev = useCallback(() => {
    handleSelect(safeActiveIndex === 0 ? images.length - 1 : safeActiveIndex - 1);
  }, [safeActiveIndex, images.length, handleSelect]);

  const handleNext = useCallback(() => {
    handleSelect(safeActiveIndex === images.length - 1 ? 0 : safeActiveIndex + 1);
  }, [safeActiveIndex, images.length, handleSelect]);

  // Keyboard navigation
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (isZoomOpen) {
        if (e.key === "Escape") setIsZoomOpen(false);
        if (e.key === "ArrowLeft") handlePrev();
        if (e.key === "ArrowRight") handleNext();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isZoomOpen, handlePrev, handleNext]);

  // Lock body scroll when zoom modal is open
  useEffect(() => {
    if (isZoomOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isZoomOpen]);

  function scrollThumbnails(direction: "up" | "down") {
    if (!thumbnailsContainerRef.current) return;
    const scrollAmount = direction === "up" ? -180 : 180;
    thumbnailsContainerRef.current.scrollBy({ top: scrollAmount, behavior: "smooth" });
  }

  return (
    <>
      <div className="flex flex-col-reverse gap-4 md:flex-row md:items-start lg:gap-5">
        {/* Left Vertical Thumbnails on Desktop (Horizontal on Mobile) */}
        {images.length > 1 && (
          <div className="relative flex shrink-0 md:flex-col md:w-20 lg:w-24">
            {/* Desktop Scroll Up Button */}
            <button
              type="button"
              onClick={() => scrollThumbnails("up")}
              aria-label="Scroll thumbnails up"
              className="hidden md:flex items-center justify-center py-1 text-warm-gray hover:text-charcoal transition-colors"
            >
              <ChevronUp size={18} />
            </button>

            {/* Thumbnails Rail */}
            <div
              ref={thumbnailsContainerRef}
              className={cn(
                "flex w-full gap-2.5 overflow-x-auto p-1.5 scroll-smooth md:max-h-[560px] lg:max-h-[640px] md:flex-col md:overflow-y-auto md:p-1.5",
                "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              )}
            >
              {images.map((image, index) => {
                const isActive = index === safeActiveIndex;
                return (
                  <button
                    key={image + index}
                    ref={(el) => {
                      thumbnailRefs.current[index] = el;
                    }}
                    type="button"
                    onClick={() => handleSelect(index)}
                    onMouseEnter={() => handleSelect(index)}
                    aria-label={`View image ${index + 1} of ${images.length}`}
                    aria-pressed={isActive}
                    className={cn(
                      "group relative aspect-[1103/1426] w-16 shrink-0 overflow-hidden rounded-xl bg-white shadow-xs transition-all duration-150 focus-visible:outline-none md:w-full",
                      isActive
                        ? "border-2 border-coral-dark shadow-md"
                        : "border border-warm-gray-light/80 opacity-75 hover:opacity-100 hover:border-warm-gray"
                    )}
                  >
                    <Image
                      src={image}
                      alt={`${productName} thumbnail ${index + 1}`}
                      fill
                      className="object-contain p-1.5"
                      sizes="96px"
                    />
                  </button>
                );
              })}
            </div>

            {/* Desktop Scroll Down Button */}
            <button
              type="button"
              onClick={() => scrollThumbnails("down")}
              aria-label="Scroll thumbnails down"
              className="hidden md:flex items-center justify-center py-1 text-warm-gray hover:text-charcoal transition-colors"
            >
              <ChevronDown size={18} />
            </button>
          </div>
        )}

        {/* Main Cover / Preview Image */}
        <div className="group relative aspect-[1103/1426] w-full flex-1 overflow-hidden rounded-2xl bg-cloud shadow-soft border border-warm-gray-light/60 sm:rounded-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute inset-0 cursor-zoom-in"
              onClick={() => setIsZoomOpen(true)}
            >
              <Image
                src={activeImage}
                alt={`${productName} - preview ${safeActiveIndex + 1}`}
                fill
                priority={safeActiveIndex === 0}
                className="object-contain p-2 sm:p-4 transition-transform duration-300 group-hover:scale-[1.01]"
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
            </motion.div>
          </AnimatePresence>

          {/* Zoom In Hint Button */}
          <button
            type="button"
            onClick={() => setIsZoomOpen(true)}
            aria-label="Enlarge image"
            className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-charcoal shadow-sm backdrop-blur-xs transition-transform hover:scale-105 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-dark"
          >
            <Maximize2 size={16} />
          </button>

          {/* Navigation Arrows (if multiple images) */}
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                aria-label="Previous sample image"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/90 text-charcoal shadow-soft backdrop-blur-xs transition-all hover:scale-105 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-dark md:opacity-0 md:group-hover:opacity-100"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                aria-label="Next sample image"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/90 text-charcoal shadow-soft backdrop-blur-xs transition-all hover:scale-105 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-dark md:opacity-0 md:group-hover:opacity-100"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}

          {/* Image Counter Badge */}
          {images.length > 1 && (
            <div className="pointer-events-none absolute bottom-3 right-3 z-10 rounded-full bg-charcoal/70 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-xs">
              {safeActiveIndex + 1} / {images.length}
            </div>
          )}
        </div>
      </div>

      {/* Lightbox / Zoom Dialog Modal */}
      <AnimatePresence>
        {isZoomOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-label={`${productName} enlarged photo preview`}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-charcoal/90 p-4 backdrop-blur-md"
            onClick={() => setIsZoomOpen(false)}
          >
            {/* Top Bar with Title and Close */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-20">
              <span className="text-sm font-medium text-cream/90 truncate max-w-[80vw]">
                {productName} — Sample {safeActiveIndex + 1} of {images.length}
              </span>
              <button
                type="button"
                onClick={() => setIsZoomOpen(false)}
                aria-label="Close enlarged preview"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/30"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Image Display */}
            <div
              className="relative max-h-[80vh] max-w-[90vw] aspect-[1103/1426] h-full overflow-hidden rounded-2xl bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={activeImage}
                alt={`${productName} high resolution preview`}
                fill
                priority
                className="object-contain p-2 sm:p-4"
                sizes="(min-width: 1024px) 80vw, 95vw"
              />

              {/* Prev / Next Chevrons inside modal */}
              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrev();
                    }}
                    aria-label="Previous image"
                    className="absolute left-3 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-charcoal/70 text-white backdrop-blur-xs transition-transform hover:scale-105 hover:bg-charcoal"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext();
                    }}
                    aria-label="Next image"
                    className="absolute right-3 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-charcoal/70 text-white backdrop-blur-xs transition-transform hover:scale-105 hover:bg-charcoal"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>

            {/* Bottom thumbnail strip in modal */}
            {images.length > 1 && (
              <div
                className="mt-4 flex max-w-[90vw] gap-2 overflow-x-auto pb-2"
                onClick={(e) => e.stopPropagation()}
              >
                {images.map((img, i) => (
                  <button
                    key={img + i}
                    type="button"
                    onClick={() => handleSelect(i)}
                    className={cn(
                      "relative aspect-[1103/1426] h-14 shrink-0 overflow-hidden rounded-md bg-white transition-all",
                      i === safeActiveIndex
                        ? "ring-2 ring-coral scale-105"
                        : "opacity-60 hover:opacity-100"
                    )}
                  >
                    <Image
                      src={img}
                      alt=""
                      fill
                      className="object-contain p-0.5"
                      sizes="60px"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
