"use client";

import { useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { useCart } from "@/components/cart/CartProvider";
import { formatPrice } from "@/lib/utils/format-price";
import type { Product } from "@/lib/types/product";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
  const { addItem } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  function handleAddToCart() {
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      slug: product.slug,
    });
    setJustAdded(true);
    window.setTimeout(() => setJustAdded(false), 1500);
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
          <Button
            size="sm"
            disabled={!product.inStock}
            onClick={handleAddToCart}
          >
            {!product.inStock ? (
              "Out of Stock"
            ) : justAdded ? (
              <>
                <Check size={16} aria-hidden="true" /> Added
              </>
            ) : (
              "Add to Cart"
            )}
          </Button>
        </div>
      </div>
    </Card>
  );
}
