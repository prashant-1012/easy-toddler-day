import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/ui/ProductCard";
import { Reveal } from "@/components/ui/Reveal";
import { ProductGallery } from "@/components/shop/ProductGallery";
import { ProductPurchasePanel } from "@/components/shop/ProductPurchasePanel";
import { JsonLd } from "@/components/shared/JsonLd";
import { SITE_URL } from "@/lib/constants";
import { getProductBySlug, getRelatedProducts, products } from "@/lib/data/products";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: {
      images: [{ url: product.image }],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const gallery = [product.image, ...(product.gallery ?? [])];
  const relatedProducts = getRelatedProducts(product.slug);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10 lg:py-20 xl:px-12">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: product.name,
          description: product.shortDescription,
          image: `${SITE_URL}${product.image}`,
          category: product.category,
          offers: {
            "@type": "Offer",
            price: product.price,
            priceCurrency: "INR",
            availability: product.comingSoon
              ? "https://schema.org/PreOrder"
              : product.inStock
                ? "https://schema.org/InStock"
                : "https://schema.org/OutOfStock",
          },
        }}
      />

      <Link
        href="/shop"
        className="inline-flex items-center gap-2 py-3 text-sm font-semibold text-sky-dark transition-colors hover:text-sky"
      >
        <ArrowLeft size={16} aria-hidden="true" />
        Back to Shop
      </Link>

      <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        <ProductGallery images={gallery} productName={product.name} />
        <ProductPurchasePanel product={product} />
      </div>

      <div className="mt-16 max-w-3xl lg:mt-24">
        <SectionHeading
          eyebrow="Details"
          title="About This Workbook"
          subtitle={product.description}
          align="left"
        />
      </div>

      {relatedProducts.length > 0 && (
        <section className="mt-16 lg:mt-24">
          <SectionHeading
            eyebrow="Keep Exploring"
            title="You Might Also Like"
            align="left"
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProducts.map((related, index) => (
              <Reveal key={related.id} delay={(index % 3) * 0.06} className="h-full">
                <ProductCard product={related} />
              </Reveal>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
