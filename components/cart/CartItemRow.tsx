import Image from "next/image";
import { Trash2 } from "lucide-react";
import { QuantityStepper } from "@/components/ui/QuantityStepper";
import { formatPrice } from "@/lib/utils/format-price";
import type { CartItem } from "@/lib/types/cart";

interface CartItemRowProps {
  item: CartItem;
  onIncrease: () => void;
  onDecrease: () => void;
  onRemove: () => void;
}

export function CartItemRow({
  item,
  onIncrease,
  onDecrease,
  onRemove,
}: CartItemRowProps) {
  return (
    <div className="flex gap-4 py-4">
      <div className="relative h-20 w-16 shrink-0 overflow-hidden rounded-lg bg-warm-gray-light">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
          sizes="64px"
        />
      </div>
      <div className="flex flex-1 flex-col gap-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-base font-semibold text-charcoal">
            {item.name}
          </h3>
          <button
            type="button"
            onClick={onRemove}
            aria-label={`Remove ${item.name} from cart`}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-warm-gray transition-colors hover:bg-warm-gray-light hover:text-coral-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky"
          >
            <Trash2 size={16} />
          </button>
        </div>
        <span className="text-sm text-warm-gray">
          {formatPrice(item.price)} each
        </span>
        <div className="mt-1 flex items-center justify-between">
          <QuantityStepper
            quantity={item.quantity}
            onDecrease={onDecrease}
            onIncrease={onIncrease}
          />
          <span className="font-semibold text-charcoal">
            {formatPrice(item.price * item.quantity)}
          </span>
        </div>
      </div>
    </div>
  );
}
