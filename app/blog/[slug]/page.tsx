import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { BlogCover } from "@/components/ui/BlogCover";
import { BlogContent } from "@/components/ui/BlogContent";
import { JsonLd } from "@/components/shared/JsonLd";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { blogPosts, getBlogPostBySlug } from "@/lib/data/blogPosts";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-10 lg:py-20 xl:px-12">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          url: `${SITE_URL}/blog/${post.slug}`,
          author: { "@type": "Organization", name: post.author },
          publisher: { "@type": "Organization", name: SITE_NAME },
        }}
      />
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 py-3 text-sm font-semibold text-sky-dark transition-colors hover:text-sky"
      >
        <ArrowLeft size={16} aria-hidden="true" />
        Back to Blog
      </Link>

      <BlogCover
        post={post}
        className="mt-6 aspect-[16/9] w-full rounded-3xl"
        sizes="(min-width: 1024px) 768px, 100vw"
        priority
        iconSize={72}
      />

      <span className="mt-8 block text-sm font-semibold uppercase tracking-wide text-sky-dark">
        {post.category}
      </span>
      <h1 className="mt-2 font-display text-3xl font-semibold text-charcoal sm:text-4xl">
        {post.title}
      </h1>
      <p className="mt-3 text-sm text-warm-gray">
        By {post.author} · {post.readTimeMinutes} min read
      </p>

      <div className="mt-8">
        <BlogContent blocks={post.content} />
      </div>

      {post.source && (
        <p className="mt-10 border-t border-warm-gray-light pt-4 text-sm text-warm-gray">
          Source:{" "}
          <a
            href={post.source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-sky-dark underline underline-offset-2 hover:text-coral-dark"
          >
            {post.source.label}
          </a>
        </p>
      )}
    </article>
  );
}
