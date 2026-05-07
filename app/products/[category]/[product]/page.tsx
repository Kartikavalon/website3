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
    <main className="w-full bg-slate-950 text-slate-100">
      <Navigation />

      {/* Breadcrumb */}
      <div className="pt-32 px-4 bg-slate-900">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-2 text-sm font-sans text-slate-400">
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
            <span className="text-primary-600">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-industrial">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            {/* Symbol */}
            <div className="col-span-1 flex justify-center md:justify-start">
              <div className="w-40 h-40 rounded-full bg-primary-600/10 border-2 border-primary-600 flex items-center justify-center">
                <div className="text-7xl font-serif font-bold text-primary-600">
                  {product.symbol}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="col-span-1 md:col-span-2">
              <div className="inline-block px-4 py-2 bg-primary-600/20 border border-primary-600/50 rounded-full mb-6">
                <p className="font-sans text-xs uppercase tracking-widest text-primary-300">
                  {categoryLabel}
                </p>
              </div>

              <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">
                {product.name}
              </h1>

              <p className="font-sans text-lg text-slate-300 mb-6">
                {product.fullDescription}
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="font-sans text-xs text-slate-400 uppercase">Atomic #</p>
                  <p className="font-serif text-2xl font-bold text-primary-600">
                    {product.atomicNumber}
                  </p>
                </div>
                <div>
                  <p className="font-sans text-xs text-slate-400 uppercase">Atomic Wt</p>
                  <p className="font-serif text-2xl font-bold text-primary-600">
                    {product.atomicWeight}
                  </p>
                </div>
                <div>
                  <p className="font-sans text-xs text-slate-400 uppercase">CAS #</p>
                  <p className="font-serif text-lg font-bold text-primary-600">
                    {product.casNumber}
                  </p>
                </div>
                <div>
                  <p className="font-sans text-xs text-slate-400 uppercase">Purity</p>
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
      <section className="py-20 px-4 bg-slate-900">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-serif text-3xl font-bold mb-12">Available Forms</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {product.availableForms.map((form) => (
              <div
                key={form}
                className="p-4 bg-slate-800 border border-slate-700 rounded text-center hover:border-primary-600 transition-colors"
              >
                <p className="font-sans text-sm font-semibold text-slate-200">{form}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Purity Grades */}
      <section className="py-20 px-4 bg-slate-950">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-serif text-3xl font-bold mb-12">Purity Grades</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {product.purityGrades.map((grade) => (
              <div
                key={grade}
                className="p-6 bg-slate-800 border border-primary-600/30 rounded text-center hover:border-primary-600 transition-colors"
              >
                <p className="font-serif text-2xl font-bold text-primary-600">{grade}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 px-4 bg-slate-900">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-serif text-3xl font-bold mb-12">Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {product.applications.ev && (
              <div>
                <h3 className="font-serif text-xl font-semibold text-primary-600 mb-4">
                  Electric Vehicles & Batteries
                </h3>
                <ul className="space-y-2 font-sans text-slate-400">
                  {product.applications.ev.map((app) => (
                    <li key={app} className="flex items-start gap-3">
                      <span className="text-primary-600 mt-1">✓</span>
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {product.applications.semiconductor && (
              <div>
                <h3 className="font-serif text-xl font-semibold text-primary-600 mb-4">
                  Semiconductor
                </h3>
                <ul className="space-y-2 font-sans text-slate-400">
                  {product.applications.semiconductor.map((app) => (
                    <li key={app} className="flex items-start gap-3">
                      <span className="text-primary-600 mt-1">✓</span>
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {product.applications.aerospace && (
              <div>
                <h3 className="font-serif text-xl font-semibold text-primary-600 mb-4">
                  Aerospace
                </h3>
                <ul className="space-y-2 font-sans text-slate-400">
                  {product.applications.aerospace.map((app) => (
                    <li key={app} className="flex items-start gap-3">
                      <span className="text-primary-600 mt-1">✓</span>
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {product.applications.magnets && (
              <div>
                <h3 className="font-serif text-xl font-semibold text-primary-600 mb-4">
                  Permanent Magnets
                </h3>
                <ul className="space-y-2 font-sans text-slate-400">
                  {product.applications.magnets.map((app) => (
                    <li key={app} className="flex items-start gap-3">
                      <span className="text-primary-600 mt-1">✓</span>
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {product.applications.optical && (
              <div>
                <h3 className="font-serif text-xl font-semibold text-primary-600 mb-4">
                  Optical & Display
                </h3>
                <ul className="space-y-2 font-sans text-slate-400">
                  {product.applications.optical.map((app) => (
                    <li key={app} className="flex items-start gap-3">
                      <span className="text-primary-600 mt-1">✓</span>
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {product.applications.catalysts && (
              <div>
                <h3 className="font-serif text-xl font-semibold text-primary-600 mb-4">
                  Catalysts
                </h3>
                <ul className="space-y-2 font-sans text-slate-400">
                  {product.applications.catalysts.map((app) => (
                    <li key={app} className="flex items-start gap-3">
                      <span className="text-primary-600 mt-1">✓</span>
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {product.applications.metallurgy && (
              <div>
                <h3 className="font-serif text-xl font-semibold text-primary-600 mb-4">
                  Metallurgy
                </h3>
                <ul className="space-y-2 font-sans text-slate-400">
                  {product.applications.metallurgy.map((app) => (
                    <li key={app} className="flex items-start gap-3">
                      <span className="text-primary-600 mt-1">✓</span>
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-20 px-4 bg-slate-950">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-serif text-3xl font-bold mb-12">Technical Specifications</h2>
          <div className="bg-slate-800 border border-slate-700 rounded overflow-hidden">
            <table className="w-full">
              <tbody>
                {product.specifications.map((spec, index) => (
                  <tr
                    key={spec.label}
                    className={`border-b border-slate-700 ${
                      index % 2 === 0 ? "bg-slate-800" : "bg-slate-750"
                    }`}
                  >
                    <td className="px-6 py-4 font-sans font-semibold text-slate-300 w-1/3">
                      {spec.label}
                    </td>
                    <td className="px-6 py-4 font-sans text-slate-400">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Storage & Packaging */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="p-6 bg-slate-800 border border-slate-700 rounded">
              <h3 className="font-serif text-lg font-semibold text-primary-600 mb-3">
                Storage Requirements
              </h3>
              <p className="font-sans text-slate-400">{product.storageRequirements}</p>
            </div>

            <div className="p-6 bg-slate-800 border border-slate-700 rounded">
              <h3 className="font-serif text-lg font-semibold text-primary-600 mb-3">
                Packaging Options
              </h3>
              <ul className="space-y-2 font-sans text-slate-400">
                {product.packasingOptions.map((option) => (
                  <li key={option} className="flex items-center gap-2">
                    <span className="text-primary-600">•</span>
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-20 px-4 bg-slate-900">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">
            Request {product.name}
          </h2>
          <InquiryForm type="rfq" />
        </div>
      </section>

      <Footer />
    </main>
  );
}
