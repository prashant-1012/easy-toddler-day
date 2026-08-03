"use client";

import Image from "next/image";
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
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-t-2xl bg-warm-gray-light">
        <Image
          src={product.image}
          alt={product.name}
          fill
          priority={priority}
          className="object-cover"
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        />
        <Badge variant="sky" className="absolute left-3 top-3">
          {product.ageRange}
        </Badge>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="font-display text-xl font-semibold text-charcoal">
          {product.name}
        </h3>
        <p className="flex-1 text-sm text-warm-gray">
          {product.shortDescription}
        </p>
        <div className="mt-2 flex items-center justify-between gap-3">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-charcoal">
              {formatPrice(product.price)}
            </span>
            {product.compareAtPrice && (
              <span className="text-sm text-warm-gray line-through">
                {formatPrice(product.compareAtPrice)}
              </span>
            )}
          </div>
          {!product.inStock ? (
            <Button size="sm" disabled>
              Out of Stock
            </Button>
          ) : cartItem ? (
            <QuantityStepper
              quantity={cartItem.quantity}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
            />
          ) : (
            <Button size="sm" onClick={handleAddToCart}>
              Add to Cart
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}
