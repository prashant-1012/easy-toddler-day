"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Quote, Star, X } from "lucide-react";
import type { Testimonial } from "@/lib/data/testimonials";
import { avatarColors, getInitials } from "@/lib/utils/avatar";

interface TestimonialsMarqueeProps {
  testimonials: Testimonial[];
}

// Seconds of scroll per card — keeps the pace constant if reviews are added.
const SECONDS_PER_CARD = 9;

function Stars({ rating }: { rating: number }) {
  return (
    <div
      className="flex gap-0.5"
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < rating ? "fill-coral text-coral" : "text-warm-gray-light"}
        />
      ))}
    </div>
  );
}

function Author({
  testimonial,
  colorIndex,
}: {
  testimonial: Testimonial;
  colorIndex: number;
}) {
  return (
    <div className="flex items-center gap-3">
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
      <div className="min-w-0">
        <p className="truncate text-sm font-semibold text-charcoal">
          {testimonial.name}
        </p>
        {testimonial.relation && (
          <p className="truncate text-xs text-warm-gray">{testimonial.relation}</p>
        )}
      </div>
    </div>
  );
}

function MarqueeCard({
  testimonial,
  colorIndex,
  onOpen,
}: {
  testimonial: Testimonial;
  colorIndex: number;
  onOpen: (testimonial: Testimonial, trigger: HTMLElement) => void;
}) {
  const textRef = useRef<HTMLParagraphElement>(null);
  const [isTruncated, setIsTruncated] = useState(false);

  // Paragraph breaks are collapsed in the card so the line clamp is spent on
  // words, not blank lines; the dialog keeps them.
  const flatQuote = testimonial.quote.replace(/\s*\n+\s*/g, " ");

  // Only offer "Read more" when the clamp really cuts text off — that depends
  // on the card width and font, so measure instead of guessing from length.
  useLayoutEffect(() => {
    const el = textRef.current;
    if (!el) return;
    const measure = () => setIsTruncated(el.scrollHeight > el.clientHeight + 1);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [flatQuote]);

  return (
    <article className="flex w-[290px] shrink-0 flex-col gap-4 rounded-2xl bg-cloud p-6 shadow-soft transition-shadow duration-200 hover:shadow-lift sm:w-[340px]">
      <div className="flex items-center justify-between">
        <Quote className="h-6 w-6 text-coral/40" aria-hidden="true" />
        <Stars rating={testimonial.rating} />
      </div>

      <div className="flex flex-1 flex-col gap-2">
        {testimonial.title && (
          <h3 className="font-display text-base font-semibold leading-snug text-charcoal">
            {testimonial.title}
          </h3>
        )}
        <p
          ref={textRef}
          className="line-clamp-6 text-sm leading-relaxed text-warm-gray"
        >
          &ldquo;{flatQuote}&rdquo;
        </p>
        {isTruncated && (
          <button
            type="button"
            onClick={(event) => onOpen(testimonial, event.currentTarget)}
            aria-haspopup="dialog"
            className="-ml-2 mt-auto flex min-h-11 w-fit items-center rounded-lg px-2 text-sm font-semibold text-sky-dark transition-colors hover:text-coral-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky"
          >
            Read more
            <span className="sr-only">
              {" "}
              of {testimonial.name}&apos;s review
            </span>
          </button>
        )}
      </div>

      <div className="border-t border-warm-gray-light pt-4">
        <Author testimonial={testimonial} colorIndex={colorIndex} />
      </div>
    </article>
  );
}

function ReviewDialog({
  testimonial,
  colorIndex,
  onClose,
}: {
  testimonial: Testimonial;
  colorIndex: number;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = `review-${testimonial.id}`;

  useEffect(() => {
    closeRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
      // The close button is the only focusable control, so keep focus on it.
      if (event.key === "Tab") {
        event.preventDefault();
        closeRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/40 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="flex max-h-[85vh] w-full max-w-lg flex-col rounded-3xl bg-cream shadow-lift"
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.97 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-warm-gray-light px-6 py-4">
          <div className="min-w-0 space-y-3">
            <Stars rating={testimonial.rating} />
            <h3
              id={titleId}
              className="font-display text-xl font-semibold leading-snug text-charcoal"
            >
              {testimonial.title ?? `${testimonial.name}'s review`}
            </h3>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close review"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-charcoal transition-colors hover:bg-warm-gray-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky"
          >
            <X size={20} />
          </button>
        </div>

        <div className="space-y-4 overflow-y-auto px-6 py-5 text-base leading-relaxed text-warm-gray">
          {testimonial.quote.split(/\n{2,}/).map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <div className="border-t border-warm-gray-light px-6 py-4">
          <Author testimonial={testimonial} colorIndex={colorIndex} />
        </div>
      </motion.div>
    </motion.div>
  );
}

export function TestimonialsMarquee({ testimonials }: TestimonialsMarqueeProps) {
  const [selected, setSelected] = useState<Testimonial | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  function handleOpen(testimonial: Testimonial, trigger: HTMLElement) {
    triggerRef.current = trigger;
    setSelected(testimonial);
  }

  const handleClose = useCallback(() => {
    setSelected(null);
    triggerRef.current?.focus();
  }, []);

  const selectedIndex = selected
    ? testimonials.findIndex((t) => t.id === selected.id)
    : 0;

  return (
    <>
      <div
        className="marquee mt-12 overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]"
        role="region"
        aria-label="Customer reviews"
      >
        <div
          className="marquee-track flex w-max"
          style={
            {
              "--marquee-duration": `${testimonials.length * SECONDS_PER_CARD}s`,
            } as CSSProperties
          }
          data-paused={selected ? "true" : "false"}
        >
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="marquee-copy flex gap-6 pr-6"
              // The second copy only exists to make the loop seamless.
              aria-hidden={copy === 1 || undefined}
              inert={copy === 1}
            >
              {testimonials.map((testimonial, index) => (
                <MarqueeCard
                  key={testimonial.id}
                  testimonial={testimonial}
                  colorIndex={index}
                  onOpen={handleOpen}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <ReviewDialog
            key={selected.id}
            testimonial={selected}
            colorIndex={selectedIndex}
            onClose={handleClose}
          />
        )}
      </AnimatePresence>
    </>
  );
}
