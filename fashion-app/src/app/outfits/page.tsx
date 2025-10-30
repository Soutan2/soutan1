"use client";

import Image from "next/image";
import { Suspense, useEffect, useMemo, useState } from "react";
import { products } from "@/data/products";
import { useAppState } from "@/context/AppState";
import { useSearchParams } from "next/navigation";

export default function OutfitsPage() {
  return (
    <Suspense fallback={<div className="text-sm text-zinc-600">Loading...</div>}>
      <OutfitsContent />
    </Suspense>
  );
}

function OutfitsContent() {
  const searchParams = useSearchParams();
  const addSlug = searchParams.get("add");
  const { outfits, createOutfit, removeOutfit } = useAppState();

  const [name, setName] = useState("");
  const [selectedSlugs, setSelectedSlugs] = useState<string[]>([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (addSlug && !selectedSlugs.includes(addSlug)) {
      setSelectedSlugs((prev) => [...prev, addSlug]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addSlug]);

  const selectedProducts = useMemo(
    () => products.filter((p) => selectedSlugs.includes(p.slug)),
    [selectedSlugs]
  );

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
    );
  }, [query]);

  function toggleSelect(slug: string) {
    setSelectedSlugs((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );
  }

  function onSave() {
    if (!name.trim() || selectedSlugs.length === 0) return;
    createOutfit(name.trim(), selectedSlugs);
    setName("");
    setSelectedSlugs([]);
  }

  return (
    <div className="space-y-8">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-xl font-semibold">Outfit Builder</h1>
          <p className="text-sm text-zinc-600">Select items and save your look.</p>
        </div>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products to add..."
          className="w-64 rounded-full border px-3 py-2 text-sm"
        />
      </div>

      <div>
        <p className="mb-3 text-xs font-medium uppercase tracking-wider text-zinc-500">
          Selected items
        </p>
        {selectedProducts.length === 0 ? (
          <p className="text-sm text-zinc-600">No items selected yet.</p>
        ) : (
          <div className="flex gap-3 overflow-x-auto">
            {selectedProducts.map((p) => (
              <div key={p.id} className="relative w-32 shrink-0">
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl border bg-zinc-100">
                  <Image src={p.images[0]} alt={p.name} fill className="object-cover" />
                </div>
                <button
                  onClick={() => toggleSelect(p.slug)}
                  className="mt-1 w-full rounded-full border px-3 py-1 text-xs hover:border-black"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="space-y-3">
        <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
          Browse products
        </p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((p) => (
            <div key={p.id} className="overflow-hidden rounded-2xl border">
              <div className="relative aspect-[4/5] bg-zinc-100">
                <Image src={p.images[0]} alt={p.name} fill className="object-cover" />
              </div>
              <div className="flex items-center justify-between p-3">
                <div>
                  <p className="text-sm font-medium">{p.name}</p>
                  <p className="text-xs text-zinc-600">${p.price.toFixed(0)}</p>
                </div>
                <button
                  onClick={() => toggleSelect(p.slug)}
                  className={
                    "rounded-full border px-3 py-1 text-xs transition " +
                    (selectedSlugs.includes(p.slug)
                      ? "border-black bg-black text-white"
                      : "hover:border-black")
                  }
                >
                  {selectedSlugs.includes(p.slug) ? "Added" : "Add"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Outfit name (e.g., Weekend City)"
          className="w-72 rounded-full border px-3 py-2 text-sm"
        />
        <button
          onClick={onSave}
          className="rounded-full bg-black px-5 py-2 text-sm text-white hover:bg-zinc-900"
        >
          Save outfit
        </button>
      </div>

      <div className="space-y-3">
        <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">Saved outfits</p>
        {outfits.length === 0 ? (
          <p className="text-sm text-zinc-600">No saved outfits yet.</p>
        ) : (
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {outfits.map((o) => (
              <div key={o.id} className="flex items-center justify-between rounded-xl border p-3">
                <div>
                  <p className="font-medium">{o.name}</p>
                  <p className="text-xs text-zinc-600">{o.productSlugs.length} items</p>
                </div>
                <button
                  onClick={() => removeOutfit(o.id)}
                  className="rounded-full border px-3 py-1 text-xs hover:border-black"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
