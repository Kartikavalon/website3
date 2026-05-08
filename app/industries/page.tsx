import SectionHeader from "@/components/SectionHeader";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { INDUSTRIES_SERVED } from "@/data/index";

export default function Industries() {
  return (
    <main className="w-full bg-white text-gray-900">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-industrial">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="font-serif text-6xl md:text-7xl font-bold mb-6 text-white">
            Industries <span className="text-primary-400 drop-shadow-[0_0_20px_rgba(20,184,166,0.5)]">Served</span>
          </h1>
          <p className="font-sans text-lg text-gray-700">
            Specialized materials for diverse, cutting-edge industrial applications
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {INDUSTRIES_SERVED.map((industry) => (
              <div
                key={industry.id}
                className="group p-8 bg-white border border-gray-300 rounded hover:border-primary-600 transition-all duration-300 hover:shadow-glow-teal"
              >
                {/* Industry Title */}
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {industry.name}
                </h3>

                {/* Description */}
                <p className="font-sans text-gray-600 mb-6">{industry.description}</p>

                {/* Materials Used */}
                <div>
                  <p className="font-sans text-xs text-gray-600 uppercase tracking-wide mb-3">
                    Key Materials
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {industry.materials.map((material) => (
                      <span
                        key={material}
                        className="px-3 py-1 bg-primary-600/20 text-primary-700 text-xs font-sans rounded-full border border-primary-600/30"
                      >
                        {material}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Capabilities */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <SectionHeader
            title="Advanced Solutions for Every Sector"
            subtitle="Our expertise spans across multiple industries with specialized material solutions"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 bg-white border border-gray-300 rounded">
              <div className="text-3xl font-serif font-bold text-primary-600 mb-4">
                ⚡
              </div>
              <h3 className="font-serif text-lg font-semibold mb-3">
                Energy & Power
              </h3>
              <p className="font-sans text-sm text-gray-600">
                Materials for renewable energy systems, battery technology, and advanced power applications.
              </p>
            </div>

            <div className="p-6 bg-white border border-gray-300 rounded">
              <div className="text-3xl font-serif font-bold text-primary-600 mb-4">
                🛰️
              </div>
              <h3 className="font-serif text-lg font-semibold mb-3">
                Aerospace & Defense
              </h3>
              <p className="font-sans text-sm text-gray-600">
                High-performance, mission-critical materials for defense systems and aerospace applications.
              </p>
            </div>

            <div className="p-6 bg-white border border-gray-300 rounded">
              <div className="text-3xl font-serif font-bold text-primary-600 mb-4">
                💻
              </div>
              <h3 className="font-serif text-lg font-semibold mb-3">
                Electronics & Semiconductors
              </h3>
              <p className="font-sans text-sm text-gray-600">
                Ultra-pure materials for semiconductor manufacturing and advanced electronic devices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Spotlight */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <SectionHeader
            title="Application Highlights"
            subtitle="How our materials drive innovation across industries"
          />

          <div className="space-y-8 mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                  Electric Vehicle Revolution
                </h3>
                <p className="font-sans text-gray-600 mb-4">
                  Neodymium and dysprosium magnets power EV motors with unprecedented efficiency and performance. Our high-purity materials ensure optimal magnet performance and longevity.
                </p>
                <ul className="space-y-2 font-sans text-gray-600 text-sm">
                  <li>✓ High-strength permanent magnets</li>
                  <li>✓ Optimized coercivity at operating temperatures</li>
                  <li>✓ Guaranteed material consistency</li>
                </ul>
              </div>
              <div className="p-8 bg-white border border-gray-300 rounded">
                <p className="font-serif text-lg font-semibold text-primary-600">
                  Key Materials
                </p>
                <p className="font-sans text-gray-600 mt-4">
                  Neodymium · Dysprosium · Lithium · Cobalt · Vanadium
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="p-8 bg-white border border-gray-300 rounded order-last md:order-first">
                <p className="font-serif text-lg font-semibold text-primary-600">
                  Key Materials
                </p>
                <p className="font-sans text-gray-600 mt-4">
                  Gallium · Germanium · Indium · Tungsten · Molybdenum
                </p>
              </div>
              <div className="order-first md:order-last">
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                  Semiconductor Manufacturing
                </h3>
                <p className="font-sans text-gray-600 mb-4">
                  Ultra-pure gallium and germanium enable cutting-edge semiconductor devices for 5G, AI, and computing applications. Our materials meet the strictest purity requirements.
                </p>
                <ul className="space-y-2 font-sans text-gray-600 text-sm">
                  <li>✓ Six-nines and higher purity levels</li>
                  <li>✓ Defect-free processing</li>
                  <li>✓ Advanced analytical verification</li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                  Advanced Aerospace Systems
                </h3>
                <p className="font-sans text-gray-600 mb-4">
                  Tungsten, molybdenum, and specialty alloys operate in extreme aerospace environments. Our materials provide unmatched thermal stability and mechanical performance.
                </p>
                <ul className="space-y-2 font-sans text-gray-600 text-sm">
                  <li>✓ Ultimate high-temperature performance</li>
                  <li>✓ Fatigue-resistant specifications</li>
                  <li>✓ Aerospace-certified purity</li>
                </ul>
              </div>
              <div className="p-8 bg-white border border-gray-300 rounded">
                <p className="font-serif text-lg font-semibold text-primary-600">
                  Key Materials
                </p>
                <p className="font-sans text-gray-600 mt-4">
                  Tungsten · Molybdenum · Scandium · Zirconium · Niobium
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-industrial">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-primary-400 drop-shadow-[0_0_20px_rgba(20,184,166,0.5)]">
            Your Industry. Your Materials.
          </h2>
          <p className="font-sans text-lg text-gray-700 mb-8">
            Let us power your industrial operations with premium rare earth elements and strategic metals.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-primary-600 text-slate-950 font-sans font-semibold rounded hover:bg-primary-500 transition-all duration-300 hover:shadow-glow-teal"
          >
            Connect with Us
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

