import { BookOpen, HeartHandshake, Sun, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { Blob } from "@/components/ui/Blob";
import type { BlogAccentColor } from "@/lib/types/blog";

const bgClasses: Record<BlogAccentColor, string> = {
  coral: "bg-coral/10",
  sky: "bg-sky/10",
  sage: "bg-sage/10",
};

const iconClasses: Record<BlogAccentColor, string> = {
  coral: "text-coral-dark",
  sky: "text-sky-dark",
  sage: "text-sage-dark",
};

const blobColors: Record<BlogAccentColor, string> = {
  coral: "var(--color-coral)",
  sky: "var(--color-sky)",
  sage: "var(--color-sage)",
};

const iconBySlug: Record<string, LucideIcon> = {
  "screen-free-summer-activities-for-toddlers": Sun,
  "how-to-be-your-toddlers-first-learning-coach": HeartHandshake,
  "phonics-at-home-a-gentle-starting-point": BookOpen,
};

export function getBlogPostIcon(slug: string): LucideIcon {
  return iconBySlug[slug] ?? BookOpen;
}

interface BlogCoverArtProps {
  icon: LucideIcon;
  accentColor: BlogAccentColor;
  className?: string;
  iconSize?: number;
}

export function BlogCoverArt({
  icon: Icon,
  accentColor,
  className,
  iconSize = 40,
}: BlogCoverArtProps) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden",
        bgClasses[accentColor],
        className
      )}
    >
      <Blob
        color={blobColors[accentColor]}
        className="left-[10%] top-[-10%] h-full w-full opacity-40"
      />
      <Icon
        size={iconSize}
        className={cn("relative", iconClasses[accentColor])}
        aria-hidden="true"
      />
    </div>
  );
}
