import { notFound } from "next/navigation";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import InquiryForm from "@/components/InquiryForm";
import { ALL_PRODUCTS, PRODUCT_CATEGORIES } from "@/data/index";

interface ProductPageProps {
  params: {
    category: string;
    product: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = ALL_PRODUCTS.find((p) => p.id === params.product);

  if (!product) {
    notFound();
  }

  const categoryLabel =
    PRODUCT_CATEGORIES[product.category as keyof typeof PRODUCT_CATEGORIES];

  return (
    <main className="w-full bg-white text-gray-900">
      <Navigation />

      {/* Breadcrumb */}
      <div className="pt-32 px-4 bg-white border-b border-gray-200">
        <div className="container mx-auto max-w-6xl pb-4">
          <div className="flex items-center gap-2 text-sm font-sans text-gray-600">
            <Link href="/products" className="hover:text-primary-600 transition-colors">
              Products
            </Link>
            <span>/</span>
            <Link
              href={`/products?category=${product.category}`}
              className="hover:text-primary-600 transition-colors"
            >
              {categoryLabel}
            </Link>
            <span>/</span>
            <span className="text-primary-600 font-semibold">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Hero Section - Redesigned */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Left: Symbol Circle */}
            <div className="lg:col-span-1 flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary-100 to-primary-50 border-3 border-primary-600 flex items-center justify-center shadow-lg">
                  <div className="text-7xl font-serif font-bold text-primary-600">
                    {product.symbol}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="lg:col-span-2">
              {/* Category Badge */}
              <div className="inline-block px-4 py-2 bg-primary-100 border border-primary-300 rounded-full mb-6">
                <p className="font-sans text-xs uppercase tracking-widest text-primary-700 font-semibold">
                  {categoryLabel}
                </p>
              </div>

              {/* Title */}
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                {product.name}
              </h1>

              {/* Description */}
              <p className="font-sans text-lg text-gray-700 leading-relaxed mb-8">
                {product.fullDescription}
              </p>

              {/* Key Specs Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-gray-50 p-8 rounded-lg">
                <div>
                  <p className="font-sans text-xs text-gray-600 uppercase tracking-wide font-semibold mb-2">
                    Atomic #
                  </p>
                  <p className="font-serif text-3xl font-bold text-primary-600">
                    {product.atomicNumber}
                  </p>
                </div>
                <div>
                  <p className="font-sans text-xs text-gray-600 uppercase tracking-wide font-semibold mb-2">
                    Atomic Wt
                  </p>
                  <p className="font-serif text-2xl font-bold text-primary-600">
                    {product.atomicWeight}
                  </p>
                </div>
                <div>
                  <p className="font-sans text-xs text-gray-600 uppercase tracking-wide font-semibold mb-2">
                    CAS #
                  </p>
                  <p className="font-serif text-lg font-bold text-primary-600">
                    {product.casNumber}
                  </p>
                </div>
                <div>
                  <p className="font-sans text-xs text-gray-600 uppercase tracking-wide font-semibold mb-2">
                    Purity
                  </p>
                  <p className="font-serif text-2xl font-bold text-primary-600">
                    99+%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Forms */}
      <section className="py-16 px-4 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-serif text-3xl font-bold text-gray-900 mb-10">
            Available Forms
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {product.availableForms.map((form) => (
              <div
                key={form}
                className="p-4 bg-white border-2 border-gray-300 rounded-lg text-center hover:border-primary-600 hover:shadow-md transition-all duration-200"
              >
                <p className="font-sans text-sm font-semibold text-gray-900">
                  {form}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Purity Grades */}
      <section className="py-16 px-4 bg-white border-t border-gray-200">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-serif text-3xl font-bold text-gray-900 mb-10">
            Purity Grades
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {product.purityGrades.map((grade) => (
              <div
                key={grade}
                className="p-8 bg-gradient-to-br from-primary-50 to-primary-100 border-2 border-primary-200 rounded-lg text-center hover:shadow-lg transition-all duration-200"
              >
                <p className="font-serif text-3xl font-bold text-primary-700">
                  {grade}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 px-4 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-serif text-3xl font-bold text-gray-900 mb-10">
            Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {'ev' in product.applications && product.applications.ev && (
              <div className="p-8 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-serif text-xl font-bold text-primary-700 mb-4">
                  Electric Vehicles & Batteries
                </h3>
                <ul className="space-y-3 font-sans text-gray-700">
                  {product.applications.ev.map((app) => (
                    <li key={app} className="flex items-start gap-3">
                      <span className="text-primary-600 font-bold mt-0.5">✓</span>
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {'semiconductor' in product.applications && product.applications.semiconductor && (
              <div className="p-8 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-serif text-xl font-bold text-primary-700 mb-4">
                  Semiconductor
                </h3>
                <ul className="space-y-3 font-sans text-gray-700">
                  {product.applications.semiconductor.map((app) => (
                    <li key={app} className="flex items-start gap-3">
                      <span className="text-primary-600 font-bold mt-0.5">✓</span>
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {'aerospace' in product.applications && product.applications.aerospace && (
              <div className="p-8 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-serif text-xl font-bold text-primary-700 mb-4">
                  Aerospace
                </h3>
                <ul className="space-y-3 font-sans text-gray-700">
                  {product.applications.aerospace.map((app) => (
                    <li key={app} className="flex items-start gap-3">
                      <span className="text-primary-600 font-bold mt-0.5">✓</span>
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {'magnets' in product.applications && product.applications.magnets && (
              <div className="p-8 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-serif text-xl font-bold text-primary-700 mb-4">
                  Permanent Magnets
                </h3>
                <ul className="space-y-3 font-sans text-gray-700">
                  {product.applications.magnets.map((app) => (
                    <li key={app} className="flex items-start gap-3">
                      <span className="text-primary-600 font-bold mt-0.5">✓</span>
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {'optical' in product.applications && product.applications.optical && (
              <div className="p-8 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-serif text-xl font-bold text-primary-700 mb-4">
                  Optical & Display
                </h3>
                <ul className="space-y-3 font-sans text-gray-700">
                  {product.applications.optical.map((app) => (
                    <li key={app} className="flex items-start gap-3">
                      <span className="text-primary-600 font-bold mt-0.5">✓</span>
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {'catalysts' in product.applications && product.applications.catalysts && (
              <div className="p-8 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-serif text-xl font-bold text-primary-700 mb-4">
                  Catalysts
                </h3>
                <ul className="space-y-3 font-sans text-gray-700">
                  {product.applications.catalysts.map((app) => (
                    <li key={app} className="flex items-start gap-3">
                      <span className="text-primary-600 font-bold mt-0.5">✓</span>
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {'metallurgy' in product.applications && product.applications.metallurgy && (
              <div className="p-8 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-serif text-xl font-bold text-primary-700 mb-4">
                  Metallurgy
                </h3>
                <ul className="space-y-3 font-sans text-gray-700">
                  {product.applications.metallurgy.map((app) => (
                    <li key={app} className="flex items-start gap-3">
                      <span className="text-primary-600 font-bold mt-0.5">✓</span>
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 px-4 bg-white border-t border-gray-200">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-serif text-3xl font-bold text-gray-900 mb-10">
            Technical Specifications
          </h2>
          <div className="overflow-x-auto border border-gray-300 rounded-lg">
            <table className="w-full">
              <tbody>
                {product.specifications.map((spec, index) => (
                  <tr
                    key={spec.label}
                    className={`border-b border-gray-200 ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    }`}
                  >
                    <td className="px-6 py-4 font-sans font-semibold text-gray-900 w-1/3">
                      {spec.label}
                    </td>
                    <td className="px-6 py-4 font-sans text-gray-700">
                      {spec.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Storage & Packaging */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div className="p-8 bg-gradient-to-br from-primary-50 to-white border-2 border-primary-200 rounded-lg">
              <h3 className="font-serif text-xl font-bold text-primary-700 mb-4">
                Storage Requirements
              </h3>
              <p className="font-sans text-gray-700 leading-relaxed">
                {product.storageRequirements}
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-primary-50 to-white border-2 border-primary-200 rounded-lg">
              <h3 className="font-serif text-xl font-bold text-primary-700 mb-4">
                Packaging Options
              </h3>
              <ul className="space-y-3 font-sans text-gray-700">
                {product.packasingOptions.map((option) => (
                  <li key={option} className="flex items-center gap-3">
                    <span className="text-primary-600 font-bold">•</span>
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Request CTA Section - Fixed Colors */}
      <section className="py-16 px-4 bg-primary-50 border-t border-gray-200">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">
              Request {product.name}
            </h2>
            <p className="font-sans text-gray-700">
              Get a custom quote or learn more about our {product.name.toLowerCase()} supply options.
            </p>
          </div>
          <InquiryForm type="rfq" />
        </div>
      </section>

      <Footer />
    </main>
  );
}
