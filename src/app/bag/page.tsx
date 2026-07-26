import { CartClient } from "@/components/cart-client";
import { defaultCartItems, getProductById } from "@/services/product-service";

export const metadata = {
  title: "My Bag | Girls Girl by Bigg Britt",
  description: "Review your cart and checkout.",
};

export default function BagPage() {
  const items = defaultCartItems
    .map((item) => {
      const product = getProductById(item.productId);
      if (!product) return null;
      return { ...item, product };
    })
    .filter((item): item is NonNullable<typeof item> => item !== null);

  return (
    <div className="py-2 md:py-6">
      <CartClient items={items} />
    </div>
  );
}
