"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const q = query.trim();
    router.push(q ? `/products?query=${encodeURIComponent(q)}` : "/products");
  }

  return (
    <header className="sticky top-0 z-30 w-full border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-xl font-semibold tracking-tight">
          FitForge
        </Link>
        <nav className="hidden gap-6 md:flex">
          <Link href="/products" className="text-sm text-zinc-700 hover:text-black">
            Products
          </Link>
          <Link href="/favorites" className="text-sm text-zinc-700 hover:text-black">
            Favorites
          </Link>
          <Link href="/outfits" className="text-sm text-zinc-700 hover:text-black">
            Outfits
          </Link>
        </nav>
        <form onSubmit={onSubmit} className="ml-6 flex flex-1 justify-end">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search items, brands, tags..."
            className="w-56 rounded-full border px-4 py-2 text-sm outline-none ring-0 transition focus:w-72 focus:border-black md:w-64 md:focus:w-80"
          />
        </form>
      </div>
    </header>
  );
}
