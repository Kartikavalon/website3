import Link from "next/link";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto max-w-7xl px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand & About */}
          <div>
            <div className="text-2xl font-serif font-bold text-primary-600 mb-4">
              Kaytherix
            </div>
            <p className="text-gray-300 text-sm font-sans">
              Global refiner and supplier of premium rare earth elements and strategic metals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-semibold text-white mb-4">Products</h3>
            <ul className="space-y-2 text-sm font-sans text-gray-300">
              <li>
                <Link href="/products" className="hover:text-primary-600 transition-colors">
                  Light Rare Earths
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-primary-600 transition-colors">
                  Heavy Rare Earths
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-primary-600 transition-colors">
                  Strategic Metals
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-primary-600 transition-colors">
                  Advanced Materials
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-serif font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm font-sans text-gray-300">
              <li>
                <Link href="/about" className="hover:text-primary-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/manufacturing" className="hover:text-primary-600 transition-colors">
                  Manufacturing
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-primary-600 transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-primary-600 transition-colors">
                  News
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-serif font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-3 text-sm font-sans text-gray-300">
              <p>
                <a
                  href="mailto:contactus@kaytherix.com"
                  className="hover:text-primary-600 transition-colors"
                >
                  contactus@kaytherix.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+918851294852"
                  className="hover:text-primary-600 transition-colors"
                >
                  +91-8851294852
                </a>
              </p>
              <div className="flex gap-4 pt-2">
                <a
                  href="#"
                  className="text-slate-400 hover:text-primary-600 transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebook size={18} />
                </a>
                <a
                  href="#"
                  className="text-slate-400 hover:text-primary-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={18} />
                </a>
                <a
                  href="#"
                  className="text-slate-400 hover:text-primary-600 transition-colors"
                  aria-label="Twitter"
                >
                  <FaTwitter size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm font-sans">
              © 2026 Kaytherix Industries. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-primary-600 text-sm font-sans transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-slate-500 hover:text-primary-600 text-sm font-sans transition-colors">
                Terms of Service
              </Link>
              <Link href="/contact" className="text-slate-500 hover:text-primary-600 text-sm font-sans transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
