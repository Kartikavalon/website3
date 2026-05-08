import SectionHeader from "@/components/SectionHeader";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Manufacturing() {
  return (
    <main className="w-full bg-white text-gray-900">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-industrial">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
            Manufacturing & <span className="text-primary-600">Refining</span>
          </h1>
          <p className="font-sans text-lg text-gray-700">
            Advanced infrastructure for premium rare earth and strategic metals production
          </p>
        </div>
      </section>

      {/* Capabilities Overview */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <SectionHeader
            title="Our Processing Infrastructure"
            subtitle="State-of-the-art equipment and systems for high-purity material production"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6">
                Refinement Systems
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-white border-l-4 border-primary-600 rounded">
                  <h4 className="font-sans font-semibold text-gray-900 mb-2">
                    Furnace Systems
                  </h4>
                  <p className="font-sans text-sm text-gray-600">
                    High-temperature induction and arc furnaces for melting and purification of rare earth metals.
                  </p>
                </div>
                <div className="p-4 bg-white border-l-4 border-primary-600 rounded">
                  <h4 className="font-sans font-semibold text-gray-900 mb-2">
                    Vacuum Melting
                  </h4>
                  <p className="font-sans text-sm text-gray-600">
                    Vacuum and inert-atmosphere melting for ultra-high purity ingot production and segregation control.
                  </p>
                </div>
                <div className="p-4 bg-white border-l-4 border-primary-600 rounded">
                  <h4 className="font-sans font-semibold text-gray-900 mb-2">
                    Powder Processing
                  </h4>
                  <p className="font-sans text-sm text-gray-600">
                    Atomization, grinding, and classification systems for precision powder production.
                  </p>
                </div>
                <div className="p-4 bg-white border-l-4 border-primary-600 rounded">
                  <h4 className="font-sans font-semibold text-gray-900 mb-2">
                    Purification Systems
                  </h4>
                  <p className="font-sans text-sm text-gray-600">
                    Chemical and vacuum purification for removing impurities and achieving target purity levels.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6">
                Quality & Testing
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-white border-l-4 border-primary-600 rounded">
                  <h4 className="font-sans font-semibold text-gray-900 mb-2">
                    Laboratory Testing
                  </h4>
                  <p className="font-sans text-sm text-gray-600">
                    Comprehensive analytical laboratory with advanced testing equipment and instrumentation.
                  </p>
                </div>
                <div className="p-4 bg-white border-l-4 border-primary-600 rounded">
                  <h4 className="font-sans font-semibold text-gray-900 mb-2">
                    Spectroscopy Equipment
                  </h4>
                  <p className="font-sans text-sm text-gray-600">
                    ICP-OES, XRF, and mass spectrometry for precise composition and purity analysis.
                  </p>
                </div>
                <div className="p-4 bg-white border-l-4 border-primary-600 rounded">
                  <h4 className="font-sans font-semibold text-gray-900 mb-2">
                    Quality Control
                  </h4>
                  <p className="font-sans text-sm text-gray-600">
                    Batch testing, material documentation, and comprehensive quality assurance protocols.
                  </p>
                </div>
                <div className="p-4 bg-white border-l-4 border-primary-600 rounded">
                  <h4 className="font-sans font-semibold text-gray-900 mb-2">
                    Packaging & Logistics
                  </h4>
                  <p className="font-sans text-sm text-gray-600">
                    Export-grade packaging systems with full traceability and compliance documentation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <SectionHeader title="Our Manufacturing Process" />

          <div className="mt-12 space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center font-serif font-bold text-slate-950">
                1
              </div>
              <div className="flex-grow">
                <h4 className="font-serif text-lg font-semibold text-gray-900 mb-2">
                  Raw Material Sourcing & Verification
                </h4>
                <p className="font-sans text-gray-600">
                  Careful procurement of high-quality raw materials with rigorous incoming inspection and composition verification.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center font-serif font-bold text-slate-950">
                2
              </div>
              <div className="flex-grow">
                <h4 className="font-serif text-lg font-semibold text-gray-900 mb-2">
                  Thermal Processing & Refinement
                </h4>
                <p className="font-sans text-gray-600">
                  Melting, purification, and homogenization using advanced furnace systems and vacuum techniques.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center font-serif font-bold text-slate-950">
                3
              </div>
              <div className="flex-grow">
                <h4 className="font-serif text-lg font-semibold text-gray-900 mb-2">
                  Form Conversion & Processing
                </h4>
                <p className="font-sans text-gray-600">
                  Ingot casting, powder production, foil rolling, or custom form processing based on customer specifications.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center font-serif font-bold text-slate-950">
                4
              </div>
              <div className="flex-grow">
                <h4 className="font-serif text-lg font-semibold text-gray-900 mb-2">
                  Quality Analysis & Testing
                </h4>
                <p className="font-sans text-gray-600">
                  Comprehensive laboratory testing including spectroscopy, composition analysis, and purity verification.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center font-serif font-bold text-slate-950">
                5
              </div>
              <div className="flex-grow">
                <h4 className="font-serif text-lg font-semibold text-gray-900 mb-2">
                  Certification & Documentation
                </h4>
                <p className="font-sans text-gray-600">
                  Material certifications, test reports, compliance documentation, and technical datasheets provided.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center font-serif font-bold text-slate-950">
                6
              </div>
              <div className="flex-grow">
                <h4 className="font-serif text-lg font-semibold text-gray-900 mb-2">
                  Export Packaging & Shipping
                </h4>
                <p className="font-sans text-gray-600">
                  Export-grade packaging with full traceability, customs documentation, and logistics coordination.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Capabilities */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <SectionHeader
            title="Advanced Manufacturing Capabilities"
            subtitle="Specialized processing for demanding applications"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="p-6 bg-white border border-gray-300 rounded">
              <div className="text-3xl font-serif font-bold text-primary-600 mb-4">
                🔬
              </div>
              <h3 className="font-serif text-lg font-semibold mb-3">
                Custom Specifications
              </h3>
              <p className="font-sans text-sm text-gray-600">
                Tailored material development for unique industrial requirements and advanced applications.
              </p>
            </div>

            <div className="p-6 bg-white border border-gray-300 rounded">
              <div className="text-3xl font-serif font-bold text-primary-600 mb-4">
                📊
              </div>
              <h3 className="font-serif text-lg font-semibold mb-3">
                Batch Traceability
              </h3>
              <p className="font-sans text-sm text-gray-600">
                Complete material history, composition tracking, and documentation for each batch produced.
              </p>
            </div>

            <div className="p-6 bg-white border border-gray-300 rounded">
              <div className="text-3xl font-serif font-bold text-primary-600 mb-4">
                ✓
              </div>
              <h3 className="font-serif text-lg font-semibold mb-3">
                Compliance & Certification
              </h3>
              <p className="font-sans text-sm text-gray-600">
                ISO 9001, RoHS, REACH compliant production with environmental responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-industrial">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-4xl font-bold mb-6">
            Need Custom Processing?
          </h2>
          <p className="font-sans text-lg text-gray-700 mb-8">
            Discuss your unique manufacturing requirements with our technical experts.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-primary-600 text-slate-950 font-sans font-semibold rounded hover:bg-primary-500 transition-all duration-300 hover:shadow-glow-teal"
          >
            Request Technical Consultation
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

