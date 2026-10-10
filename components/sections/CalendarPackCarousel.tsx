"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import Image from "next/image";
import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  type AnimationPlaybackControls,
  type PanInfo,
} from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/Card";

export interface CalendarPackSlide {
  heading: string;
  description: string;
  image: string;
  headingClass: string;
}

interface CalendarPackCarouselProps {
  slides: CalendarPackSlide[];
}

const GAP = 20;
const BUTTON_SIZE = 44;

// Cards visible at once, based on the width of the carousel viewport. The
// fractional values (1.2 / 2.2 / 3.5) leave a peek of the next card as a
// "this scrolls" hint.
function getPerView(width: number) {
  if (width < 520) return 1.2;
  if (width < 800) return 2.2;
  if (width < 1100) return 3.5;
  return 4;
}

// Infinite loop: the slides are rendered three times in a row and the track
// always rests in the middle copy. Once a move settles outside it, the track
// is teleported by exactly one copy's width, which looks identical on screen.
export function CalendarPackCarousel({ slides }: CalendarPackCarouselProps) {
  const count = slides.length;
  const shouldReduceMotion = useReducedMotion();
  const viewportRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<AnimationPlaybackControls | null>(null);
  const positionRef = useRef(count);
  const x = useMotionValue(0);

  const [width, setWidth] = useState(0);

  const perView = getPerView(width);
  const cardWidth = width ? (width - GAP * (Math.ceil(perView) - 1)) / perView : 0;
  const step = cardWidth + GAP;
  const maxJump = Math.ceil(perView);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => {
      setWidth(entry.contentRect.width);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Re-anchor on the resting position whenever the card size changes.
  useEffect(() => {
    if (!step) return;
    animationRef.current?.stop();
    x.set(-positionRef.current * step);
  }, [step, x]);

  const normalize = useCallback(() => {
    if (!step) return;
    let position = positionRef.current;
    while (position < count) position += count;
    while (position >= count * 2) position -= count;
    if (position !== positionRef.current) {
      positionRef.current = position;
      x.set(-position * step);
    }
  }, [count, step, x]);

  const goTo = useCallback(
    (target: number) => {
      if (!step) return;
      animationRef.current?.stop();
      // Keep the window inside the three rendered copies.
      const clamped = Math.min(Math.max(target, 1), count * 3 - maxJump - 1);
      positionRef.current = clamped;
      animationRef.current = animate(x, -clamped * step, {
        duration: shouldReduceMotion ? 0 : 0.5,
        ease: [0.16, 1, 0.3, 1],
        onComplete: normalize,
      });
    },
    [count, maxJump, normalize, shouldReduceMotion, step, x]
  );

  const shift = (delta: number) => {
    normalize();
    goTo(positionRef.current + delta);
  };

  const handleDragStart = () => {
    animationRef.current?.stop();
  };

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (!step) return;
    const projected = -(x.get() + info.velocity.x * 0.15) / step;
    const current = -x.get() / step;
    const clampedTarget = Math.min(
      Math.max(Math.round(projected), Math.round(current) - maxJump),
      Math.round(current) + maxJump
    );
    goTo(clampedTarget);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      shift(-1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      shift(1);
    }
  };

  const copies = [0, 1, 2];
  const buttonTop = cardWidth ? cardWidth / 2 - BUTTON_SIZE / 2 : 0;
  const buttonClass =
    "absolute z-10 flex items-center justify-center rounded-full bg-cloud text-charcoal shadow-lift transition-[transform,background-color] duration-150 hover:bg-cream active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-dark focus-visible:ring-offset-2";

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Calendar pack contents"
      className="relative mt-12 md:px-14"
      onKeyDown={handleKeyDown}
    >
      <button
        type="button"
        aria-label="Previous cards"
        onClick={() => shift(-1)}
        className={`${buttonClass} left-1 md:left-0`}
        style={{ top: buttonTop, width: BUTTON_SIZE, height: BUTTON_SIZE }}
      >
        <ChevronLeft className="h-5 w-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        aria-label="Next cards"
        onClick={() => shift(1)}
        className={`${buttonClass} right-1 md:right-0`}
        style={{ top: buttonTop, width: BUTTON_SIZE, height: BUTTON_SIZE }}
      >
        <ChevronRight className="h-5 w-5" aria-hidden="true" />
      </button>

      <div
        ref={viewportRef}
        tabIndex={0}
        aria-label="Use the left and right arrow keys to browse"
        className={`overflow-hidden rounded-3xl py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-dark focus-visible:ring-offset-4 ${
          width ? "opacity-100" : "opacity-0"
        }`}
      >
        <motion.div
          drag="x"
          dragMomentum={false}
          dragElastic={0}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          style={{ x, gap: GAP, touchAction: "pan-y" }}
          className="flex cursor-grab active:cursor-grabbing"
        >
          {copies.map((copy) =>
            slides.map((slide) => {
              const isPrimary = copy === 1;
              return (
                <div
                  key={`${copy}-${slide.heading}`}
                  aria-hidden={isPrimary ? undefined : true}
                  inert={isPrimary ? undefined : true}
                  className="shrink-0 select-none"
                  style={{ width: cardWidth }}
                >
                  <Card className="flex h-full flex-col gap-4 rounded-3xl p-4">
                    <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-cream">
                      <Image
                        src={slide.image}
                        alt={isPrimary ? `${slide.heading} card artwork` : ""}
                        fill
                        draggable={false}
                        sizes="(min-width: 1100px) 22vw, (min-width: 800px) 28vw, (min-width: 520px) 42vw, 80vw"
                        className="pointer-events-none object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-2 px-2 pb-2">
                      <h3
                        className={`font-display text-xl font-semibold ${slide.headingClass}`}
                      >
                        {slide.heading}
                      </h3>
                      <p className="text-sm text-warm-gray">{slide.description}</p>
                    </div>
                  </Card>
                </div>
              );
            })
          )}
        </motion.div>
      </div>
    </div>
  );
}
