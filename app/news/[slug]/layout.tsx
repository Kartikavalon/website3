import type { Metadata } from "next";
import { getPostBySlug } from "@/data/news";

interface NewsLayoutProps {
  children: React.ReactNode;
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Article Not Found | Kaytherix Industries",
    };
  }

  return {
    title: `${post.title} | Kaytherix Industries News`,
    description: post.excerpt,
    alternates: {
      canonical: `https://kaytherix.com/news/${post.slug}`,
    },
  };
}

export default function NewsArticleLayout({ children }: NewsLayoutProps) {
  return children;
}
