"use client";

import { ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import { useCart } from "@/components/cart/CartProvider";

export function CartButton() {
  const { itemCount, toggleDrawer } = useCart();

  return (
    <button
      type="button"
      onClick={toggleDrawer}
      aria-label={`Open cart, ${itemCount} item${itemCount === 1 ? "" : "s"}`}
      className="relative flex h-11 w-11 items-center justify-center rounded-full text-charcoal transition-colors hover:bg-warm-gray-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky"
    >
      <ShoppingBag size={22} />
      {itemCount > 0 && (
        <motion.span
          key={itemCount}
          initial={{ scale: 0.6 }}
          animate={{ scale: [1.3, 1] }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-coral px-1 text-xs font-bold text-white"
        >
          {itemCount}
        </motion.span>
      )}
    </button>
  );
}
