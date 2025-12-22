// src/components/About.jsx
import React from "react";
import { Code, Lightbulb, Rocket } from "lucide-react"; // icons

export default function About() {
  return (
    <section id="about" className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Card 1 */}
          <div className="bg-gray-800 rounded-xl p-6 shadow hover:shadow-lg transition">
            <Code className="w-10 h-10 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Full-Stack Expertise</h3>
            <p className="text-gray-300">
              I specialize in building robust and scalable web applications from 
              front to back. My expertise spans modern frontend frameworks like 
              React/Next.js and powerful backend technologies such as Node.js, 
              Python, and various databases.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-800 rounded-xl p-6 shadow hover:shadow-lg transition">
            <Lightbulb className="w-10 h-10 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Problem Solver</h3>
            <p className="text-gray-300">
              I thrive on tackling complex challenges and transforming ideas into 
              functional, elegant solutions. I’m passionate about clean code, 
              efficient algorithms, and delivering high-quality software.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-800 rounded-xl p-6 shadow hover:shadow-lg transition">
            <Rocket className="w-10 h-10 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Continuous Learner</h3>
            <p className="text-gray-300">
              The tech landscape is ever-evolving, and I’m committed to staying 
              current with the latest trends and best practices. I constantly 
              explore new technologies to enhance my skills and build innovative 
              products.
            </p>
          </div>
        </div>

        {/* Bottom Text */}
        <p className="mt-12 text-center text-lg text-gray-300 max-w-4xl mx-auto">
          Full-stack developer with expertise in 
          <span className="text-green-400"> JavaScript, TypeScript, Next.js, React.js, Node.js, Python (Django & Flask), MongoDB, and SQL</span>. 
          Skilled in building scalable, high-performance applications with a strong 
          focus on clean architecture, seamless user experience, and efficient backend systems.
        </p>
      </div>
    </section>
  );
}
