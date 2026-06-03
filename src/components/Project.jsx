import React from 'react';
// import { Github as GitHubIcon } from "lucide-react";
// import * as Icons from "lucide-react";
 import img from './LearnQura.png';
import image from './BazaarHUB.png';

const Projects = () => {
  const projects = [
    {
      title: "LearnQuora",
      description: "An e-learning platform that offers courses and study materials for students. Includes features such as interactive quizzes, progress tracking, and certificate generation.",
      technologies: ["React.js", "Node.js", "MongoDB", "TailwindCSS"],
      githubUrl: "https://github.com/vikramks95/LearnQuora.git",
      liveUrl: "https://learn-quora-9ew9.vercel.app/",
      image: img,

    },
    {
      title: "BazaarHub",
      description: "Built Ecomzy, a full-stack e-commerce application allowing users to browse products, view details, and add items to the shopping cart for a seamless purchasing experience.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "MongoDB", "TailwindCSS"],
      githubUrl: "https://github.com/vikramks95/byte-bazar.git",
      liveUrl: "https://byte-bazar-ayao.vercel.app/",
      image: image,
    }
  
    
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Showcasing my web development work and the technologies I've used.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition border border-slate-700 hover:border-cyan-400/50">
                <div className="h-48  from-slate-700 to-slate-800 flex items-center justify-center text-6xl border-b border-slate-700">                
                  <img
                    src={project.image}
                    alt={project.title}
                   className="w-full h-full object-cover"
                  />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-slate-700 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium border border-cyan-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 border border-slate-600 text-gray-300 px-4 py-2 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition"
                    >
                      {/* <GitHubIcon size={18} /> */}
                      Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-cyan-400 text-slate-900 px-4 py-2 rounded-lg hover:bg-cyan-500 transition font-semibold"
                    >
                      {/* <ArrowUpRight size={18} /> */}
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
};

export default Projects;