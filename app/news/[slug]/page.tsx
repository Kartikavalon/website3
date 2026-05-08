"use client";

import { useParams } from "next/navigation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { getPostBySlug, NEWS_POSTS } from "@/data/news";

export default function NewsArticle() {
  const params = useParams();
  const slug = params?.slug as string;

  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <main className="w-full bg-white text-gray-900">
        <Navigation />
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="font-serif text-4xl font-bold mb-4">Article Not Found</h1>
            <p className="font-sans text-lg text-gray-600 mb-8">
              Sorry, the article you're looking for doesn't exist.
            </p>
            <Link
              href="/news"
              className="inline-block px-6 py-3 bg-primary-600 text-white font-semibold rounded hover:bg-primary-500 transition-colors"
            >
              Back to News
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="w-full bg-white text-gray-900">
      <Navigation />

      {/* Hero with image */}
      <section className="relative py-16 px-4 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto max-w-4xl">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm mb-6 font-sans text-gray-600">
            <Link href="/news" className="hover:text-primary-600 transition-colors">
              News
            </Link>
            <span>/</span>
            <span className="text-primary-600 font-semibold">{post.category}</span>
          </div>

          {/* Featured Image */}
          {post.image && (
            <div className="mb-8 rounded-lg overflow-hidden h-96 bg-gray-200">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400'%3E%3Crect fill='%23e5e7eb' width='800' height='400'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='20' fill='%239ca3af' text-anchor='middle' dominant-baseline='middle'%3EImage unavailable%3C/text%3E%3C/svg%3E";
                }}
              />
            </div>
          )}

          {/* Article Header */}
          <div>
            <span className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-semibold mb-4">
              {post.category}
            </span>
            <h1 className="font-serif text-5xl font-bold mb-4 text-gray-900">{post.title}</h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-gray-600 font-sans text-sm border-t border-b border-gray-200 py-4">
              <div>
                <p className="font-semibold text-gray-900">{post.author}</p>
                <p>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
              <div className="flex-1" />
              <div className="text-gray-500">
                Est. read time: {Math.ceil(post.content.split(" ").length / 200)} min
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <article className="prose prose-lg max-w-none font-sans text-gray-700 leading-relaxed">
            {post.content.split("\n\n").map((paragraph, idx) => {
              // Handle headings (text starting with ** or markdown-like)
              if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                const heading = paragraph.replace(/\*\*/g, "");
                return (
                  <h2 key={idx} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    {heading}
                  </h2>
                );
              }

              // Handle bullet points
              if (paragraph.startsWith("•")) {
                return (
                  <ul key={idx} className="space-y-3 mb-6 text-gray-700">
                    {paragraph.split("\n").map((line, lidx) => (
                      <li key={lidx} className="flex gap-3">
                        <span className="text-primary-600 flex-shrink-0">•</span>
                        <span>{line.replace("•", "").trim()}</span>
                      </li>
                    ))}
                  </ul>
                );
              }

              // Regular paragraphs
              return (
                <p key={idx} className="mb-6 text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </article>

          {/* Share and CTA */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="bg-primary-50 p-8 rounded-lg">
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">
                Interested in learning more?
              </h3>
              <p className="text-gray-700 mb-6">
                Our technical team can provide detailed information about our products and capabilities.
              </p>
              <a
                href="/contact"
                className="inline-block px-6 py-3 bg-primary-600 text-white font-semibold rounded hover:bg-primary-500 transition-colors"
              >
                Contact Our Team
              </a>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-12">
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-8">Other Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {NEWS_POSTS.filter((p) => p.slug !== slug)
                .slice(0, 2)
                .map((relatedPost) => (
                  <Link key={relatedPost.id} href={`/news/${relatedPost.slug}`}>
                    <div className="group cursor-pointer">
                      {relatedPost.image && (
                        <div className="mb-4 rounded-lg overflow-hidden h-48 bg-gray-200">
                          <img
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src =
                                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400'%3E%3Crect fill='%23e5e7eb' width='800' height='400'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='16' fill='%239ca3af' text-anchor='middle' dominant-baseline='middle'%3EImage unavailable%3C/text%3E%3C/svg%3E";
                            }}
                          />
                        </div>
                      )}
                      <span className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-semibold mb-2">
                        {relatedPost.category}
                      </span>
                      <h3 className="font-serif text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 text-sm mt-2">{relatedPost.excerpt}</p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
