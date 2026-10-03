import { ShoppingBag } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-stone-200 bg-stone-50">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-800 text-stone-50">
              <ShoppingBag className="h-4 w-4" />
            </span>
            <span className="text-lg font-semibold tracking-tight text-stone-900">
              Maison
            </span>
          </div>
          <p className="text-xs text-stone-500">
            © {new Date().getFullYear()} Maison. Crafted for considered living.
          </p>
        </div>
      </div>
    </footer>
  );
}
