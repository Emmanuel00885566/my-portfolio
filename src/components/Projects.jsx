// src/components/Projects.jsx
import projectsData from "../data/projectsData";

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-indigo-400">
          Projects
        </h2>

        <div className="grid gap-10 md:grid-cols-2">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-transform hover:scale-105"
            >
              {/* Project Title */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-emerald-400">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <p className="text-sm text-gray-400 mb-6">
                  <strong className="text-indigo-300">Tech:</strong>{" "}
                  {project.tech.join(", ")}
                </p>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-emerald-500 text-white rounded-full shadow hover:bg-emerald-600 transition"
                  >
                    GitHub
                  </a>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-emerald-500 text-emerald-400 rounded-full hover:bg-emerald-500 hover:text-white transition"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}