import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils/cn";

interface QuantityStepperProps {
  quantity: number;
  onDecrease: () => void;
  onIncrease: () => void;
  className?: string;
}

export function QuantityStepper({
  quantity,
  onDecrease,
  onIncrease,
  className,
}: QuantityStepperProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-3 rounded-full border border-warm-gray-light bg-cloud px-2 py-1",
        className
      )}
    >
      <button
        type="button"
        onClick={onDecrease}
        aria-label="Decrease quantity"
        className="flex h-11 w-11 items-center justify-center rounded-full text-charcoal transition-colors hover:bg-warm-gray-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky"
      >
        <Minus size={16} />
      </button>
      <span className="min-w-[1.5rem] text-center text-base font-semibold text-charcoal">
        {quantity}
      </span>
      <button
        type="button"
        onClick={onIncrease}
        aria-label="Increase quantity"
        className="flex h-11 w-11 items-center justify-center rounded-full text-charcoal transition-colors hover:bg-warm-gray-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky"
      >
        <Plus size={16} />
      </button>
    </div>
  );
}
