import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import type { CartItem } from "@/types";

interface CartSidebarProps {
  items: CartItem[];
  subtotal: number;
  onIncrement: (productId: number) => void;
  onDecrement: (productId: number) => void;
  onRemove: (productId: number) => void;
  onClose?: () => void;
  isDrawer?: boolean;
}

const SHIPPING_THRESHOLD = 150;
const FLAT_SHIPPING = 9;

export function CartSidebar({
  items,
  subtotal,
  onIncrement,
  onDecrement,
  onRemove,
  onClose,
  isDrawer = false,
}: CartSidebarProps) {
  const shipping =
    subtotal === 0 || subtotal >= SHIPPING_THRESHOLD ? 0 : FLAT_SHIPPING;
  const total = subtotal + shipping;
  const remaining = Math.max(0, SHIPPING_THRESHOLD - subtotal);

  return (
    <aside
      className={`flex max-h-full flex-col rounded-2xl border border-stone-200 bg-white ${
        isDrawer ? "h-full" : "lg:sticky lg:top-20 lg:h-fit lg:max-h-[calc(100vh-6rem)]"
      }`}
    >
      <div className="flex items-center justify-between border-b border-stone-100 p-5">
        <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-stone-700">
          <ShoppingBag className="h-4 w-4" />
          Your Cart
        </h2>
        {isDrawer && onClose && (
          <button
            onClick={onClose}
            className="rounded-full p-1.5 text-stone-400 transition hover:bg-stone-100 hover:text-stone-700 lg:hidden"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      {items.length === 0 ? (
        <div className="flex flex-1 flex-col items-center justify-center gap-3 p-10 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-stone-100">
            <ShoppingBag className="h-6 w-6 text-stone-400" />
          </div>
          <p className="text-sm font-semibold text-stone-700">
            Your cart is empty
          </p>
          <p className="text-xs text-stone-500">
            Add pieces from the collection to begin.
          </p>
        </div>
      ) : (
        <>
          <div className="flex-1 space-y-4 overflow-y-auto p-5">
            {items.map((item) => (
              <div key={item.product.id} className="flex gap-3">
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="h-16 w-16 shrink-0 rounded-lg object-cover"
                />
                <div className="flex flex-1 flex-col">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm font-medium leading-tight text-stone-800">
                      {item.product.name}
                    </p>
                    <button
                      onClick={() => onRemove(item.product.id)}
                      className="shrink-0 rounded p-1 text-stone-300 transition hover:text-red-500"
                      aria-label={`Remove ${item.product.name}`}
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <p className="mt-0.5 text-xs text-stone-400">
                    ${item.product.price} each
                  </p>
                  <div className="mt-auto flex items-center justify-between pt-2">
                    <div className="flex items-center rounded-full border border-stone-200">
                      <button
                        onClick={() => onDecrement(item.product.id)}
                        className="flex h-7 w-7 items-center justify-center rounded-full text-stone-500 transition hover:text-emerald-700 disabled:opacity-40"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-3.5 w-3.5" />
                      </button>
                      <span className="w-7 text-center text-xs font-semibold text-stone-700">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onIncrement(item.product.id)}
                        className="flex h-7 w-7 items-center justify-center rounded-full text-stone-500 transition hover:text-emerald-700"
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    <span className="text-sm font-semibold text-stone-900">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-stone-100 p-5">
            {remaining > 0 ? (
              <p className="mb-3 rounded-lg bg-emerald-50 px-3 py-2 text-xs text-emerald-800">
                Add ${remaining.toFixed(2)} more for free shipping.
              </p>
            ) : (
              <p className="mb-3 rounded-lg bg-emerald-50 px-3 py-2 text-xs font-medium text-emerald-800">
                You've unlocked free shipping.
              </p>
            )}

            <div className="space-y-1.5 text-sm">
              <div className="flex justify-between text-stone-500">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-stone-500">
                <span>Shipping</span>
                <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between border-t border-stone-100 pt-2 text-base font-semibold text-stone-900">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <button className="mt-4 w-full rounded-full bg-emerald-800 py-3 text-sm font-semibold text-stone-50 transition hover:bg-emerald-900 active:scale-[0.98]">
              Checkout
            </button>
          </div>
        </>
      )}
    </aside>
  );
}
