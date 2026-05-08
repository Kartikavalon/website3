"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import { NEWS_POSTS, getAllCategories } from "@/data/news";

export default function News() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const categories = getAllCategories();

  const filteredPosts = useMemo(() => {
    return NEWS_POSTS.filter((post) => {
      const matchesCategory = !selectedCategory || post.category === selectedCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  // Featured post
  const featuredPost = NEWS_POSTS.find((post) => post.featured);

  return (
    <main className="w-full bg-white text-gray-900">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-white to-gray-50 border-b border-gray-200">
        <div className="container mx-auto max-w-6xl">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4 text-gray-900">News & Insights</h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl">
            Stay informed about industry trends, market developments, and Kaytherix innovations
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg p-8 md:p-12 text-white">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1">
                  <span className="inline-block bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    Featured Story
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-primary-100 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-primary-200">
                      <p className="font-semibold">{featuredPost.author}</p>
                      <p>{new Date(featuredPost.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    </div>
                    <Link
                      href={`/news/${featuredPost.slug}`}
                      className="bg-white text-primary-600 px-6 py-2 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Filters */}
      <section className="py-8 px-4 bg-white border-b border-gray-200">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            {/* Search */}
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search news and articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-primary-600"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                  !selectedCategory
                    ? "bg-primary-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                    selectedCategory === category
                      ? "bg-primary-600 text-white"
                      : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Link key={post.id} href={`/news/${post.slug}`}>
                  <div className="bg-white rounded-lg overflow-hidden hover:shadow-lg hover:shadow-primary-600/20 transition-all h-full flex flex-col border border-gray-200">
                    {/* Image */}
                    <div className="bg-gray-200 h-48 flex items-center justify-center overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 250%22%3E%3Crect fill=%22%23e5e7eb%22 width=%22400%22 height=%22250%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-size=%2220%22 fill=%22%23999%22%3EImage unavailable%3C/text%3E%3C/svg%3E';
                        }}
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <span className="text-primary-600 text-sm font-semibold mb-2">{post.category}</span>
                      <h3 className="font-serif text-xl font-bold mb-3 text-gray-900">{post.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 flex-1">{post.excerpt}</p>
                      <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                        <div className="text-xs text-gray-500">
                          {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                        </div>
                        <span className="text-primary-600 text-sm font-semibold">Read →</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No articles found matching your criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 bg-white border-t border-gray-200">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold mb-4 text-gray-900">Stay Updated</h2>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter for the latest news, market trends, and industry insights
          </p>
          <form className="flex gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-primary-600"
              required
            />
            <button
              type="submit"
              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors hover:shadow-lg"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
