import { cn } from "@/lib/utils/cn";

interface BlobProps {
  className?: string;
  color?: string;
}

export function Blob({ className, color = "var(--color-marigold)" }: BlobProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn("absolute -z-10 blur-2xl opacity-20", className)}
    >
      <path
        fill={color}
        d="M45.3,-58.5C58.3,-49.8,68.2,-35.6,72.6,-19.8C77,-4,75.9,13.5,68.6,27.9C61.3,42.3,47.8,53.7,32.6,61.3C17.4,68.9,0.5,72.8,-16.2,70.5C-32.9,68.2,-49.4,59.7,-60.5,46.4C-71.6,33.1,-77.3,15,-76.1,-2.5C-74.9,-20,-66.8,-36.9,-54.4,-45.9C-42,-54.9,-25.3,-56,-9.1,-58.9C7.1,-61.8,32.3,-67.2,45.3,-58.5Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}
