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
