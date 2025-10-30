"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";

const CATEGORIES = [
  { key: "tops", label: "Tops" },
  { key: "bottoms", label: "Bottoms" },
  { key: "shoes", label: "Shoes" },
  { key: "outerwear", label: "Outerwear" },
  { key: "dresses", label: "Dresses" },
  { key: "accessories", label: "Accessories" },
] as const;

export default function Filters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const activeCategory = searchParams.get("category") ?? "";
  const query = searchParams.get("query") ?? "";

  const makeUrl = useMemo(() => {
    return (params: Record<string, string | null>) => {
      const sp = new URLSearchParams(searchParams.toString());
      Object.entries(params).forEach(([k, v]) => {
        if (v === null || v === "") sp.delete(k);
        else sp.set(k, v);
      });
      return `${pathname}?${sp.toString()}`;
    };
  }, [pathname, searchParams]);

  return (
    <div className="flex flex-wrap items-center gap-2">
      {CATEGORIES.map((c) => {
        const active = activeCategory === c.key;
        return (
          <button
            key={c.key}
            onClick={() =>
              router.push(makeUrl({ category: active ? null : c.key }))
            }
            className={
              "rounded-full border px-3 py-1 text-xs transition " +
              (active
                ? "border-black bg-black text-white"
                : "border-zinc-200 bg-white hover:border-black")
            }
          >
            {c.label}
          </button>
        );
      })}
      {query && (
        <span className="ml-auto text-xs text-zinc-500">
          Search: <span className="font-medium text-zinc-800">{query}</span>
        </span>
      )}
    </div>
  );
}
