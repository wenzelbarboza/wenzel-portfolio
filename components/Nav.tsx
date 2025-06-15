"use client";
import { useTheme } from "@/context/ThemeProvider";
import { Moon, Sun } from "lucide-react";

export const Nav = () => {
  return (
    <nav className="sticky top-0  bg-gray-50/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/30 dark:border-gray-700/30 z-50 transition-all duration-300">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="font-bold text-xl text-gray-800 dark:text-gray-100">
          WB
        </div>
        <div className="flex items-center space-x-6">
          <div className="hidden md:flex space-x-8">
            <a
              href="#about"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
            >
              Projects
            </a>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

// Theme Toggle Button
const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-white/10 dark:bg-white/10 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-white/20 dark:hover:bg-white/20 transition-all duration-200 hover:scale-110 backdrop-blur-sm border border-gray-300/20 dark:border-gray-600/20"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
};
