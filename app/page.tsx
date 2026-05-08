import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import Link from "next/link";
import { LIGHT_RARE_EARTHS } from "@/data/light-rare-earths";
import { HEAVY_RARE_EARTHS } from "@/data/heavy-rare-earths";
import { STRATEGIC_METALS } from "@/data/strategic-metals";
import { INDUSTRIES_SERVED, SERVICES } from "@/data/index";

export default function Home() {
  const featuredLightRareEarths = LIGHT_RARE_EARTHS.slice(0, 3);
  const featuredHeavyRareEarths = HEAVY_RARE_EARTHS.slice(0, 3);
  const featuredStrategicMetals = STRATEGIC_METALS.slice(0, 3);

  return (
    <main className="w-full bg-white text-gray-900">
      <Navigation />
      <Hero />

      {/* Light Rare Earths Section */}
      <section className="py-20 px-4 bg-white border-b border-gray-200">
        <div className="container mx-auto max-w-7xl">
          <SectionHeader
            title="Light Rare Earth Elements"
            subtitle="Lanthanum, Cerium, Praseodymium, Neodymium, and more for advanced industrial applications"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {featuredLightRareEarths.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                symbol={product.symbol}
                category="Light Rare Earths"
                purityGr={product.purityGrades[0]}
                shortDescription={product.shortDescription}
                href={`/products/${product.category}/${product.id}`}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/products?category=light-rare-earth"
              className="inline-block px-8 py-3 border border-primary-600 text-primary-600 font-sans font-semibold rounded hover:bg-primary-600/10 transition-all duration-300"
            >
              View All Light Rare Earths
            </Link>
          </div>
        </div>
      </section>

      {/* Heavy Rare Earths Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <SectionHeader
            title="Heavy Rare Earth Elements"
            subtitle="Terbium, Dysprosium, Holmium, Erbium, and specialized heavy rare earth materials"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {featuredHeavyRareEarths.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                symbol={product.symbol}
                category="Heavy Rare Earths"
                purityGr={product.purityGrades[0]}
                shortDescription={product.shortDescription}
                href={`/products/${product.category}/${product.id}`}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/products?category=heavy-rare-earth"
              className="inline-block px-8 py-3 border border-primary-600 text-primary-600 font-sans font-semibold rounded hover:bg-primary-600/10 transition-all duration-300"
            >
              View All Heavy Rare Earths
            </Link>
          </div>
        </div>
      </section>

      {/* Strategic Metals Section */}
      <section className="py-20 px-4 bg-white border-b border-gray-200">
        <div className="container mx-auto max-w-7xl">
          <SectionHeader
            title="Strategic & Specialty Metals"
            subtitle="Lithium, Cobalt, Vanadium, Gallium, Germanium, Zirconium, Molybdenum, Tungsten, and more"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {featuredStrategicMetals.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                symbol={product.symbol}
                category="Strategic Metals"
                purityGr={product.purityGrades[0]}
                shortDescription={product.shortDescription}
                href={`/products/${product.category}/${product.id}`}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/products?category=strategic-metals"
              className="inline-block px-8 py-3 border border-primary-600 text-primary-600 font-sans font-semibold rounded hover:bg-primary-600/10 transition-all duration-300"
            >
              View All Strategic Metals
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Served Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <SectionHeader
            title="Industries Served"
            subtitle="Serving global leaders across diverse industrial sectors"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {INDUSTRIES_SERVED.slice(0, 8).map((industry) => (
              <div
                key={industry.id}
                className="p-4 bg-white border border-gray-300 rounded hover:border-primary-600 transition-colors text-center"
              >
                <p className="font-serif font-semibold text-gray-900">{industry.name}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/industries"
              className="inline-block px-8 py-3 bg-primary-600 text-slate-950 font-sans font-semibold rounded hover:bg-primary-500 transition-all duration-300 hover:shadow-glow-teal"
            >
              Explore All Industries
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Kaytherix */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <SectionHeader
            title="Why Choose Kaytherix Industries"
            subtitle="Trusted by global leaders for premium rare earth and strategic metals"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 bg-white border border-gray-300 rounded hover:border-primary-600 transition-colors">
              <div className="text-4xl font-serif font-bold text-primary-600 mb-4">
                ✓
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">
                Premium Purity Grades
              </h3>
              <p className="font-sans text-gray-600">
                99.0% to 99.99999% purity levels meeting the strictest international standards.
              </p>
            </div>

            <div className="p-6 bg-white border border-gray-300 rounded hover:border-primary-600 transition-colors">
              <div className="text-4xl font-serif font-bold text-primary-600 mb-4">
                ✓
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">
                Advanced Refining
              </h3>
              <p className="font-sans text-gray-600">
                State-of-the-art furnaces, vacuum systems, and purification technology for superior quality.
              </p>
            </div>

            <div className="p-6 bg-white border border-gray-300 rounded hover:border-primary-600 transition-colors">
              <div className="text-4xl font-serif font-bold text-primary-600 mb-4">
                ✓
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">
                Global Logistics
              </h3>
              <p className="font-sans text-gray-600">
                Comprehensive export capabilities with certified packaging and compliance documentation.
              </p>
            </div>

            <div className="p-6 bg-white border border-gray-300 rounded hover:border-primary-600 transition-colors">
              <div className="text-4xl font-serif font-bold text-primary-600 mb-4">
                ✓
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">
                Technical Expertise
              </h3>
              <p className="font-sans text-gray-600">
                Expert team providing consultation, custom specifications, and technical support.
              </p>
            </div>

            <div className="p-6 bg-white border border-gray-300 rounded hover:border-primary-600 transition-colors">
              <div className="text-4xl font-serif font-bold text-primary-600 mb-4">
                ✓
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">
                Full Certifications
              </h3>
              <p className="font-sans text-gray-600">
                ISO 9001, RoHS, REACH compliant with laboratory testing and quality assurance.
              </p>
            </div>

            <div className="p-6 bg-white border border-gray-300 rounded hover:border-primary-600 transition-colors">
              <div className="text-4xl font-serif font-bold text-primary-600 mb-4">
                ✓
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">
                Reliable Supply
              </h3>
              <p className="font-sans text-gray-600">
                Consistent availability with flexible ordering and competitive bulk pricing for partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-industrial">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-primary-400 drop-shadow-[0_0_20px_rgba(20,184,166,0.5)]">
            Ready to Order Premium Materials?
          </h2>
          <p className="font-sans text-lg text-gray-700 mb-4">
            Connect with our team to discuss your material requirements, specifications, and volume needs.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-primary-600 text-white font-sans font-semibold rounded hover:bg-primary-700 transition-all duration-300 hover:shadow-lg"
            >
              Request Technical Datasheet
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border border-primary-600 text-primary-600 font-sans font-semibold rounded hover:bg-primary-600/10 transition-all duration-300"
            >
              Submit RFQ
            </Link>
            <a
              href="https://wa.me/918851294852?text=Hi%20Kaytherix%20Industries"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-primary-600/20 border border-primary-600 text-primary-600 font-sans font-semibold rounded hover:bg-primary-600/30 transition-all duration-300"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

