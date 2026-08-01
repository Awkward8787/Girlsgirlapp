/**
 * Gateway route paths — append to apiConfig.gateway.baseUrl
 * @see src/config/api-config.ts
 */

export const gatewayEndpoints = {
  me: "/v1/me",
  products: "/v1/products",
  productBySlug: (slug: string) => `/v1/products/${slug}`,
  cart: "/v1/cart",
  cartPromo: "/v1/cart/promo",
  checkout: "/v1/checkout",
  orders: "/v1/orders",
  orderById: (id: string) => `/v1/orders/${id}`,
  wishlist: "/v1/wishlist",
  styleFeed: "/v1/style-feed",
} as const;
