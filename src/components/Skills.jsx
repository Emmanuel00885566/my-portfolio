// src/components/Skills.jsx
export default function Skills() {
  const skills = {
    Frontend: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    Backend: ["Node.js", "Express", "MongoDB", "SQL"],
    Tools: ["Git", "GitHub", "Postman"],
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-indigo-600">
          Skills
        </h2>

        <div className="grid gap-10 md:grid-cols-3">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                {category}
              </h3>
              <ul className="space-y-2 text-gray-700">
                {items.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 hover:text-indigo-600 transition-colors"
                  >
                    <span className="text-indigo-500">•</span> {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}