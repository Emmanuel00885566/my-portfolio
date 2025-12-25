// src/components/Hero.jsx
import React from "react";
import profileImg from "../assets/images/emmanuel.jpg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-brand-dark text-brand-text flex items-center justify-center pt-20"
    >
      <div className="max-w-4xl mx-auto text-center px-6">
        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          <img
            src={profileImg}
            alt="Adeboye Emmanuel"
            className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-brand-accent shadow-xl object-cover"
          />
        </div>

        {/* Intro */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Hi, I’m{" "}
          <span className="text-brand-accent">Adeboye Emmanuel</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
          Full-Stack Developer focused on building scalable web applications and
          reliable backend systems using modern JavaScript technologies.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-brand-accent text-white rounded-full shadow hover:bg-emerald-600 transition-transform hover:scale-105"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-brand-accent rounded-full text-brand-accent hover:bg-brand-accent hover:text-white transition-transform hover:scale-105"
          >
            Contact Me
          </a>

          <a
            href="/Emmanuel.pdf"
            download
            className="px-6 py-3 border border-brand-accent rounded-full text-brand-accent hover:bg-brand-accent hover:text-white transition-transform hover:scale-105"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}