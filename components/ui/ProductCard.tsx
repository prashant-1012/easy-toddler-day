"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { QuantityStepper } from "@/components/ui/QuantityStepper";
import { useCart } from "@/components/cart/CartProvider";
import { formatPrice } from "@/lib/utils/format-price";
import type { Product } from "@/lib/types/product";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
  compact?: boolean;
}

export function ProductCard({
  product,
  priority = false,
  compact = false,
}: ProductCardProps) {
  const { items, addItem, updateQuantity, removeItem } = useCart();
  const cartItem = items.find((item) => item.productId === product.id);
  const href = `/shop/${product.slug}`;
  // Only the bundle gets a highlighted image frame.
  const isBundle = product.category === "bundle";

  function handleAddToCart() {
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      slug: product.slug,
    });
  }

  function handleIncrease() {
    if (cartItem) updateQuantity(product.id, cartItem.quantity + 1);
  }

  function handleDecrease() {
    if (!cartItem) return;
    if (cartItem.quantity <= 1) {
      removeItem(product.id);
    } else {
      updateQuantity(product.id, cartItem.quantity - 1);
    }
  }

  return (
    <Card className="flex h-full flex-col overflow-hidden">
      <Link
        href={href}
        className={`group relative block w-full overflow-hidden bg-warm-gray-light/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky focus-visible:ring-offset-2 ${
          compact
            ? "aspect-[1103/1426] max-h-[175px] sm:max-h-[190px] md:max-h-[205px] rounded-t-xl"
            : "aspect-[1103/1426] rounded-t-2xl"
        } ${isBundle ? "border-4 border-marigold" : ""}`}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          priority={priority}
          className={`${
            compact ? "object-contain p-1" : "object-cover"
          } transition-transform duration-300 group-hover:scale-105`}
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        />
        {product.comingSoon && (
          <Badge
            variant="marigold"
            className={`absolute right-2 top-2 shadow-soft ${
              compact ? "text-[10px] px-1.5 py-0.5" : "text-xs right-2.5 top-2.5"
            }`}
          >
            Coming Soon
          </Badge>
        )}
      </Link>
      <div
        className={`flex flex-1 flex-col ${
          compact ? "gap-1.5 p-2.5 sm:p-3" : "gap-2 p-3.5 sm:p-4"
        }`}
      >
        {product.cardLabel && (
          <Badge
            variant="sky"
            className={`w-fit font-semibold ${
              compact ? "text-[10px] px-1.5 py-0.2" : "text-[11px] px-2 py-0.5"
            }`}
          >
            {product.cardLabel}
          </Badge>
        )}
        <Link
          href={href}
          className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky"
        >
          <h3
            className={`font-display font-semibold leading-snug text-charcoal transition-colors hover:text-coral-dark flex items-start ${
              compact
                ? "text-xs sm:text-sm line-clamp-2 min-h-[1.85rem] sm:min-h-[2.2rem]"
                : "text-base sm:text-lg min-h-[2.5rem] sm:min-h-[2.75rem]"
            }`}
          >
            {product.cardTitle ?? product.name}
          </h3>
        </Link>
        <div
          className={`mt-auto flex items-end justify-between gap-1.5 border-t border-warm-gray-light/40 ${
            compact ? "pt-2" : "pt-2.5"
          }`}
        >
          <div className="flex flex-col min-w-0">
            <div className="flex items-baseline gap-1.5 flex-wrap">
              <span
                className={`font-bold text-charcoal ${
                  compact ? "text-sm sm:text-base" : "text-base sm:text-lg"
                }`}
              >
                {formatPrice(product.price)}
              </span>
              {product.compareAtPrice && (
                <span
                  className={`text-warm-gray line-through ${
                    compact ? "text-[10px] sm:text-[11px]" : "text-xs"
                  }`}
                >
                  {formatPrice(product.compareAtPrice)}
                </span>
              )}
            </div>
            {product.shippingNote && (
              <span
                className={`font-medium text-sage-dark truncate ${
                  compact ? "text-[10px]" : "text-[11px]"
                }`}
              >
                {product.shippingNote}
              </span>
            )}
          </div>
          <div className="shrink-0">
            {product.comingSoon ? (
              <Button
                size="sm"
                variant="ghost"
                disabled
                className={compact ? "h-7 px-2 text-[11px]" : "h-8 px-2.5 text-xs"}
              >
                Coming Soon
              </Button>
            ) : !product.inStock ? (
              <Button
                size="sm"
                disabled
                className={compact ? "h-7 px-2 text-[11px]" : "h-8 px-2.5 text-xs"}
              >
                Out of Stock
              </Button>
            ) : cartItem ? (
              <QuantityStepper
                quantity={cartItem.quantity}
                onIncrease={handleIncrease}
                onDecrease={handleDecrease}
                className={
                  compact
                    ? "h-7 gap-1 px-1 py-0 text-xs"
                    : "h-8 gap-1.5 px-1.5 py-0 text-xs"
                }
              />
            ) : (
              <Button
                size="sm"
                onClick={handleAddToCart}
                className={`font-semibold whitespace-nowrap ${
                  compact ? "h-7 px-2.5 text-xs" : "h-8 px-3 text-xs"
                }`}
              >
                Add to Cart
              </Button>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}
