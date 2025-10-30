"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug } from "@/data/products";
import { useAppState } from "@/context/AppState";

export default function ProductDetail({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  const { isFavorite, toggleFavorite } = useAppState();
  if (!product) return notFound();

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="grid grid-cols-3 gap-3">
        <div className="relative col-span-3 aspect-[4/5] overflow-hidden rounded-2xl border bg-zinc-100">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">{product.name}</h1>
          <p className="mt-1 text-zinc-600">{product.brand}</p>
          <p className="mt-4 text-xl font-semibold">${product.price.toFixed(0)}</p>
        </div>

        <p className="text-sm text-zinc-700">{product.description}</p>

        <div className="space-y-4">
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-wider text-zinc-500">Color</p>
            <div className="flex flex-wrap gap-2">
              {product.colors.map((c) => (
                <button key={c} className="rounded-full border px-3 py-1 text-xs hover:border-black">
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-wider text-zinc-500">Size</p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <button key={s} className="rounded-full border px-3 py-1 text-xs hover:border-black">
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex gap-3 pt-2">
          <Link
            href={`/outfits?add=${encodeURIComponent(product.slug)}`}
            className="rounded-full bg-black px-5 py-2 text-sm text-white hover:bg-zinc-900"
          >
            Add to outfit
          </Link>
          <button
            onClick={() => toggleFavorite(product.slug)}
            className={
              "rounded-full border px-5 py-2 text-sm transition " +
              (isFavorite(product.slug)
                ? "border-black bg-black text-white"
                : "hover:border-black")
            }
          >
            {isFavorite(product.slug) ? "Favorited" : "Favorite"}
          </button>
        </div>
      </div>
    </div>
  );
}
