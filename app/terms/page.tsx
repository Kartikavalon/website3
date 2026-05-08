import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";

export default function TermsOfService() {
  return (
    <main className="w-full bg-white text-gray-900">
      <Navigation />

      <SectionHeader
        title="Terms of Service"
        subtitle="Please read these terms carefully"
      />

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-3xl">
          <div className="prose prose-sm max-w-none font-sans">
            <p className="text-gray-700 leading-relaxed mb-6">
              Last Updated: May 2026
            </p>

            <h2 className="font-serif text-2xl font-bold mt-8 mb-4">
              1. Agreement to Terms
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              These Terms of Service ("Terms") constitute a legally binding agreement
              between you ("User" or "you") and Kaytherix Industries ("Company," "we,"
              "us," or "our"), governing your access to and use of our website
              kaytherix.com and all related services.
            </p>

            <h2 className="font-serif text-2xl font-bold mt-8 mb-4">
              2. Use License
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Permission is granted to temporarily download one copy of the materials
              (information or software) on Kaytherix Industries' website for personal,
              non-commercial transitory viewing only. This is the grant of a license,
              not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to decompile or reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any server</li>
            </ul>

            <h2 className="font-serif text-2xl font-bold mt-8 mb-4">
              3. Disclaimer
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The materials on Kaytherix Industries' website are provided on an "as is" basis.
              Kaytherix Industries makes no warranties, expressed or implied, and hereby disclaims
              and negates all other warranties including, without limitation, implied warranties or
              conditions of merchantability, fitness for a particular purpose, or non-infringement of
              intellectual property or other violation of rights.
            </p>

            <h2 className="font-serif text-2xl font-bold mt-8 mb-4">
              4. Limitations
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              In no event shall Kaytherix Industries or its suppliers be liable for any damages
              (including, without limitation, damages for loss of data or profit, or due to business
              interruption) arising out of the use or inability to use the materials on
              Kaytherix Industries' website, even if Kaytherix Industries or an authorized
              representative has been notified orally or in writing of the possibility of such damage.
            </p>

            <h2 className="font-serif text-2xl font-bold mt-8 mb-4">
              5. Accuracy of Materials
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The materials appearing on Kaytherix Industries' website could include technical,
              typographical, or photographic errors. Kaytherix Industries does not warrant that any
              of the materials on its website are accurate, complete, or current. Kaytherix Industries
              may make changes to the materials contained on its website at any time without notice.
            </p>

            <h2 className="font-serif text-2xl font-bold mt-8 mb-4">
              6. Links
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Kaytherix Industries has not reviewed all of the sites linked to its website and is not
              responsible for the contents of any such linked site. The inclusion of any link does
              not imply endorsement by Kaytherix Industries of the site. Use of any such linked website
              is at the user's own risk.
            </p>

            <h2 className="font-serif text-2xl font-bold mt-8 mb-4">
              7. Modifications
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Kaytherix Industries may revise these Terms of Service for its website at any time
              without notice. By using this website, you are agreeing to be bound by the then current
              version of these Terms of Service.
            </p>

            <h2 className="font-serif text-2xl font-bold mt-8 mb-4">
              8. Governing Law
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              These Terms and Conditions are governed by and construed in accordance with the laws of
              India, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>

            <h2 className="font-serif text-2xl font-bold mt-8 mb-4">
              9. Contact Information
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              If you have any questions about these Terms of Service, please contact us at:
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
