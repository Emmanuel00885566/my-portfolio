// src/components/Contact.jsx
export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gray-900 text-white"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-indigo-400">
          Get in Touch
        </h2>

        <p className="text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          I’m open to internships, junior roles, and collaboration opportunities. 
          Let’s connect and build something amazing together.
        </p>

        <div className="space-y-6">
          <p className="flex items-center justify-center gap-2">
            <span className="text-xl">📧</span>
            <a
              href="mailto:emmanuelniyi1997@gmail.com"
              className="text-emerald-400 font-medium hover:text-emerald-300 transition-colors"
            >
             emmanuelniyi1997@gmail.com
            </a>
          </p>

          <p className="flex items-center justify-center gap-2">
            <span className="text-xl">💼</span>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 font-medium hover:text-emerald-300 transition-colors"
            >
              LinkedIn
            </a>
          </p>

          <p className="flex items-center justify-center gap-2">
            <span className="text-xl">💻</span>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 font-medium hover:text-emerald-300 transition-colors"
            >
              GitHub
            </a>
          </p>
        </div>

        <p className="mt-12 text-sm text-gray-500">
          © {new Date().getFullYear()} Adeboye Emmanuel. All rights reserved.
        </p>
      </div>
    </section>
  );
}