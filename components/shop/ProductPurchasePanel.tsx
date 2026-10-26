"use client";

import { useState } from "react";
import { Check, CheckCircle2, Download, MessageCircle, Share2 } from "lucide-react";
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
  const [isCopied, setIsCopied] = useState(false);

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

  async function handleShare() {
    const shareData = {
      title: product.name,
      text: product.shortDescription,
      url: typeof window !== "undefined" ? window.location.href : "",
    };

    if (
      typeof navigator !== "undefined" &&
      navigator.share &&
      navigator.canShare?.(shareData)
    ) {
      try {
        await navigator.share(shareData);
        return;
      } catch (err) {
        if ((err as Error)?.name === "AbortError") return;
      }
    }

    if (typeof navigator !== "undefined" && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      } catch {
        // clipboard unavailable
      }
    }
  }

  const isFree = product.price === 0 || product.category === "free-resource";
  const notifyHref = buildWhatsAppUrl(buildComingSoonInterestMessage(product.name));
  const freeWhatsAppHref = buildWhatsAppUrl(buildFreeDownloadMessage(product.name));

  return (
    <div className="flex flex-col gap-3.5 sm:gap-4">
      <div className="flex flex-col gap-1.5">
        <span className="text-xs font-semibold uppercase tracking-wide text-sky-dark">
          {categoryLabels[product.category]}
        </span>
        <h1 className="font-display text-xl font-semibold text-charcoal sm:text-2xl">
          {product.name}
        </h1>
        <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
          <Badge variant="sky" className="text-xs px-2 py-0.5">{product.ageRange}</Badge>
          {product.comingSoon && <Badge variant="marigold" className="text-xs px-2 py-0.5">Coming Soon</Badge>}
          {isFree && <Badge variant="sage" className="text-xs px-2 py-0.5">Free Printable</Badge>}
        </div>
        <p className="text-xs sm:text-sm text-warm-gray pt-0.5 leading-relaxed">{product.shortDescription}</p>
      </div>

      <div className="flex flex-wrap items-baseline gap-2">
        <span className="text-xl sm:text-2xl font-bold text-charcoal">
          {isFree ? "Free" : formatPrice(product.price)}
        </span>
        {product.compareAtPrice && (
          <span className="text-xs sm:text-sm text-warm-gray line-through">
            {formatPrice(product.compareAtPrice)}
          </span>
        )}
        {product.shippingNote && (
          <span className="inline-flex items-center rounded-full bg-sage/15 px-2 py-0.5 text-[11px] font-semibold text-sage-dark">
            {product.shippingNote}
          </span>
        )}
      </div>

      {/* Action Buttons: Add to Cart + Share */}
      <div className="flex flex-wrap items-center gap-2.5">
        {product.comingSoon ? (
          <Button href={notifyHref} target="_blank" rel="noopener noreferrer" size="md">
            <WhatsAppIcon size={18} />
            Notify Me on WhatsApp
          </Button>
        ) : isFree ? (
          <div className="flex flex-col gap-2 w-full max-w-md">
            {product.downloadUrl ? (
              <Button href={product.downloadUrl} download size="md" variant="primary" className="w-full justify-center">
                <Download size={16} />
                Download PDF Instantly
              </Button>
            ) : null}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <Button
                href={freeWhatsAppHref}
                target="_blank"
                rel="noopener noreferrer"
                size="md"
                variant={product.downloadUrl ? "secondary" : "primary"}
                className="justify-center text-xs sm:text-sm"
              >
                <WhatsAppIcon size={16} />
                Get on WhatsApp
              </Button>
              {!cartItem ? (
                <Button size="md" variant="secondary" onClick={handleAddToCart} className="justify-center text-xs sm:text-sm">
                  + Add to Cart (Free)
                </Button>
              ) : (
                <div className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-sage/15 px-3 py-2 text-xs font-semibold text-sage-dark border border-sage/30">
                  <CheckCircle2 size={15} />
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
            className="h-10 text-sm"
          />
        ) : (
          <Button size="md" onClick={handleAddToCart} className="h-10 px-5 text-sm">
            Add to Cart
          </Button>
        )}

        {/* Share Button with slow fill liquid sweep effect */}
        <Button
          type="button"
          variant="secondary"
          size="md"
          onClick={handleShare}
          aria-label="Share this workbook"
          className="h-10 px-4 text-sm whitespace-nowrap"
        >
          {isCopied ? (
            <>
              <Check size={16} className="shrink-0" />
              <span>Link Copied!</span>
            </>
          ) : (
            <>
              <Share2 size={16} className="shrink-0" />
              <span>Share</span>
            </>
          )}
        </Button>
      </div>

      {product.comingSoon ? (
        <p className="flex items-start gap-1.5 text-xs text-warm-gray">
          <MessageCircle size={15} className="mt-0.5 shrink-0 text-sky-dark" aria-hidden="true" />
          We&apos;ll message you on WhatsApp the moment this workbook is ready to order.
        </p>
      ) : isFree ? (
        <p className="flex items-start gap-1.5 text-xs text-warm-gray">
          <MessageCircle size={15} className="mt-0.5 shrink-0 text-sky-dark" aria-hidden="true" />
          Free printable — download directly or receive it via a friendly WhatsApp message.
        </p>
      ) : (
        <p className="flex items-start gap-1.5 text-xs text-warm-gray">
          <MessageCircle size={15} className="mt-0.5 shrink-0 text-sky-dark" aria-hidden="true" />
          Checkout happens in a quick WhatsApp chat — add to cart, then confirm your order there.
        </p>
      )}

      <ul className="flex flex-col gap-2 border-t border-warm-gray-light/60 pt-3.5">
        {product.highlights.map((highlight) => (
          <li key={highlight} className="flex items-start gap-2 text-xs sm:text-sm text-warm-gray">
            <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-sage-dark" aria-hidden="true" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
