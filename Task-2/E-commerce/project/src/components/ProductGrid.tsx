import type { Product } from "@/types";
import { ProductCard } from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onOpenDetails: (product: Product) => void;
}

export function ProductGrid({
  products,
  onAddToCart,
  onOpenDetails,
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-stone-300 bg-white/60 py-20 text-center">
        <p className="text-base font-semibold text-stone-700">
          No products found
        </p>
        <p className="mt-1 text-sm text-stone-500">
          Try a different search term or category.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
          onOpenDetails={onOpenDetails}
        />
      ))}
    </div>
  );
}
