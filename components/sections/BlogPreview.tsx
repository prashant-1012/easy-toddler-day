import { SectionHeading } from "@/components/ui/SectionHeading";
import { BlogPostCard } from "@/components/ui/BlogPostCard";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { blogPosts } from "@/lib/data/blogPosts";

export function BlogPreview() {
  const posts = [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <SectionHeading
        eyebrow="From the Blog"
        title="Tips, Ideas & Stories for Toddler Parents"
        subtitle="Practical, screen-free ideas for the everyday moments between naps and mealtimes."
      />
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <Reveal key={post.id} delay={index * 0.08}>
            <BlogPostCard post={post} />
          </Reveal>
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <Button href="/blog" variant="secondary" size="lg">
          View All Posts
        </Button>
      </div>
    </section>
  );
}
