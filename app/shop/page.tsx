import type { Metadata } from "next";
import { ProductCard } from "@/components/ui/ProductCard";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/shared/JsonLd";
import { SITE_URL } from "@/lib/constants";
import { products } from "@/lib/data/products";
import type { ProductCategory } from "@/lib/types/product";

export const metadata: Metadata = {
  title: "Shop Products",
  description:
    "Browse our full collection of screen-free, Montessori-inspired toddler workbooks.",
};

// Display order on the shop page: bundle first, then the single products.
const CATEGORY_ORDER: ProductCategory[] = [
  "bundle",
  "calendar",
  "workbook",
  "free-resource",
];
const shopProducts = [...products].sort(
  (a, b) => CATEGORY_ORDER.indexOf(a.category) - CATEGORY_ORDER.indexOf(b.category)
);

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-3 pb-8 sm:px-6 sm:pt-4 sm:pb-10 lg:px-8 lg:pt-4 lg:pb-12">
      {products.map((product) => (
        <JsonLd
          key={product.id}
          data={{
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            description: product.shortDescription,
            image: `${SITE_URL}${product.image}`,
            offers: {
              "@type": "Offer",
              price: product.price,
              priceCurrency: "INR",
              availability: product.inStock
                ? "https://schema.org/InStock"
                : "https://schema.org/OutOfStock",
            },
          }}
        />
      ))}

      <div className="mb-4 sm:mb-5">
        <h1 className="font-display text-xl font-bold tracking-tight text-charcoal sm:text-2xl">
          Calendars &amp; Workbooks
        </h1>
        <p className="mt-1 max-w-2xl text-xs text-warm-gray sm:text-sm">
          Printable and hard-copy learning tools built around one theme a week, so planning toddler activities takes minutes, not hours.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-3.5">
        {shopProducts.map((product, index) => (
          <Reveal key={product.id} delay={(index % 4) * 0.05} className="h-full">
            <ProductCard product={product} priority={index < 4} compact />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
