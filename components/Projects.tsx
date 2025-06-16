import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const projects = [
    {
      title: "Mock App",
      description:
        "Tool for generating customizable mockups, including iPhone frames, image backgrounds, Google search previews, QR codes, and more.",
      technologies: ["Next.js", "drizzle ORM"],
      src: "https://res.cloudinary.com/del6v0im5/image/upload/v1749975074/MockPro_hhfsmc.png",
      github: "https://github.com/wenzelbarboza/MockPro",
      demo: "https://mock-pro.vercel.app/",
    },
    {
      title: "Job Search App",
      description:
        "A job search platform that enables users to browse, filter, and manage job listings. Built with full-stack technologies and features real-time updates, secure authentication, and collaborative tools for job tracking.",
      src: "https://res.cloudinary.com/del6v0im5/image/upload/v1749975074/Job-search_cilpkt.png",
      technologies: [
        "React",
        "TypeScripe",
        "Node.js",
        "Express",
        "PostgreSQL",
        "drizzle ORM",
      ],
      github: "https://github.com/wenzelbarboza/job-site",
      demo: "https://job-site-blond.vercel.app/",
    },
    {
      title: "collaborative code editor",
      description:
        "Real-time collaborative code editor with synchronous editing powered by WebSockets, enabling multiple users to code together seamlessly.",
      src: "https://res.cloudinary.com/del6v0im5/image/upload/v1749975073/CodeBridge_ynor2i.png",
      technologies: ["React", "TypeScripe", "Node.js", "Express", "WebSockets"],
      github: "https://github.com/wenzelbarboza/CodeBridge",
      // TODO: make demo optional
      demo: "https://demo.com",
    },
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with modern design and seamless user experience",
      src: "https://res.cloudinary.com/del6v0im5/image/upload/v1749975074/Ecom_bcdtf8.png",
      technologies: [
        "React",
        "TypeScripe",
        "Node.js",
        "Express",
        "PostgreSQL",
        "Stripe",
        "Prisma ORM",
      ],
      github: "https://github.com/wenzelbarboza/Ecommerce",
      demo: "https://estore-pied.vercel.app/",
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

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
