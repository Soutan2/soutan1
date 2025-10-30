export type Category =
  | "tops"
  | "bottoms"
  | "shoes"
  | "accessories"
  | "outerwear"
  | "dresses";

export type Product = {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: Category;
  price: number;
  description: string;
  images: string[];
  colors: string[];
  sizes: string[];
  tags: string[];
  rating: number; // 0-5
  inStock: boolean;
};

export type FilterOptions = {
  categories?: Category[];
  minPrice?: number;
  maxPrice?: number;
  colors?: string[];
  sizes?: string[];
  tags?: string[];
  query?: string;
};
