# 16 — Cart Architecture

## State management

- `React.createContext` + `useReducer`, defined in
  `components/cart/CartProvider.tsx` (`'use client'`).
- Reducer implements the `CartAction` union from
  [15_DATA_STRUCTURE.md](./15_DATA_STRUCTURE.md):
  `ADD_ITEM` (merges quantity if the product already exists in cart),
  `REMOVE_ITEM`, `UPDATE_QUANTITY` (clamps to `>= 1`; use
  `REMOVE_ITEM` to go to zero), `CLEAR_CART`, `HYDRATE` (used once on
  mount to load persisted state).
- Exposes a `useCart()` hook returning `{ items, addItem, removeItem,
  updateQuantity, clearCart, subtotal, itemCount }`. Components never
  dispatch raw actions directly — they call the hook's named methods.

## Persistence

- `localStorage` key: `etd_cart_v1` (versioned key so a future schema
  change can invalidate old carts safely rather than crash on
  malformed data).
- On mount (`useEffect`, client-only), read from `localStorage`,
  `JSON.parse` inside a `try/catch` (corrupt/old data → fall back to
  empty cart, don't throw), dispatch `HYDRATE`.
- On every state change after hydration, write the current state back
  to `localStorage`. Guard against writing the empty initial state
  over a not-yet-hydrated real cart (use a `hydrated` boolean in
  state/ref to gate the write effect).
- No cross-tab sync (e.g. `storage` event listener) is required for
  this phase — single-tab usage is the expected pattern — but note it
  as a possible future enhancement.

## Where it's wired

- `CartProvider` wraps `{children}` in `app/layout.tsx`, inside
  `<body>`, so `useCart()` is available to `Navbar` (badge count),
  `CartDrawer`, and any `ProductCard`'s "Add to Cart" button
  everywhere in the tree.

## Cart drawer behavior

- Triggered by `CartButton` (navbar icon), controlled via local
  `useState` in `CartProvider` or a sibling UI-state context (`isOpen`,
  `openCart`, `closeCart`) — keep this separate from the cart *data*
  reducer so opening/closing the drawer never risks touching cart
  contents.
- Empty state: friendly illustration/message + "Browse Workbooks" CTA
  linking to `/shop`, not just a blank panel.
- Checkout CTA at the bottom builds the WhatsApp message — see
  [17_WHATSAPP_CHECKOUT.md](./17_WHATSAPP_CHECKOUT.md).

## Explicitly not built

- No stock-decrement-on-purchase (there's no backend to enforce it) —
  `inStock` on `Product` is purely a display flag to disable "Add to
  Cart" in the UI.
