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
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
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
        className={`group relative block aspect-[1103/1426] w-full overflow-hidden rounded-t-2xl bg-warm-gray-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky focus-visible:ring-offset-2 ${
          isBundle ? "border-4 border-marigold" : ""
        }`}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          priority={priority}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        />
        {product.comingSoon && (
          <Badge variant="marigold" className="absolute right-2.5 top-2.5 text-xs shadow-soft">
            Coming Soon
          </Badge>
        )}
      </Link>
      <div className="flex flex-1 flex-col gap-2 p-3.5 sm:p-4">
        {product.cardLabel && (
          <Badge variant="sky" className="w-fit text-[11px] font-semibold px-2 py-0.5">
            {product.cardLabel}
          </Badge>
        )}
        <Link
          href={href}
          className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky"
        >
          <h3 className="font-display text-base font-semibold leading-snug text-charcoal transition-colors hover:text-coral-dark sm:text-lg min-h-[2.5rem] sm:min-h-[2.75rem] flex items-start">
            {product.cardTitle ?? product.name}
          </h3>
        </Link>
        <div className="mt-auto flex items-end justify-between gap-2 border-t border-warm-gray-light/40 pt-2.5">
          <div className="flex flex-col min-w-0">
            <div className="flex items-baseline gap-1.5 flex-wrap">
              <span className="text-base font-bold text-charcoal sm:text-lg">
                {formatPrice(product.price)}
              </span>
              {product.compareAtPrice && (
                <span className="text-xs text-warm-gray line-through">
                  {formatPrice(product.compareAtPrice)}
                </span>
              )}
            </div>
            {product.shippingNote && (
              <span className="text-[11px] font-medium text-sage-dark truncate">
                {product.shippingNote}
              </span>
            )}
          </div>
          <div className="shrink-0">
            {product.comingSoon ? (
              <Button size="sm" variant="ghost" disabled className="h-8 px-2.5 text-xs">
                Coming Soon
              </Button>
            ) : !product.inStock ? (
              <Button size="sm" disabled className="h-8 px-2.5 text-xs">
                Out of Stock
              </Button>
            ) : cartItem ? (
              <QuantityStepper
                quantity={cartItem.quantity}
                onIncrease={handleIncrease}
                onDecrease={handleDecrease}
                className="h-8 gap-1.5 px-1.5 py-0 text-xs"
              />
            ) : (
              <Button
                size="sm"
                onClick={handleAddToCart}
                className="h-8 px-3 text-xs font-semibold whitespace-nowrap"
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
