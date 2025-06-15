import { Github, Linkedin } from "lucide-react";

export const Socials = () => {
  return (
    <section className="px-6 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex space-x-6">
          <a
            href="https://github.com/wenzelbarboza"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 group"
          >
            <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/wenzel-barboza-89288a219/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 group"
          >
            <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
};
