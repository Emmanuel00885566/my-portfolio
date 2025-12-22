// src/components/Projects.jsx
import React from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern personal portfolio built with React.js and TailwindCSS to showcase my skills, projects, and resume.",
    image: "/projects/portfolio.png", // put your screenshot in public/projects/
    link: "https://olatayo-portifolio.vercel.app/",
  },
  {
    title: "E-Commerce Store",
    description:
      "A full-stack e-commerce application with product listings, shopping cart, and checkout.",
    image: "/projects/ecommerce.png",
    link: "https://github.com/yourusername/ecommerce-app", // replace with GitHub or live demo
  },
  {
    title: "Task Manager App",
    description:
      "A task management app with user authentication and CRUD operations using MongoDB.",
    image: "/projects/taskmanager.png",
    link: "https://github.com/yourusername/task-manager", // replace with GitHub or live demo
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 rounded-xl overflow-hidden shadow hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <span className="inline-flex items-center text-green-400 hover:underline">
                  View Project <ExternalLink className="ml-2 w-4 h-4" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
