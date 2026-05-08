"use client";

import { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Industries", href: "/industries" },
    { name: "Manufacturing", href: "/manufacturing" },
    { name: "News", href: "/news" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="container mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="text-2xl font-serif font-bold text-primary-600">
            Kaytherix
          </div>
          <span className="text-xs text-slate-400 font-sans uppercase tracking-widest">Industries</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-sm font-sans text-gray-600 hover:text-primary-600 transition-colors duration-200 uppercase tracking-wide"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="hidden md:inline-block px-6 py-2 bg-primary-600 text-slate-950 font-sans font-semibold rounded text-sm hover:bg-primary-500 transition-all duration-200"
        >
          Get Quote
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-300 hover:text-primary-600 transition-colors"
        >
          {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-50 border-b border-gray-200">
          <ul className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-gray-700 hover:text-primary-600 transition-colors font-sans text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="block px-4 py-2 bg-primary-600 text-slate-950 font-sans font-semibold rounded text-sm hover:bg-primary-500 transition-all duration-200 text-center"
                onClick={() => setIsOpen(false)}
              >
                Get Quote
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
