import SectionHeader from "@/components/SectionHeader";
import InquiryForm from "@/components/InquiryForm";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <main className="w-full bg-white text-gray-900">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-industrial">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
            Get in <span className="text-primary-600">Touch</span>
          </h1>
          <p className="font-sans text-lg text-gray-700">
            Connect with our technical team for inquiries, quotes, and consultation
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-serif font-bold text-primary-600 mb-4">
                📧
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">Email</h3>
              <a
                href="mailto:contactus@kaytherix.com"
                className="font-sans text-gray-600 hover:text-primary-600 transition-colors"
              >
                contactus@kaytherix.com
              </a>
            </div>
            <div className="text-center">
              <div className="text-4xl font-serif font-bold text-primary-600 mb-4">
                📱
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">Phone</h3>
              <a
                href="tel:+918851294852"
                className="font-sans text-gray-600 hover:text-primary-600 transition-colors"
              >
                +91-8851294852
              </a>
            </div>
            <div className="text-center">
              <div className="text-4xl font-serif font-bold text-primary-600 mb-4">
                💬
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">WhatsApp</h3>
              <a
                href="https://wa.me/918851294852?text=Hi%20Kaytherix%20Industries"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-gray-600 hover:text-primary-600 transition-colors"
              >
                Direct Message
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-2xl">
          <SectionHeader
            title="Submit Your Inquiry"
            subtitle="Tell us about your material requirements and specifications"
          />
          <div className="mt-12">
            <InquiryForm type="general" />
          </div>
        </div>
      </section>

      {/* Additional Forms Grid */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="font-serif text-4xl font-bold text-center mb-12">
            Specialized <span className="text-primary-600">Services</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* RFQ */}
            <div className="p-6 bg-slate-800 border border-gray-300 rounded hover:border-primary-600 transition-colors">
              <div className="text-3xl font-serif font-bold text-primary-600 mb-4">
                📋
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">
                Request a Quote (RFQ)
              </h3>
              <p className="font-sans text-gray-600 text-sm mb-6">
                Submit detailed specifications and volume requirements for competitive quotation.
              </p>
              <a
                href="#rfq-form"
                className="inline-block px-4 py-2 bg-primary-600 text-slate-950 font-sans font-semibold rounded text-sm hover:bg-primary-500 transition-all"
              >
                Submit RFQ
              </a>
            </div>

            {/* Technical Consultation */}
            <div className="p-6 bg-slate-800 border border-gray-300 rounded hover:border-primary-600 transition-colors">
              <div className="text-3xl font-serif font-bold text-primary-600 mb-4">
                🔬
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">
                Technical Consultation
              </h3>
              <p className="font-sans text-gray-600 text-sm mb-6">
                Speak directly with our experts about custom specifications and technical solutions.
              </p>
              <a
                href="#tech-form"
                className="inline-block px-4 py-2 bg-primary-600 text-slate-950 font-sans font-semibold rounded text-sm hover:bg-primary-500 transition-all"
              >
                Schedule Call
              </a>
            </div>

            {/* Export Inquiry */}
            <div className="p-6 bg-slate-800 border border-gray-300 rounded hover:border-primary-600 transition-colors">
              <div className="text-3xl font-serif font-bold text-primary-600 mb-4">
                🌍
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">
                Export Inquiry
              </h3>
              <p className="font-sans text-gray-600 text-sm mb-6">
                International logistics, compliance documentation, and bulk supply arrangements.
              </p>
              <a
                href="#export-form"
                className="inline-block px-4 py-2 bg-primary-600 text-slate-950 font-sans font-semibold rounded text-sm hover:bg-primary-500 transition-all"
              >
                Export Form
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="Common inquiries about our products and services"
          />

          <div className="space-y-6 mt-12">
            {[
              {
                question: "What is the minimum order quantity?",
                answer:
                  "Minimum order quantities vary by product. For detailed MOQ information, please contact our sales team or submit an RFQ.",
              },
              {
                question: "Do you provide custom material specifications?",
                answer:
                  "Yes, we specialize in custom material processing and can develop specifications tailored to your exact requirements.",
              },
              {
                question: "What are your lead times?",
                answer:
                  "Standard lead times are 2-4 weeks. Expedited orders can be arranged upon request. Contact us for specific timelines.",
              },
              {
                question: "Do you offer technical support?",
                answer:
                  "Absolutely. Our technical team is available to assist with material selection, applications, and troubleshooting.",
              },
              {
                question: "What are your export capabilities?",
                answer:
                  "We have comprehensive export capabilities with full certification, compliance documentation, and logistics support.",
              },
              {
                question: "How do you ensure product quality?",
                answer:
                  "Every batch undergoes rigorous laboratory testing, quality control analysis, and comprehensive certification before shipment.",
              },
            ].map((faq, index) => (
              <div key={index} className="p-6 bg-slate-800 border border-gray-300 rounded">
                <h3 className="font-serif text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="font-sans text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
