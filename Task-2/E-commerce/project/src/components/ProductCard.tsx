import { Star } from "lucide-react";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onOpenDetails: (product: Product) => void;
}

export function ProductCard({
  product,
  onAddToCart,
  onOpenDetails,
}: ProductCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white transition hover:shadow-lg hover:shadow-stone-200/60">
      <button
        onClick={() => onOpenDetails(product)}
        className="relative block aspect-square overflow-hidden bg-stone-100"
        aria-label={`View ${product.name}`}
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-stone-50/90 px-3 py-1 text-xs font-medium text-stone-700 backdrop-blur">
          {product.category}
        </span>
      </button>

      <div className="flex flex-1 flex-col p-4">
        <button
          onClick={() => onOpenDetails(product)}
          className="text-left text-sm font-semibold leading-snug text-stone-900 transition hover:text-emerald-800"
        >
          {product.name}
        </button>

        <div className="mt-1.5 flex items-center gap-1.5">
          <div className="flex">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star
                key={i}
                className={`h-3.5 w-3.5 ${
                  i < Math.round(product.rating)
                    ? "fill-amber-400 text-amber-400"
                    : "fill-stone-200 text-stone-200"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-stone-400">({product.reviews})</span>
        </div>

        <div className="mt-auto flex items-center justify-between pt-4">
          <span className="text-lg font-semibold text-stone-900">
            ${product.price}
          </span>
          <button
            onClick={() => onAddToCart(product)}
            className="rounded-full bg-stone-900 px-4 py-2 text-xs font-semibold text-stone-50 transition hover:bg-emerald-800 active:scale-95"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}
