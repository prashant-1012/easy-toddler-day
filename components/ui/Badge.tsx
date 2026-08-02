import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

type BadgeVariant = "marigold" | "sky" | "coral" | "sage";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variants: Record<BadgeVariant, string> = {
  marigold: "bg-marigold/15 text-marigold-dark",
  sky: "bg-sky/15 text-sky-dark",
  coral: "bg-coral/15 text-coral",
  sage: "bg-sage/15 text-sage",
};

export function Badge({
  variant = "marigold",
  className,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-sm font-medium",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
