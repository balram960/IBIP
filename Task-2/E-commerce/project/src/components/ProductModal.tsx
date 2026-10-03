import { useEffect } from "react";
import { Star, X } from "lucide-react";
import type { Product } from "@/types";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export function ProductModal({
  product,
  onClose,
  onAddToCart,
}: ProductModalProps) {
  useEffect(() => {
    if (!product) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-stone-900/60 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={product.name}
    >
      <div
        className="relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-t-2xl bg-white shadow-2xl sm:rounded-2xl md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-stone-50/90 text-stone-600 backdrop-blur transition hover:bg-white hover:text-stone-900"
          aria-label="Close details"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="aspect-square w-full shrink-0 overflow-hidden bg-stone-100 md:h-auto md:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col overflow-y-auto p-6 sm:p-8">
          <span className="text-xs font-medium uppercase tracking-wider text-emerald-700">
            {product.category}
          </span>
          <h2 className="mt-2 text-2xl font-semibold leading-tight text-stone-900">
            {product.name}
          </h2>

          <div className="mt-3 flex items-center gap-2">
            <div className="flex">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.round(product.rating)
                      ? "fill-amber-400 text-amber-400"
                      : "fill-stone-200 text-stone-200"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-stone-500">
              {product.rating} · {product.reviews} reviews
            </span>
          </div>

          <p className="mt-5 text-sm leading-relaxed text-stone-600">
            {product.description}
          </p>

          <div className="mt-auto pt-8">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-semibold text-stone-900">
                ${product.price}
              </span>
              <span className="text-sm text-stone-400">USD</span>
            </div>
            <button
              onClick={() => {
                onAddToCart(product);
                onClose();
              }}
              className="mt-4 w-full rounded-full bg-emerald-800 py-3.5 text-sm font-semibold text-stone-50 transition hover:bg-emerald-900 active:scale-[0.98]"
            >
              Add to Cart
            </button>
            <p className="mt-3 text-center text-xs text-stone-400">
              Free returns within 30 days · Carbon-neutral shipping
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
