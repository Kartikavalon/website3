import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";

export default function PrivacyPolicy() {
  return (
    <main className="w-full bg-white text-gray-900">
      <Navigation />

      <SectionHeader
        title="Privacy Policy"
        subtitle="Your privacy is important to us"
      />

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-3xl">
          <div className="prose prose-sm max-w-none font-sans">
            <p className="text-gray-700 leading-relaxed mb-6">
              Last Updated: May 2026
            </p>

            <h2 className="font-serif text-2xl font-bold mt-8 mb-4">
              1. Introduction
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Kaytherix Industries ("we," "us," "our," or "Company") is committed to
              protecting your privacy. This Privacy Policy explains how we collect,
              use, disclose, and safeguard your information when you visit our website
              kaytherix.com and use our services.
            </p>

            <h2 className="font-serif text-2xl font-bold mt-8 mb-4">
              2. Information We Collect
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may collect information about you in a variety of ways. The information
              we may collect on the Site includes:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>
                <strong>Personal Data:</strong> Name, email address, phone number, company name, and
                other details you voluntarily provide through contact forms or inquiries.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you access and use our website,
                including your IP address, browser type, pages visited, and time spent.
              </li>
              <li>
                <strong>Cookies:</strong> We may use cookies to enhance your experience on our website.
              </li>
            </ul>

            <h2 className="font-serif text-2xl font-bold mt-8 mb-4">
              3. How We Use Your Information
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use the information we collect in the following ways:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>To respond to your inquiries and fulfill your requests</li>
              <li>To send you promotional communications (with your consent)</li>
              <li>To improve our website and services</li>
              <li>To comply with legal obligations</li>
              <li>To prevent fraudulent activities</li>
            </ul>

            <h2 className="font-serif text-2xl font-bold mt-8 mb-4">
              4. Data Security
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We implement appropriate technical and organizational measures to protect
              your personal information against unauthorized access, alteration, disclosure,
              or destruction. However, no method of transmission over the Internet is 100%
              secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="font-serif text-2xl font-bold mt-8 mb-4">
              5. Third-Party Links
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our website may contain links to third-party websites. We are not responsible
              for the privacy practices of these external sites. We encourage you to review
              their privacy policies before providing any personal information.
            </p>

            <h2 className="font-serif text-2xl font-bold mt-8 mb-4">
              6. Your Rights
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
            </ul>

            <h2 className="font-serif text-2xl font-bold mt-8 mb-4">
              7. Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              If you have any questions about this Privacy Policy or our privacy practices,
              please contact us at:
            </p>
            <div className="bg-gray-50 border border-gray-300 p-6 rounded">
              <p className="text-gray-900 font-semibold mb-2">Kaytherix Industries</p>
              <p className="text-gray-700">Email: contactus@kaytherix.com</p>
              <p className="text-gray-700">Phone: +91-8851294852</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
