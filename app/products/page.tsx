"use client";

import { useState, useMemo } from "react";
import SectionHeader from "@/components/SectionHeader";
import ProductCard from "@/components/ProductCard";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ALL_PRODUCTS, PRODUCT_CATEGORIES } from "@/data/index";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = useMemo(() => {
    return ALL_PRODUCTS.filter((product) => {
      const matchesCategory = !selectedCategory || product.category === selectedCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.symbol.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  const categories = Object.entries(PRODUCT_CATEGORIES).map(([key, value]) => ({
    key: key as keyof typeof PRODUCT_CATEGORIES,
    label: value,
  }));

  return (
    <main className="w-full bg-white text-gray-900">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Our <span className="text-primary-600">Products</span>
          </h1>
          <p className="font-sans text-lg text-gray-600">
            Premium rare earth elements, strategic metals, and advanced materials
          </p>
        </div>
      </section>

      {/* Filtering and Search */}
      <section className="py-12 px-4 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto max-w-6xl">
          {/* Search */}
          <div className="mb-8">
            <input
              type="text"
              placeholder="Search by name or symbol (e.g., Neodymium, Nd)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded text-gray-900 font-sans placeholder-gray-500 focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600"
            />
          </div>

          {/* Category Filter */}
          <div>
            <p className="font-sans text-sm text-gray-700 mb-4 uppercase tracking-wide">
              Filter by Category
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded font-sans text-sm font-semibold transition-all ${
                  selectedCategory === null
                    ? "bg-primary-600 text-white"
                    : "border border-gray-300 text-gray-700 hover:border-primary-600"  
                }`}
              >
                All Products
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`px-4 py-2 rounded font-sans text-sm font-semibold transition-all ${
                    selectedCategory === cat.key
                      ? "bg-primary-600 text-white"
                      : "border border-gray-300 text-gray-700 hover:border-primary-600"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <p className="font-sans text-sm text-gray-600 mt-6">
            Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""}
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-4 bg-white border-b border-gray-200">
        <div className="container mx-auto max-w-6xl">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  symbol={product.symbol}
                  category={PRODUCT_CATEGORIES[product.category as keyof typeof PRODUCT_CATEGORIES]}
                  purityGr={product.purityGrades[0]}
                  shortDescription={product.shortDescription}
                  href={`/products/${product.category}/${product.id}`}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="font-sans text-lg text-gray-600">
                No products match your search criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-industrial">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-6xl md:text-7xl font-bold mb-6 text-primary-400 drop-shadow-[0_0_20px_rgba(20,184,166,0.5)]">
            Need a Specific Material?
          </h2>
          <p className="font-sans text-lg text-gray-700 mb-4">
            Our technical team can help you find the perfect solution for your requirements.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-primary-600 text-white font-sans font-semibold rounded hover:bg-primary-500 transition-all duration-300 hover:shadow-glow-teal"
            >
              Request Technical Datasheet
            </a>
            <a
              href="/contact"
              className="px-8 py-4 border border-primary-600 text-primary-600 font-sans font-semibold rounded hover:bg-primary-600/10 transition-all duration-300"
            >
              Submit RFQ
            </a>
          </div>
        </div>
      </section>

      {/* Custom Products Section */}
      <section className="py-20 px-4 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-white p-8 rounded-lg border border-gray-300">
            <h2 className="font-serif text-3xl font-bold mb-4 text-gray-900">
              Custom Materials Available
            </h2>
            <p className="font-sans text-lg text-gray-700 mb-6">
              Don't see what you're looking for? Kaytherix Industries specializes in custom material solutions tailored to your specific requirements:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-primary-600 font-bold text-xl">✓</span>
                <div>
                  <p className="font-sans font-semibold text-gray-900">Custom Alloy Formulations</p>
                  <p className="font-sans text-sm text-gray-600">Engineered compositions for specific performance requirements</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 font-bold text-xl">✓</span>
                <div>
                  <p className="font-sans font-semibold text-gray-900">Non-Standard Purity Grades</p>
                  <p className="font-sans text-sm text-gray-600">Materials with purity specifications beyond standard offerings</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 font-bold text-xl">✓</span>
                <div>
                  <p className="font-sans font-semibold text-gray-900">Specialized Form Factors</p>
                  <p className="font-sans text-sm text-gray-600">Custom shapes, sizes, and delivery formats</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 font-bold text-xl">✓</span>
                <div>
                  <p className="font-sans font-semibold text-gray-900">Volume Scaling</p>
                  <p className="font-sans text-sm text-gray-600">From laboratory quantities to industrial production volumes</p>
                </div>
              </li>
            </ul>
            <p className="font-sans text-gray-700 mb-8">
              Our technical team works closely with customers to develop materials that meet exact specifications and performance standards. Contact us today to discuss your custom requirements.
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-3 bg-primary-600 text-white font-sans font-semibold rounded hover:bg-primary-500 transition-all duration-300"
            >
              Contact for Custom Solutions
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

