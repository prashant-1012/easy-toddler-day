"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useCart } from "@/components/cart/CartProvider";
import { CartItemRow } from "@/components/cart/CartItemRow";
import { Button } from "@/components/ui/Button";
import { formatPrice } from "@/lib/utils/format-price";
import { buildOrderMessage, openWhatsApp } from "@/lib/utils/whatsapp";
import { submitOrderLead } from "@/lib/utils/leads";

const inputClasses =
  "w-full rounded-xl border border-warm-gray-light bg-cloud px-4 py-3 text-base text-charcoal placeholder:text-warm-gray/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky";

export function CartDrawer() {
  const { isDrawerOpen, closeDrawer, items, subtotal, updateQuantity, removeItem } =
    useCart();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

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

  function handleCheckout(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fullPhone = `+91 ${phone}`;
    // Open WhatsApp synchronously, first — this is the real checkout path
    // and must never be delayed by (or fail because of) the lead log below.
    openWhatsApp(buildOrderMessage(items, { name, phone: fullPhone }));
    submitOrderLead({ name, phone: fullPhone, items, subtotal });
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
            <div className="flex items-center justify-between border-b border-warm-gray-light px-6 py-1">
              <h2 className="font-display text-xl font-semibold text-charcoal">
                Your Cart
              </h2>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeDrawer}
                aria-label="Close cart"
                className="flex h-11 w-11 items-center justify-center rounded-full text-charcoal transition-colors hover:bg-warm-gray-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky"
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

                <form
                  onSubmit={handleCheckout}
                  className="border-t border-warm-gray-light px-6 py-4"
                >
                  <div className="mb-3 flex items-center justify-between text-lg font-semibold text-charcoal">
                    <span>Subtotal</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>

                  <div className="mb-3 flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <label
                        htmlFor="cart-checkout-name"
                        className="w-14 shrink-0 text-sm font-semibold text-charcoal"
                      >
                        Name
                      </label>
                      <input
                        id="cart-checkout-name"
                        name="name"
                        type="text"
                        required
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        placeholder="Your name"
                        className={inputClasses}
                      />
                    </div>
                    <div className="flex items-center gap-3">
                      <label
                        htmlFor="cart-checkout-phone"
                        className="w-14 shrink-0 text-sm font-semibold text-charcoal"
                      >
                        Phone
                      </label>
                      <div className="flex w-full items-center gap-2 rounded-xl border border-warm-gray-light bg-cloud px-4 py-3 focus-within:ring-2 focus-within:ring-sky">
                        <span className="shrink-0 select-none text-base text-warm-gray">
                          +91
                        </span>
                        <span
                          className="shrink-0 text-warm-gray-light"
                          aria-hidden="true"
                        >
                          |
                        </span>
                        <input
                          id="cart-checkout-phone"
                          name="phone"
                          type="tel"
                          inputMode="numeric"
                          required
                          pattern="[0-9]{10}"
                          title="Enter a 10-digit phone number"
                          maxLength={10}
                          value={phone}
                          onChange={(event) =>
                            setPhone(event.target.value.replace(/\D/g, "").slice(0, 10))
                          }
                          placeholder="98765 43210"
                          className="w-full min-w-0 bg-transparent text-base text-charcoal placeholder:text-warm-gray/60 focus-visible:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Checkout via WhatsApp
                  </Button>
                  <p className="mt-2 text-center text-xs text-warm-gray">
                    We&apos;ll confirm your order details over WhatsApp.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
