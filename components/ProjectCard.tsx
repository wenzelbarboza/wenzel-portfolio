import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

// Project Card Component
export const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-white/60 dark:bg-gray-800/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/40 hover:border-gray-300/60 dark:hover:border-gray-600/50 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-gray-800/70"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.src}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white text-xl font-semibold mb-2">
            {project.title}
          </h3>
          <p className="text-white/90 text-sm">{project.description}</p>
        </div>
      </div>

      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-gray-200/60 dark:bg-gray-700/60 text-gray-700 dark:text-gray-200 text-xs rounded-full transition-colors duration-200 border border-gray-300/30 dark:border-gray-600/30"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex space-x-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
          >
            <Github className="w-4 h-4" />
            <span className="text-sm">Code</span>
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
          >
            <ExternalLink className="w-4 h-4" />
            <span className="text-sm">Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
};
