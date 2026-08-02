"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useCart } from "@/components/cart/CartProvider";
import { CartItemRow } from "@/components/cart/CartItemRow";
import { Button } from "@/components/ui/Button";
import { formatPrice } from "@/lib/utils/format-price";
import { buildOrderMessage, openWhatsApp } from "@/lib/utils/whatsapp";

export function CartDrawer() {
  const { isDrawerOpen, closeDrawer, items, subtotal, updateQuantity, removeItem } =
    useCart();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isDrawerOpen) return;

    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeDrawer();
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isDrawerOpen, closeDrawer]);

  function handleCheckout() {
    openWhatsApp(buildOrderMessage(items));
  }

  return (
    <AnimatePresence>
      {isDrawerOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-charcoal/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeDrawer}
            aria-hidden="true"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Shopping cart"
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-cream shadow-lift"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="flex items-center justify-between border-b border-warm-gray-light px-6 py-5">
              <h2 className="font-display text-xl font-semibold text-charcoal">
                Your Cart
              </h2>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeDrawer}
                aria-label="Close cart"
                className="flex h-9 w-9 items-center justify-center rounded-full text-charcoal transition-colors hover:bg-warm-gray-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky"
              >
                <X size={20} />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
                <p className="text-warm-gray">Your cart is empty.</p>
                <Button href="/shop" onClick={closeDrawer}>
                  Browse Workbooks
                </Button>
              </div>
            ) : (
              <>
                <div className="flex-1 divide-y divide-warm-gray-light overflow-y-auto px-6">
                  {items.map((item) => (
                    <CartItemRow
                      key={item.productId}
                      item={item}
                      onIncrease={() =>
                        updateQuantity(item.productId, item.quantity + 1)
                      }
                      onDecrease={() =>
                        updateQuantity(item.productId, item.quantity - 1)
                      }
                      onRemove={() => removeItem(item.productId)}
                    />
                  ))}
                </div>

                <div className="border-t border-warm-gray-light px-6 py-5">
                  <div className="mb-4 flex items-center justify-between text-lg font-semibold text-charcoal">
                    <span>Subtotal</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  <Button onClick={handleCheckout} size="lg" className="w-full">
                    Checkout via WhatsApp
                  </Button>
                  <p className="mt-3 text-center text-xs text-warm-gray">
                    We&apos;ll confirm your order details over WhatsApp.
                  </p>
                </div>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
