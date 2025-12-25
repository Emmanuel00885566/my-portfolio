// src/components/About.jsx
import { Code, Lightbulb, Rocket } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="bg-gray-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-indigo-400">
          About Me
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-transform hover:scale-105">
            <Code className="w-10 h-10 text-emerald-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Full-Stack Development</h3>
            <p className="text-gray-300">
              I build complete web applications, handling both frontend
              interfaces and backend logic with clean, maintainable code.
            </p>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-transform hover:scale-105">
            <Lightbulb className="w-10 h-10 text-emerald-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Problem Solving</h3>
            <p className="text-gray-300">
              I enjoy breaking down complex problems and designing practical,
              efficient solutions that scale.
            </p>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-transform hover:scale-105">
            <Rocket className="w-10 h-10 text-emerald-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Growth Mindset</h3>
            <p className="text-gray-300">
              I continuously learn and improve, adapting to new tools,
              technologies, and best practices.
            </p>
          </div>
        </div>

        <p className="mt-12 text-center text-gray-400 max-w-3xl mx-auto leading-relaxed">
          I focus on building reliable, scalable applications with strong backend
          foundations and intuitive user experiences.
        </p>
      </div>
    </section>
  );
}