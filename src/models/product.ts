export interface ProductColor {
  id: string;
  name: string;
  hex: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  category: string;
  price: number;
  rating: number;
  reviewCount: number;
  isNew: boolean;
  colors: ProductColor[];
  sizes: string[];
  imageUrl: string;
  images: string[];
  features: ProductFeature[];
  details: string;
  shipping: string;
  returns: string;
}

export interface ProductFeature {
  icon: "feather" | "crown" | "outfit";
  label: string;
}

export interface CartItem {
  productId: string;
  color: string;
  size: string;
  quantity: number;
}

export interface StylePost {
  id: string;
  username: string;
  avatarUrl: string;
  timeAgo: string;
  imageUrl: string;
  galleryCount?: number;
  caption: string;
  productSlug: string;
  likes: number;
  comments: number;
}

export interface TrendingLook {
  id: string;
  label: string;
  imageUrl: string;
}

export type NavItem = "home" | "shop" | "style" | "bag" | "profile";

export type ShopCategory = "all" | "sets" | "tops" | "bottoms" | "new-drop";

export type StyleFilter = "featured" | "new" | "club" | "trending";
