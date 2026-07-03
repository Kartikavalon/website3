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
    <nav className="fixed top-0 w-full bg-gradient-to-r from-navy-600 via-primary-600 to-cyan-400 backdrop-blur-md border-b border-amber-400/30 z-50 shadow-lg">
      <div className="container mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="text-2xl font-serif font-bold text-contrast drop-shadow-md">
            Kaytherix
          </div>
          <span className="text-xs text-amber-300 font-sans uppercase tracking-widest font-semibold">Industries</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-sm font-sans text-contrast hover:text-amber-300 transition-all duration-200 uppercase tracking-wide font-medium"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="hidden md:inline-block px-6 py-2 bg-gradient-to-r from-amber-400 to-amber-500 text-navy-900 font-sans font-semibold rounded text-sm hover:shadow-glow-gold transition-all duration-300"
        >
          Get Quote
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-amber-300 hover:text-contrast transition-colors"
        >
          {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-b from-navy-700 to-navy-900 border-b border-amber-400/30">
          <ul className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-contrast hover:text-amber-300 transition-colors font-sans text-sm font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="block px-4 py-2 bg-gradient-to-r from-amber-400 to-amber-500 text-navy-900 font-sans font-semibold rounded text-sm hover:shadow-glow-gold transition-all duration-200 text-center"
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
