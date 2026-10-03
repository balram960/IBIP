import { Check } from "lucide-react";

interface FilterSidebarProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  productCounts: Record<string, number>;
}

export function FilterSidebar({
  categories,
  activeCategory,
  onCategoryChange,
  productCounts,
}: FilterSidebarProps) {
  const allOptions = ["All", ...categories];

  return (
    <aside className="lg:sticky lg:top-20 lg:h-fit">
      <div className="rounded-2xl border border-stone-200 bg-white p-5">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
          Categories
        </h2>
        <ul className="mt-4 space-y-1">
          {allOptions.map((option) => {
            const isActive = activeCategory === option;
            const count =
              option === "All"
                ? Object.values(productCounts).reduce((a, b) => a + b, 0)
                : productCounts[option] ?? 0;
            return (
              <li key={option}>
                <button
                  onClick={() => onCategoryChange(option)}
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition ${
                    isActive
                      ? "bg-emerald-50 font-semibold text-emerald-900"
                      : "text-stone-600 hover:bg-stone-50"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {isActive && (
                      <Check className="h-4 w-4 text-emerald-700" />
                    )}
                    {option}
                  </span>
                  <span
                    className={`text-xs ${
                      isActive ? "text-emerald-700" : "text-stone-400"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mt-5 hidden rounded-2xl border border-stone-200 bg-gradient-to-br from-emerald-50 to-stone-50 p-5 lg:block">
        <p className="text-sm font-semibold text-stone-800">
          Free shipping over $150
        </p>
        <p className="mt-1 text-xs leading-relaxed text-stone-500">
          Every order is hand-wrapped in recycled paper and shipped carbon
          neutral.
        </p>
      </div>
    </aside>
  );
}
