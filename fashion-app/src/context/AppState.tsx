"use client";

import { createContext, useContext, useMemo, useState, useEffect } from "react";
import type { Product } from "@/types";
import { safeLocalStorageGet, safeLocalStorageSet } from "@/lib/storage";

const FAVORITES_KEY = "fitforge:favorites";
const OUTFITS_KEY = "fitforge:outfits";

type Outfit = {
  id: string;
  name: string;
  productSlugs: string[];
  createdAt: number;
};

type AppState = {
  favorites: string[]; // product slugs
  toggleFavorite: (slug: string) => void;
  isFavorite: (slug: string) => boolean;

  outfits: Outfit[];
  createOutfit: (name: string, productSlugs: string[]) => void;
  removeOutfit: (id: string) => void;
};

const Ctx = createContext<AppState | null>(null);

export function AppStateProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [outfits, setOutfits] = useState<Outfit[]>([]);

  useEffect(() => {
    setFavorites(safeLocalStorageGet<string[]>(FAVORITES_KEY, []));
    setOutfits(safeLocalStorageGet<Outfit[]>(OUTFITS_KEY, []));
  }, []);

  useEffect(() => {
    safeLocalStorageSet(FAVORITES_KEY, favorites);
  }, [favorites]);

  useEffect(() => {
    safeLocalStorageSet(OUTFITS_KEY, outfits);
  }, [outfits]);

  const value = useMemo<AppState>(() => {
    return {
      favorites,
      toggleFavorite: (slug: string) => {
        setFavorites((prev) =>
          prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
        );
      },
      isFavorite: (slug: string) => favorites.includes(slug),

      outfits,
      createOutfit: (name: string, productSlugs: string[]) => {
        const id = Math.random().toString(36).slice(2);
        setOutfits((prev) => [
          { id, name, productSlugs: Array.from(new Set(productSlugs)), createdAt: Date.now() },
          ...prev,
        ]);
      },
      removeOutfit: (id: string) => {
        setOutfits((prev) => prev.filter((o) => o.id !== id));
      },
    };
  }, [favorites, outfits]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useAppState() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useAppState must be used within AppStateProvider");
  return ctx;
}
