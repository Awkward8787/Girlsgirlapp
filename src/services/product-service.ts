import type {
  CartItem,
  Product,
  ShopCategory,
  StyleFilter,
  StylePost,
  TrendingLook,
} from "@/models/product";

const PRODUCT_IMAGES = {
  pinkShine: "/products/pink-shine-girl-transparent.png",
  pinkShineReference: "/products/pink-shine-reference.png",
  navyBadGirl: "/products/navy-bad-girl-transparent.png",
  navyBadGirlReference: "/products/navy-bad-girl-reference.png",
  blackSociety: "/products/girl-society-transparent.png",
  blackSocietyReference: "/products/girl-society-reference.png",
  creamThings: "/products/cream-things-transparent.png",
  creamThingsReference: "/products/cream-things-reference.png",
  heroModel:
    "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&w=800&h=1000&fit=crop",
  community:
    "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&w=600&h=800&fit=crop",
};

export const products: Product[] = [
  {
    id: "prod-001",
    slug: "pink-shine-girl-set",
    name: "Pink Shine Girl Set",
    subtitle: "Outfit 6 · #WTTB drop",
    category: "sets",
    price: 98,
    rating: 5,
    reviewCount: 126,
    isNew: true,
    colors: [
      { id: "light-pink", name: "Light Pink", hex: "#f4c2d4" },
      { id: "hot-pink", name: "Hot Pink", hex: "#e91e8c" },
      { id: "white", name: "White", hex: "#fafafa" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    imageUrl: PRODUCT_IMAGES.pinkShine,
    images: [PRODUCT_IMAGES.pinkShine, PRODUCT_IMAGES.pinkShineReference],
    features: [
      { icon: "feather", label: "Soft stretch fabric" },
      { icon: "crown", label: "SG ribbon crest" },
      { icon: "outfit", label: "Zip jacket + leggings" },
    ],
    details:
      "Baby-pink zip jacket and leggings with SG oval logo, Shine Girl chest hit, #WTTB thigh graphic, and Girls Girl crown back mark. Members Only Girls Girl Club. Every order includes club card, stickers, and thank-you note.",
    shipping: "Free standard shipping on orders over $75. Express available at checkout.",
    returns: "30-day easy returns. Items must be unworn with tags attached.",
  },
  {
    id: "prod-002",
    slug: "navy-bad-girl-set",
    name: "Navy Bad Girl Set",
    subtitle: "Members Only · 2-piece set",
    category: "sets",
    price: 138,
    rating: 5,
    reviewCount: 89,
    isNew: true,
    colors: [
      { id: "navy", name: "Navy", hex: "#1b2a4a" },
      { id: "yellow", name: "Yellow", hex: "#f5d300" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    imageUrl: PRODUCT_IMAGES.navyBadGirl,
    images: [PRODUCT_IMAGES.navyBadGirl, PRODUCT_IMAGES.navyBadGirlReference],
    features: [
      { icon: "feather", label: "Soft stretch fabric" },
      { icon: "crown", label: "Girls Girl neck tape" },
      { icon: "outfit", label: "Zip jacket + leggings" },
    ],
    details:
      "Deep navy zip jacket and leggings with yellow BAD GIRL graffiti graphics, Bigg Britt back crest, and #WTTB branding. Every order includes Girls Girl Club card, stickers, and thank-you note.",
    shipping: "Free standard shipping on orders over $75.",
    returns: "30-day easy returns.",
  },
  {
    id: "prod-003",
    slug: "black-girl-society-set",
    name: "Black Girl Society Set",
    subtitle: "Outfit 4 · Members Only",
    category: "sets",
    price: 88,
    rating: 4,
    reviewCount: 64,
    isNew: false,
    colors: [
      { id: "black", name: "Black", hex: "#000000" },
      { id: "white", name: "White", hex: "#ffffff" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    imageUrl: PRODUCT_IMAGES.blackSociety,
    images: [PRODUCT_IMAGES.blackSociety, PRODUCT_IMAGES.blackSocietyReference],
    features: [
      { icon: "feather", label: "Soft stretch fabric" },
      { icon: "crown", label: "GIRLSSOCIETY neck tape" },
      { icon: "outfit", label: "Raglan tee + dolphin shorts" },
    ],
    details:
      "Black raglan crop with white sleeves, Girl Society glitter chest graphic, Members Only barcode, and GS oval back hit. Dolphin shorts with GS hip logo and full back script. Every order includes Girls Girl Club card, stickers, and thank-you note.",
    shipping: "Free standard shipping on orders over $75.",
    returns: "30-day easy returns.",
  },
  {
    id: "prod-004",
    slug: "cream-things-tee",
    name: "Cream Things Tee",
    subtitle: "Babe Club crop top",
    category: "tops",
    price: 38,
    rating: 5,
    reviewCount: 42,
    isNew: false,
    colors: [
      { id: "cream", name: "Cream", hex: "#f5f0e8" },
      { id: "black", name: "Black", hex: "#1a1a1a" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    imageUrl: PRODUCT_IMAGES.creamThings,
    images: [PRODUCT_IMAGES.creamThings, PRODUCT_IMAGES.creamThingsReference],
    features: [
      { icon: "feather", label: "Soft cotton blend" },
      { icon: "crown", label: "thngs. banana graphic" },
      { icon: "outfit", label: "Black ringer trim" },
    ],
    details:
      "Cream ringer crop with thngs. banana graphic, Babe Club chest hit, and Girls Girl hem branding. Members-only energy.",
    shipping: "Free standard shipping on orders over $75.",
    returns: "30-day easy returns.",
  },
  {
    id: "prod-005",
    slug: "cream-things-set",
    name: "Cream Things Set",
    subtitle: "Girls Girl × Babe Club · 2-piece",
    category: "sets",
    price: 78,
    rating: 5,
    reviewCount: 31,
    isNew: true,
    colors: [
      { id: "cream", name: "Cream", hex: "#f5f0e8" },
      { id: "black", name: "Black", hex: "#1a1a1a" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    imageUrl: PRODUCT_IMAGES.creamThings,
    images: [PRODUCT_IMAGES.creamThings, PRODUCT_IMAGES.creamThingsReference],
    features: [
      { icon: "feather", label: "Soft cotton blend" },
      { icon: "crown", label: "Babe Club members print" },
      { icon: "outfit", label: "LA shorts + matching top" },
    ],
    details:
      "Full cream set with black ringer trim: thngs. crop, Babe Club back graphic, LA leg hit, and Girls Girl script on shorts. Support women. Stay loyal. Keep shining. #WTTB",
    shipping: "Free standard shipping on orders over $75.",
    returns: "30-day easy returns.",
  },
  {
    id: "prod-006",
    slug: "pink-shine-vibes-set",
    name: "Pink Shine Vibes Set",
    subtitle: "Limited · Members Only",
    category: "new-drop",
    price: 118,
    rating: 5,
    reviewCount: 55,
    isNew: true,
    colors: [
      { id: "light-pink", name: "Light Pink", hex: "#f4c2d4" },
      { id: "hot-pink", name: "Hot Pink", hex: "#e91e8c" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    imageUrl: PRODUCT_IMAGES.pinkShine,
    images: [PRODUCT_IMAGES.pinkShine, PRODUCT_IMAGES.pinkShineReference],
    features: [
      { icon: "feather", label: "Soft stretch fabric" },
      { icon: "crown", label: "Club member exclusive" },
      { icon: "outfit", label: "Full shine set" },
    ],
    details:
      "Limited Pink Shine drop with Shine Together Win Together energy. Same signature set — exclusive early access for Girls Girl Club.",
    shipping: "Free standard shipping on orders over $75.",
    returns: "30-day easy returns.",
  },
];

export const trendingLooks: TrendingLook[] = [
  { id: "tl-1", label: "Pink Shine Vibes", imageUrl: PRODUCT_IMAGES.pinkShine },
  { id: "tl-2", label: "Bad Girl Energy", imageUrl: PRODUCT_IMAGES.navyBadGirl },
  { id: "tl-3", label: "Cream Classics", imageUrl: PRODUCT_IMAGES.creamThings },
  { id: "tl-4", label: "Girls Society Club", imageUrl: PRODUCT_IMAGES.blackSociety },
  { id: "tl-5", label: "Movement Wear", imageUrl: PRODUCT_IMAGES.heroModel },
];

export const stylePosts: StylePost[] = [
  {
    id: "post-1",
    username: "Jada.B",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop",
    timeAgo: "2h ago",
    imageUrl: PRODUCT_IMAGES.pinkShine,
    galleryCount: 3,
    caption: "Shine all day 💕 #WTTB",
    productSlug: "pink-shine-girl-set",
    likes: 214,
    comments: 18,
  },
  {
    id: "post-2",
    username: "BrittBratt",
    avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop",
    timeAgo: "4h ago",
    imageUrl: PRODUCT_IMAGES.navyBadGirl,
    galleryCount: 2,
    caption: "Bad Girl energy only 🔥 #GirlsGirl",
    productSlug: "navy-bad-girl-set",
    likes: 389,
    comments: 42,
  },
  {
    id: "post-3",
    username: "MiaStyles",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop",
    timeAgo: "6h ago",
    imageUrl: PRODUCT_IMAGES.blackSociety,
    caption: "Club ready ✨ #WTTB",
    productSlug: "black-girl-society-set",
    likes: 156,
    comments: 12,
  },
  {
    id: "post-4",
    username: "LexiG",
    avatarUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&h=80&fit=crop",
    timeAgo: "8h ago",
    imageUrl: PRODUCT_IMAGES.creamThings,
    galleryCount: 2,
    caption: "Cream season 🍌 #GirlsGirlClub",
    productSlug: "cream-things-set",
    likes: 98,
    comments: 7,
  },
];

export const defaultCartItems: CartItem[] = [
  { productId: "prod-001", color: "Light Pink", size: "M", quantity: 1 },
  { productId: "prod-003", color: "Black", size: "S", quantity: 1 },
  { productId: "prod-004", color: "Cream", size: "M", quantity: 1 },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getFeaturedProducts(): Product[] {
  return products.slice(0, 4);
}

export function getProductsByCategory(category: ShopCategory): Product[] {
  if (category === "all") return products;
  if (category === "new-drop") return products.filter((p) => p.isNew);
  return products.filter((p) => p.category === category);
}

export function getStylePostsByFilter(filter: StyleFilter): StylePost[] {
  switch (filter) {
    case "featured":
      return stylePosts;
    case "new":
      return [...stylePosts].reverse();
    case "club":
      return stylePosts.filter((p) => p.caption.includes("#GirlsGirl"));
    case "trending":
      return [...stylePosts].sort((a, b) => b.likes - a.likes);
    default: {
      const _exhaustive: never = filter;
      return _exhaustive;
    }
  }
}

export function getCartTotal(items: CartItem[]): {
  subtotal: number;
  shipping: number;
  total: number;
} {
  const subtotal = items.reduce((sum, item) => {
    const product = getProductById(item.productId);
    return sum + (product?.price ?? 0) * item.quantity;
  }, 0);
  const shipping = subtotal >= 75 ? 0 : 7.95;
  return { subtotal, shipping, total: subtotal + shipping };
}

export const heroSlides = [
  {
    id: "hero-1",
    eyebrow: "Welcome to",
    title: "Girls Girl Club",
    body: "More than fashion. It's a movement. Support women. Stay loyal. Keep shining.",
    cta: "Shop Now",
    imageUrl: PRODUCT_IMAGES.heroModel,
  },
  {
    id: "hero-2",
    eyebrow: "New Drop",
    title: "Pink Shine Collection",
    body: "Limited edition sets designed to make you shine. #WTTB",
    cta: "Shop Collection",
    imageUrl: PRODUCT_IMAGES.pinkShine,
  },
  {
    id: "hero-3",
    eyebrow: "Join the Movement",
    title: "Girls Girl Society",
    body: "Tag @biggbritt and use #WTTB to be featured in our community.",
    cta: "See Community",
    imageUrl: PRODUCT_IMAGES.community,
  },
];
