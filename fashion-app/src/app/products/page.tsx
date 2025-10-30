import Filters from "@/components/Filters";
import { Suspense } from "react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { Category } from "@/types";

function filterByParams(all = products, params: { category?: string | null; query?: string | null }) {
  const { category, query } = params;
  let list = all;
  if (category) list = list.filter((p) => p.category === (category as Category));
  if (query) {
    const q = query.toLowerCase();
    list = list.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
    );
  }
  return list;
}

export default function ProductsPage({ searchParams }: { searchParams: { category?: string; query?: string } }) {
  const filtered = filterByParams(products, searchParams);
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Products</h1>
        <span className="text-sm text-zinc-500">{filtered.length} items</span>
      </div>
      <Suspense fallback={<div className="text-sm text-zinc-600">Loading filters...</div>}>
        <Filters />
      </Suspense>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
