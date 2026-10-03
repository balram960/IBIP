import { useMemo, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { FilterSidebar } from "@/components/FilterSidebar";
import { ProductGrid } from "@/components/ProductGrid";
import { CartSidebar } from "@/components/CartSidebar";
import { ProductModal } from "@/components/ProductModal";
import { Footer } from "@/components/Footer";
import { products as allProducts, categories } from "@/data/products";
import { useCart } from "@/hooks/useCart";
import type { Product } from "@/types";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const {
    items,
    addToCart,
    decrement,
    removeItem,
    totalItems,
    subtotal,
  } = useCart();

  const productCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const p of allProducts) {
      counts[p.category] = (counts[p.category] ?? 0) + 1;
    }
    return counts;
  }, []);

  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return allProducts.filter((p) => {
      const matchesCategory =
        activeCategory === "All" || p.category === activeCategory;
      const matchesSearch =
        query === "" || p.name.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="min-h-screen bg-stone-100 text-stone-900">
      <Navbar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        cartCount={totalItems}
        onCartClick={() => setIsCartOpen(true)}
      />

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[220px_minmax(0,1fr)_340px]">
          <FilterSidebar
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            productCounts={productCounts}
          />

          <section>
            <div className="mb-5 flex items-end justify-between">
              <div>
                <h1 className="text-2xl font-semibold tracking-tight text-stone-900">
                  {activeCategory === "All" ? "The Collection" : activeCategory}
                </h1>
                <p className="mt-1 text-sm text-stone-500">
                  {filteredProducts.length}{" "}
                  {filteredProducts.length === 1 ? "piece" : "pieces"}
                  {searchQuery && (
                    <span> matching “{searchQuery}”</span>
                  )}
                </p>
              </div>
            </div>

            <ProductGrid
              products={filteredProducts}
              onAddToCart={addToCart}
              onOpenDetails={setSelectedProduct}
            />
          </section>

          <div className="hidden lg:block">
            <CartSidebar
              items={items}
              subtotal={subtotal}
              onIncrement={(id) => {
                const p = allProducts.find((pr) => pr.id === id);
                if (p) addToCart(p);
              }}
              onDecrement={decrement}
              onRemove={removeItem}
            />
          </div>
        </div>
      </main>

      <Footer />

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={addToCart}
      />

      {/* Mobile cart drawer */}
      {isCartOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-end bg-stone-900/50 backdrop-blur-sm lg:hidden"
          onClick={() => setIsCartOpen(false)}
        >
          <div
            className="h-full w-full max-w-sm p-3"
            onClick={(e) => e.stopPropagation()}
          >
            <CartSidebar
              items={items}
              subtotal={subtotal}
              onIncrement={(id) => {
                const p = allProducts.find((pr) => pr.id === id);
                if (p) addToCart(p);
              }}
              onDecrement={decrement}
              onRemove={removeItem}
              onClose={() => setIsCartOpen(false)}
              isDrawer
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
