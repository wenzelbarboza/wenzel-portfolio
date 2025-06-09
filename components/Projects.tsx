import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with modern design and seamless user experience",
      src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=3000&auto=format&fit=crop",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative project management tool with real-time updates and team features",
      src: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=3000&auto=format&fit=crop",
      technologies: ["TypeScript", "React", "Express", "Socket.io"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Weather Dashboard",
      description:
        "Beautiful weather application with detailed forecasts and location-based insights",
      src: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=3000&auto=format&fit=crop",
      technologies: ["JavaScript", "REST API", "Chart.js", "CSS"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Social Media Dashboard",
      description:
        "Analytics dashboard for social media management with comprehensive metrics",
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=3000&auto=format&fit=crop",
      technologies: ["React", "D3.js", "Node.js", "MongoDB"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "AI Chat Interface",
      description:
        "Modern chat interface with AI integration and real-time conversation features",
      src: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=3000&auto=format&fit=crop",
      technologies: ["React", "Python", "WebSockets", "OpenAI API"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Portfolio Website",
      description:
        "Responsive portfolio website showcasing modern design principles and smooth animations",
      src: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=3000&auto=format&fit=crop",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vercel"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
  ];

  return (
    <section id="projects" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light text-gray-800 dark:text-gray-100 mb-4 transition-colors duration-300">
          Projects
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12 max-w-2xl transition-colors duration-300">
          Here are some of my recent projects that showcase my skills in
          full-stack development, UI/UX design, and modern web technologies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
