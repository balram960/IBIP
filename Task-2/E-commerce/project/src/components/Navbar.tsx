import { Search, ShoppingBag } from "lucide-react";

interface NavbarProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  cartCount: number;
  onCartClick: () => void;
}

export function Navbar({
  searchQuery,
  onSearchChange,
  cartCount,
  onCartClick,
}: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-stone-200 bg-stone-50/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex shrink-0 items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-800 text-stone-50">
            <ShoppingBag className="h-5 w-5" />
          </span>
          <span className="hidden text-xl font-semibold tracking-tight text-stone-900 sm:block">
            Maison
          </span>
        </a>

        <div className="relative flex-1 max-w-xl mx-auto">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search the collection…"
            aria-label="Search products"
            className="w-full rounded-full border border-stone-200 bg-white py-2 pl-10 pr-4 text-sm text-stone-800 placeholder:text-stone-400 transition focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20"
          />
        </div>

        <button
          onClick={onCartClick}
          className="relative flex shrink-0 items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-stone-700 transition hover:border-emerald-600 hover:text-emerald-800 lg:hidden"
          aria-label="Open cart"
        >
          <ShoppingBag className="h-5 w-5" />
          {cartCount > 0 && (
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-emerald-800 px-1 text-xs font-semibold text-stone-50">
              {cartCount}
            </span>
          )}
        </button>

        <button
          onClick={onCartClick}
          className="relative hidden shrink-0 items-center gap-2 rounded-full bg-emerald-800 px-5 py-2.5 text-sm font-semibold text-stone-50 transition hover:bg-emerald-900 lg:flex"
        >
          <ShoppingBag className="h-4 w-4" />
          Cart
          {cartCount > 0 && (
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-stone-50 px-1 text-xs font-bold text-emerald-800">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
