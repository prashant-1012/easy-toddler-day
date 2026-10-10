import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
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
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10 lg:py-20 xl:px-12">
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

      <SectionHeading
        title="Calendars & workbooks"
        subtitle="Printable and hard-copy learning tools built around one theme a week, so planning toddler activities takes minutes, not hours."
        align="left"
      />
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {shopProducts.map((product, index) => (
          <Reveal key={product.id} delay={(index % 4) * 0.06} className="h-full">
            <ProductCard product={product} priority={index < 4} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
