// src/components/Navbar.jsx
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-indigo-700 font-bold text-xl">
          ADEBOYE EMMANUEL
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 font-medium text-gray-800">
          <li>
            <a href="#hero" className="hover:text-lime-500 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-lime-500 transition">
              Skills
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-lime-500 transition">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-lime-500 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-lime-500 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <span className="text-2xl">&times;</span> // close icon
          ) : (
            <span className="text-2xl">&#9776;</span> // hamburger
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center bg-white shadow-lg py-4 space-y-3 font-medium text-gray-800">
          <li>
            <a
              href="#hero"
              className="hover:text-lime-500 transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="hover:text-lime-500 transition"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-lime-500 transition"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-lime-500 transition"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-lime-500 transition"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
