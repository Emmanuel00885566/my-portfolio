// src/components/Hero.jsx
import React from "react";

export default function Hero() {
  return (
    <section id="hero" className="bg-gray-900 text-white h-screen flex items-center justify-center">
      <div className="container mx-auto text-center px-6">
        
        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          <img
            src="/emmanuel.jpg" // put your actual image in public/profile.jpg
            alt="Adeboye Emmanuel Oluwatosin"
            className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-gray-700 shadow-lg object-cover"
          />
        </div>

        {/* Intro Text */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hi, I'm{" "}
          <span className="text-green-400">Adeboye Emmanuel Oluwatosin</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          I'm a <span className="text-green-400">Full-Stack Developer</span> with
          expertise in JavaScript, TypeScript, Next.js, React.js, Node.js, Express, 
          MongoDB, and SQL. I build modern, scalable, and
          efficient applications.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-green-500 text-black rounded-lg shadow hover:bg-green-600 transition"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-gray-800 border border-gray-600 rounded-lg hover:bg-gray-700 transition"
          >
            Get In Touch
          </a>
          <a
            href="/Emmanuel.pdf" // place your CV in the public folder as CV.pdf
            download
            className="px-6 py-3 bg-gray-800 border border-gray-600 rounded-lg hover:bg-gray-700 transition"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
