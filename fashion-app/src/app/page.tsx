import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function Home() {
  const featured = products.slice(0, 8);
  return (
    <div className="space-y-12">
      <section className="relative overflow-hidden rounded-3xl border bg-gradient-to-br from-white to-zinc-50">
        <div className="px-8 py-14 sm:px-12 sm:py-20">
          <p className="text-xs uppercase tracking-widest text-zinc-500">New drop</p>
          <h1 className="mt-2 max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl">
            Build outfits you love.
          </h1>
          <p className="mt-4 max-w-xl text-zinc-600">
            Discover curated essentials and elevate your style with timeless silhouettes and
            premium materials.
          </p>
          <div className="mt-8 flex gap-3">
            <Link
              href="/products"
              className="rounded-full bg-black px-5 py-2 text-sm text-white hover:bg-zinc-900"
            >
              Shop now
            </Link>
            <Link
              href="/outfits"
              className="rounded-full border px-5 py-2 text-sm hover:border-black"
            >
              Outfit builder
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-xl font-semibold">Featured</h2>
          <Link href="/products" className="text-sm text-zinc-600 hover:text-black">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
