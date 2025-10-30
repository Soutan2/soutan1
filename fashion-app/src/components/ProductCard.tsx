import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block overflow-hidden rounded-2xl border hover:shadow-md"
    >
      <div className="relative aspect-[4/5] w-full bg-zinc-100">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="space-y-1 p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-zinc-900">{product.name}</h3>
          <span className="text-sm font-semibold">${product.price.toFixed(0)}</span>
        </div>
        <p className="text-xs text-zinc-600">{product.brand}</p>
        <div className="flex gap-2 pt-1">
          {product.tags.slice(0, 2).map((t) => (
            <span
              key={t}
              className="rounded-full bg-zinc-100 px-2 py-0.5 text-[10px] text-zinc-600"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
