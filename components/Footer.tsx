import { Github, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-100/50 dark:bg-gray-800/30 backdrop-blur-sm px-6 py-12 transition-colors duration-300 border-t border-gray-200/50 dark:border-gray-700/30">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-light mb-4 text-gray-800 dark:text-gray-100">
          Let&apos;s work together
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-8 transition-colors duration-300">
          I&apos;m always open to discussing new opportunities and interesting
          projects.
        </p>
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="mailto:wenzel.audrin@gmail.com"
            className="bg-white/60 dark:bg-gray-700/60 text-gray-800 dark:text-gray-100 px-6 py-3 rounded-full hover:bg-white/80 dark:hover:bg-gray-600/70 transition-colors duration-200 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/40"
          >
            Get in touch
          </a>
        </div>
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/wenzelbarboza"
            target="_blank"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/wenzel-barboza-89288a219/"
            target="_blank"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200/50 dark:border-gray-700/30 text-gray-500 dark:text-gray-400 text-sm transition-colors duration-300">
          © 2025 Wenzel Barboza. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
