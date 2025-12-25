// src/components/Navbar.jsx
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "Skills", href: "#skills" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-brand-dark/90 backdrop-blur-md shadow-md font-sans">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="font-heading text-brand-accent text-2xl tracking-wide hover:text-emerald-400 transition-colors"
        >
          ADEBOYE EMMANUEL
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 font-medium text-gray-300">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-brand-accent transition-colors duration-200"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 text-2xl focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? "×" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center bg-brand-dark/95 backdrop-blur-lg shadow-lg py-6 space-y-6 font-medium text-gray-300">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="hover:text-brand-accent transition-colors duration-200"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}