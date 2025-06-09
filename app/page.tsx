"use client";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Socials } from "@/components/Socials";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/context/ThemeProvider";

// Main App Component
export default function Portfolio() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        {/* CSS for Grid Pattern */}
        <style jsx global>{`
          .bg-grid-pattern {
            background-image: linear-gradient(
                rgba(0, 0, 0, 0.05) 1px,
                transparent 1px
              ),
              linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
            background-size: 20px 20px;
          }
          .bg-grid-pattern-dark {
            background-image: linear-gradient(
                rgba(255, 255, 255, 0.05) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(255, 255, 255, 0.05) 1px,
                transparent 1px
              );
            background-size: 20px 20px;
          }
        `}</style>
        <Nav />
        <Hero />
        <Socials />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
