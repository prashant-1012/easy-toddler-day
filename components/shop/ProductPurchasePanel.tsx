"use client";

import { CheckCircle2, Download, MessageCircle } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { QuantityStepper } from "@/components/ui/QuantityStepper";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { useCart } from "@/components/cart/CartProvider";
import { formatPrice } from "@/lib/utils/format-price";
import {
  buildComingSoonInterestMessage,
  buildFreeDownloadMessage,
  buildWhatsAppUrl,
} from "@/lib/utils/whatsapp";
import type { Product } from "@/lib/types/product";

const categoryLabels: Record<Product["category"], string> = {
  calendar: "Weekly Calendar",
  workbook: "Toddler Workbook",
  bundle: "Bundle",
  "free-resource": "Free Printable",
};

export function ProductPurchasePanel({ product }: { product: Product }) {
  const { items, addItem, updateQuantity, removeItem, openDrawer } = useCart();
  const cartItem = items.find((item) => item.productId === product.id);

  function handleAddToCart() {
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      slug: product.slug,
    });
    openDrawer();
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

  const isFree = product.price === 0 || product.category === "free-resource";
  const notifyHref = buildWhatsAppUrl(buildComingSoonInterestMessage(product.name));
  const freeWhatsAppHref = buildWhatsAppUrl(buildFreeDownloadMessage(product.name));

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <span className="text-sm font-semibold uppercase tracking-wide text-sky-dark">
          {categoryLabels[product.category]}
        </span>
        <h1 className="font-display text-3xl font-semibold text-charcoal sm:text-4xl">
          {product.name}
        </h1>
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="sky">{product.ageRange}</Badge>
          {product.comingSoon && <Badge variant="marigold">Coming Soon</Badge>}
          {isFree && <Badge variant="sage">Free Printable</Badge>}
        </div>
        <p className="text-lg text-warm-gray">{product.shortDescription}</p>
      </div>

      <div className="flex flex-wrap items-baseline gap-3">
        <span className="text-3xl font-bold text-charcoal">
          {isFree ? "Free" : formatPrice(product.price)}
        </span>
        {product.compareAtPrice && (
          <span className="text-lg text-warm-gray line-through">
            {formatPrice(product.compareAtPrice)}
          </span>
        )}
        {product.shippingNote && (
          <span className="inline-flex items-center rounded-full bg-sage/15 px-3 py-1 text-xs font-semibold text-sage-dark">
            {product.shippingNote}
          </span>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        {product.comingSoon ? (
          <Button href={notifyHref} target="_blank" rel="noopener noreferrer" size="lg">
            <WhatsAppIcon size={20} />
            Notify Me on WhatsApp
          </Button>
        ) : isFree ? (
          <div className="flex flex-col gap-3 max-w-md">
            {product.downloadUrl ? (
              <Button href={product.downloadUrl} download size="lg" variant="primary" className="w-full justify-center">
                <Download size={18} />
                Download PDF Instantly
              </Button>
            ) : null}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Button
                href={freeWhatsAppHref}
                target="_blank"
                rel="noopener noreferrer"
                size="md"
                variant={product.downloadUrl ? "secondary" : "primary"}
                className="justify-center"
              >
                <WhatsAppIcon size={18} />
                Get on WhatsApp
              </Button>
              {!cartItem ? (
                <Button size="md" variant="secondary" onClick={handleAddToCart} className="justify-center">
                  + Add to Cart (Free)
                </Button>
              ) : (
                <div className="inline-flex items-center justify-center gap-2 rounded-xl bg-sage/15 px-4 py-2.5 text-sm font-semibold text-sage-dark border border-sage/30">
                  <CheckCircle2 size={16} />
                  <span>Added to Cart</span>
                </div>
              )}
            </div>
          </div>
        ) : cartItem ? (
          <QuantityStepper
            quantity={cartItem.quantity}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
          />
        ) : (
          <Button size="lg" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        )}
      </div>

      {product.comingSoon ? (
        <p className="flex items-start gap-2 text-sm text-warm-gray">
          <MessageCircle size={18} className="mt-0.5 shrink-0 text-sky-dark" aria-hidden="true" />
          We&apos;ll message you on WhatsApp the moment this workbook is ready to order.
        </p>
      ) : isFree ? (
        <p className="flex items-start gap-2 text-sm text-warm-gray">
          <MessageCircle size={18} className="mt-0.5 shrink-0 text-sky-dark" aria-hidden="true" />
          Free printable — download directly or receive it via a friendly WhatsApp message.
        </p>
      ) : (
        <p className="flex items-start gap-2 text-sm text-warm-gray">
          <MessageCircle size={18} className="mt-0.5 shrink-0 text-sky-dark" aria-hidden="true" />
          Checkout happens in a quick WhatsApp chat — add to cart, then confirm your order there.
        </p>
      )}

      <ul className="flex flex-col gap-3 border-t border-warm-gray-light pt-6">
        {product.highlights.map((highlight) => (
          <li key={highlight} className="flex items-start gap-3 text-warm-gray">
            <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-sage-dark" aria-hidden="true" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
