import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/ui/ProductCard";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/shared/JsonLd";
import { SITE_URL } from "@/lib/constants";
import { products } from "@/lib/data/products";

export const metadata: Metadata = {
  title: "Shop Workbooks",
  description:
    "Browse our full collection of screen-free, Montessori-inspired toddler workbooks.",
};

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
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
        eyebrow="Shop"
        title="All Workbooks"
        subtitle="Every workbook is designed for little hands, short attention spans, and big learning moments."
        align="left"
      />
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product, index) => (
          <Reveal key={product.id} delay={(index % 3) * 0.06} className="h-full">
            <ProductCard product={product} priority={index < 3} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
