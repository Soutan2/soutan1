"use client";

import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { useAppState } from "@/context/AppState";

export default function FavoritesPage() {
  const { favorites } = useAppState();
  const items = products.filter((p) => favorites.includes(p.slug));
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Favorites</h1>
        <span className="text-sm text-zinc-500">{items.length} saved</span>
      </div>
      {items.length === 0 ? (
        <p className="text-sm text-zinc-600">No favorites yet.</p>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {items.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
