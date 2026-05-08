import SectionHeader from "@/components/SectionHeader";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SERVICES, CERTIFICATIONS } from "@/data/index";

export default function About() {
  return (
    <main className="w-full bg-white text-gray-900">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-industrial">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="font-serif text-6xl md:text-7xl font-bold mb-6">
            About Kaytherix <span className="text-primary-600">Industries</span>
          </h1>
          <p className="font-sans text-lg text-gray-700 mb-4">
            Global leader in rare earth refinement and strategic metals supply
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <SectionHeader
            title="Our Mission"
            subtitle="Providing premium, high-purity rare earth elements and strategic metals to power tomorrow's technologies"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 bg-slate-800 border border-gray-300 rounded">
              <div className="text-3xl font-serif font-bold text-primary-600 mb-4">
                Refining Excellence
              </div>
              <p className="font-sans text-gray-600">
                Advanced purification and metallurgical processes ensuring highest material purity and specifications.
              </p>
            </div>
            <div className="p-6 bg-slate-800 border border-gray-300 rounded">
              <div className="text-3xl font-serif font-bold text-primary-600 mb-4">
                Scientific Precision
              </div>
              <p className="font-sans text-gray-600">
                Laboratory testing and quality control guaranteeing consistency and reliability across all products.
              </p>
            </div>
            <div className="p-6 bg-slate-800 border border-gray-300 rounded">
              <div className="text-3xl font-serif font-bold text-primary-600 mb-4">
                Global Supply
              </div>
              <p className="font-sans text-gray-600">
                Worldwide export capability with certified packaging and full compliance with international standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <SectionHeader
            title="Our Capabilities"
            subtitle="Comprehensive manufacturing and refining infrastructure"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                Manufacturing & Refining
              </h3>
              <ul className="space-y-3 font-sans text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-primary-600 mt-1">→</span>
                  <span>Advanced furnace systems for high-temperature processing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-600 mt-1">→</span>
                  <span>Vacuum melting and powder processing equipment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-600 mt-1">→</span>
                  <span>Purification systems for ultra-high purity production</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-600 mt-1">→</span>
                  <span>Custom specification development services</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                Quality Assurance
              </h3>
              <ul className="space-y-3 font-sans text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-primary-600 mt-1">→</span>
                  <span>Advanced laboratory testing and spectroscopy</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-600 mt-1">→</span>
                  <span>Comprehensive purity and composition analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-600 mt-1">→</span>
                  <span>Certifications and compliance with industry standards</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-600 mt-1">→</span>
                  <span>Batch testing and material documentation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <SectionHeader
            title="Our Services"
            subtitle="End-to-end solutions for rare earth and strategic metals supply"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            {SERVICES.map((service) => (
              <div
                key={service}
                className="p-4 bg-slate-800 border border-gray-300 rounded hover:border-primary-600 transition-colors"
              >
                <p className="font-sans text-gray-700">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <SectionHeader
            title="Certifications & Compliance"
            subtitle="Meeting and exceeding international standards"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {CERTIFICATIONS.map((cert) => (
              <div key={cert.id} className="p-6 bg-slate-800 border border-primary-600/30 rounded">
                <h3 className="font-serif text-xl font-bold text-primary-600 mb-2">
                  {cert.name}
                </h3>
                <p className="font-sans text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-industrial">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-4xl font-bold mb-6">Ready to Partner?</h2>
          <p className="font-sans text-lg text-gray-700 mb-8">
            Connect with our team to discuss your material requirements and specifications.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-primary-600 text-slate-950 font-sans font-semibold rounded hover:bg-primary-500 transition-all duration-300 hover:shadow-glow-teal"
          >
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
