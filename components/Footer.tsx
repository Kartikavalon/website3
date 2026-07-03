import Link from "next/link";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-navy-900 to-navy-950 border-t border-amber-400/30">
      <div className="container mx-auto max-w-7xl px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand & About */}
          <div>
            <div className="text-2xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-cyan-300 mb-4">
              Kaytherix
            </div>
            <p className="text-gray-300 text-sm font-sans">
              Global refiner and supplier of premium rare earth elements and strategic metals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-semibold text-amber-300 mb-4">Products</h3>
            <ul className="space-y-2 text-sm font-sans text-gray-300">
              <li>
                <Link href="/products" className="hover:text-amber-400 transition-colors">Light Rare Earths</Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-amber-400 transition-colors">Heavy Rare Earths</Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-amber-400 transition-colors">Strategic Metals</Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-amber-400 transition-colors">Advanced Materials</Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-serif font-semibold text-amber-300 mb-4">Company</h3>
            <ul className="space-y-2 text-sm font-sans text-gray-300">
              <li>
                <Link href="/about" className="hover:text-amber-400 transition-colors">About</Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-amber-400 transition-colors">News</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-400 transition-colors">Contact</Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-amber-400 transition-colors">Privacy</Link>
              </li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div>
            <h3 className="font-serif font-semibold text-amber-300 mb-4">Get in touch</h3>
            <p className="text-gray-300 text-sm mb-4">Request quotes, samples, or technical data sheets.</p>
            <div className="flex space-x-3">
              <a href="#" aria-label="Facebook" className="text-gray-300 hover:text-amber-300 transition-colors"><FaFacebook size={18} /></a>
              <a href="#" aria-label="Twitter" className="text-gray-300 hover:text-amber-300 transition-colors"><FaTwitter size={18} /></a>
              <a href="#" aria-label="LinkedIn" className="text-gray-300 hover:text-amber-300 transition-colors"><FaLinkedin size={18} /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-400/10 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Kaytherix. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <Link href="/terms" className="hover:text-amber-300 transition-colors">Terms</Link>
            <Link href="/privacy" className="hover:text-amber-300 transition-colors">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
