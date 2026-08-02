import { ImageResponse } from "next/og";
import { blogPosts, getBlogPostBySlug } from "@/lib/data/blogPosts";
import type { BlogAccentColor } from "@/lib/types/blog";

export const alt = "Easy Toddler Day Blog";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

const accentHex: Record<BlogAccentColor, string> = {
  coral: "#F0475F",
  sky: "#2F9CD8",
  sage: "#2FA854",
};

interface OgImageProps {
  params: Promise<{ slug: string }>;
}

export default async function Image({ params }: OgImageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  const accent = accentHex[post?.accentColor ?? "coral"];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#FFFBF2",
          padding: 80,
        }}
      >
        <div style={{ display: "flex", fontSize: 32, fontWeight: 700 }}>
          <span style={{ color: "#F0475F" }}>easy</span>
          <span style={{ color: "#2F9CD8" }}>toddler</span>
          <span style={{ color: "#2FA854" }}>day</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              width: 80,
              height: 8,
              borderRadius: 4,
              backgroundColor: accent,
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: 54,
              fontWeight: 700,
              color: "#2B2A28",
              lineHeight: 1.25,
            }}
          >
            {post?.title ?? "Easy Toddler Day Blog"}
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 24, color: "#7A756D" }}>
          Easy Toddler Day — Screen-Free Learning Blog
        </div>
      </div>
    ),
    { ...size }
  );
}
