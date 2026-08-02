import { cn } from "@/lib/utils/cn";

type WordmarkSize = "sm" | "md" | "lg" | "xl";

interface WordmarkProps {
  size?: WordmarkSize;
  tagline?: boolean;
  className?: string;
}

const sizes: Record<WordmarkSize, string> = {
  sm: "text-lg",
  md: "text-2xl",
  lg: "text-3xl",
  xl: "text-5xl sm:text-6xl",
};

// Colors sampled directly from /public/images/easytoddlerday-removebg.png
// so any text rendering of the brand name matches the logo exactly.
export function Wordmark({ size = "md", tagline = false, className }: WordmarkProps) {
  return (
    <span className={cn("inline-flex flex-col", className)}>
      <span className={cn("font-display font-semibold leading-none", sizes[size])}>
        <span className="text-coral">easy</span>
        <span className="text-sky">toddler</span>
        <span className="text-sage">day</span>
      </span>
      {tagline && (
        <span className="mt-1.5 text-xs font-semibold uppercase tracking-wide text-warm-gray">
          Play <span className="text-marigold">•</span> Learn{" "}
          <span className="text-sage">•</span> Grow
        </span>
      )}
    </span>
  );
}
