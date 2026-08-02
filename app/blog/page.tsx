import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BlogPostCard } from "@/components/ui/BlogPostCard";
import { Reveal } from "@/components/ui/Reveal";
import { blogPosts } from "@/lib/data/blogPosts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical, screen-free ideas and stories for toddler parents — from Easy Toddler Day.",
};

export default function BlogPage() {
  const posts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <SectionHeading
        eyebrow="Blog"
        title="Ideas & Stories for Toddler Parents"
        subtitle="Practical, screen-free ideas for the everyday moments between naps and mealtimes."
        align="left"
      />
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <Reveal key={post.id} delay={(index % 3) * 0.06}>
            <BlogPostCard post={post} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
