import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "p-top-001",
    slug: "oversized-white-tee",
    name: "Oversized White Tee",
    brand: "Basic Co.",
    category: "tops",
    price: 29.0,
    description:
      "A premium oversized tee crafted from heavyweight cotton for structure and comfort.",
    images: [
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1200&auto=format&fit=crop",
    ],
    colors: ["white", "black", "gray"],
    sizes: ["XS", "S", "M", "L", "XL"],
    tags: ["minimal", "streetwear", "essentials"],
    rating: 4.5,
    inStock: true,
  },
  {
    id: "p-top-002",
    slug: "linen-shirt-sand",
    name: "Linen Shirt — Sand",
    brand: "Seabreeze",
    category: "tops",
    price: 59.0,
    description:
      "Breathable linen shirt with a relaxed fit, perfect for warm days.",
    images: [
      "https://images.unsplash.com/photo-1520975922284-9d9e3f0b0f43?q=80&w=1200&auto=format&fit=crop",
    ],
    colors: ["sand", "olive", "navy"],
    sizes: ["S", "M", "L", "XL"],
    tags: ["resort", "summer"],
    rating: 4.3,
    inStock: true,
  },
  {
    id: "p-btm-001",
    slug: "tapered-jeans-indigo",
    name: "Tapered Jeans — Indigo",
    brand: "Denim Works",
    category: "bottoms",
    price: 89.0,
    description:
      "Classic tapered denim with a slight stretch for all-day comfort.",
    images: [
      "https://images.unsplash.com/photo-1516822003754-cca485356ecb?q=80&w=1200&auto=format&fit=crop",
    ],
    colors: ["indigo", "black"],
    sizes: ["28", "30", "32", "34", "36"],
    tags: ["casual", "classic"],
    rating: 4.2,
    inStock: true,
  },
  {
    id: "p-shoe-001",
    slug: "retro-sneaker",
    name: "Retro Sneaker",
    brand: "StepUp",
    category: "shoes",
    price: 119.0,
    description: "Vintage-inspired sneakers with modern cushioning.",
    images: [
      "https://images.unsplash.com/photo-1520256862855-398228c41684?q=80&w=1200&auto=format&fit=crop",
    ],
    colors: ["white", "navy", "red"],
    sizes: ["7", "8", "9", "10", "11", "12"],
    tags: ["street", "retro"],
    rating: 4.7,
    inStock: true,
  },
  {
    id: "p-acc-001",
    slug: "leather-belt-chocolate",
    name: "Leather Belt — Chocolate",
    brand: "Crafted",
    category: "accessories",
    price: 49.0,
    description: "Full-grain leather belt with brushed metal buckle.",
    images: [
      "https://images.unsplash.com/photo-1575230225447-3a3650b6bd1d?q=80&w=1200&auto=format&fit=crop",
    ],
    colors: ["brown", "black"],
    sizes: ["S", "M", "L"],
    tags: ["leather", "minimal"],
    rating: 4.6,
    inStock: true,
  },
  {
    id: "p-out-001",
    slug: "wool-coat-charcoal",
    name: "Wool Coat — Charcoal",
    brand: "Northline",
    category: "outerwear",
    price: 199.0,
    description: "Tailored wool coat to elevate any winter look.",
    images: [
      "https://images.unsplash.com/photo-1542367597-8849eb6501f5?q=80&w=1200&auto=format&fit=crop",
    ],
    colors: ["charcoal", "camel"],
    sizes: ["S", "M", "L", "XL"],
    tags: ["smart", "winter"],
    rating: 4.8,
    inStock: true,
  },
  {
    id: "p-dr-001",
    slug: "slip-dress-black",
    name: "Slip Dress — Black",
    brand: "Silhouette",
    category: "dresses",
    price: 129.0,
    description: "Satin slip dress with bias cut and adjustable straps.",
    images: [
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop",
    ],
    colors: ["black", "champagne"],
    sizes: ["XS", "S", "M", "L"],
    tags: ["evening", "minimal"],
    rating: 4.4,
    inStock: true,
  },
  {
    id: "p-acc-002",
    slug: "tote-bag-canvas",
    name: "Canvas Tote Bag",
    brand: "CarryAll",
    category: "accessories",
    price: 35.0,
    description: "Durable canvas tote with inner pocket.",
    images: [
      "https://images.unsplash.com/photo-1553531888-a2bdb2c2b83f?q=80&w=1200&auto=format&fit=crop",
    ],
    colors: ["natural", "black"],
    sizes: ["OS"],
    tags: ["casual", "eco"],
    rating: 4.1,
    inStock: true,
  },
  {
    id: "p-btm-002",
    slug: "pleated-trousers-stone",
    name: "Pleated Trousers — Stone",
    brand: "Form & Fold",
    category: "bottoms",
    price: 99.0,
    description: "Relaxed pleated trousers with drape.",
    images: [
      "https://images.unsplash.com/photo-1593034085378-9b9c8be5a83f?q=80&w=1200&auto=format&fit=crop",
    ],
    colors: ["stone", "navy"],
    sizes: ["28", "30", "32", "34", "36"],
    tags: ["smart-casual"],
    rating: 4.2,
    inStock: true,
  },
  {
    id: "p-top-003",
    slug: "cashmere-sweater-oatmeal",
    name: "Cashmere Sweater — Oatmeal",
    brand: "Lux Knit",
    category: "tops",
    price: 179.0,
    description: "Pure cashmere crewneck with timeless silhouette.",
    images: [
      "https://images.unsplash.com/photo-1618355776464-8666794bd412?q=80&w=1200&auto=format&fit=crop",
    ],
    colors: ["oatmeal", "navy", "heather gray"],
    sizes: ["XS", "S", "M", "L", "XL"],
    tags: ["premium", "cozy"],
    rating: 4.9,
    inStock: true,
  },
  {
    id: "p-shoe-002",
    slug: "chelsea-boots-suede",
    name: "Chelsea Boots — Suede",
    brand: "Cobbler",
    category: "shoes",
    price: 159.0,
    description: "Handmade suede Chelsea boots with rubber sole.",
    images: [
      "https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=1200&auto=format&fit=crop",
    ],
    colors: ["tan", "black"],
    sizes: ["7", "8", "9", "10", "11"],
    tags: ["smart", "casual"],
    rating: 4.5,
    inStock: true,
  },
  {
    id: "p-out-002",
    slug: "puffer-jacket-olive",
    name: "Puffer Jacket — Olive",
    brand: "Alpine",
    category: "outerwear",
    price: 149.0,
    description: "Lightweight puffer with recycled fill.",
    images: [
      "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?q=80&w=1200&auto=format&fit=crop",
    ],
    colors: ["olive", "black"],
    sizes: ["S", "M", "L", "XL"],
    tags: ["outdoor", "winter"],
    rating: 4.3,
    inStock: true,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q))
  );
}
