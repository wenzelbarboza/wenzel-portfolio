import Link from "next/link"

const projects = [
  {
    title: "Mock App",
    description:
      "Tool for generating customizable mockups, including iPhone frames, image backgrounds, Google search previews, QR codes, and more.",
    tech: ["Next.js", "Drizzle ORM"],
    link: "https://github.com/wenzelbarboza/MockPro",
    demo: "https://mock-pro.vercel.app/",
  },
  {
    title: "Job Search App",
    description:
      "A job search platform that enables users to browse, filter, and manage job listings. Built with full-stack technologies and features real-time updates, secure authentication, and collaborative tools for job tracking.",
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Drizzle ORM",
    ],
    link: "https://github.com/wenzelbarboza/job-site",
    demo: "https://job-site-blond.vercel.app/",
  },
  {
    title: "Collaborative Code Editor",
    description:
      "Real-time collaborative code editor with synchronous editing powered by WebSockets, enabling multiple users to code together seamlessly.",
    tech: ["React", "TypeScript", "Node.js", "Express", "WebSockets"],
    link: "https://github.com/wenzelbarboza/CodeBridge",
    demo: "",
  },
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with modern design and seamless user experience.",
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Stripe",
      "Prisma ORM",
    ],
    link: "https://github.com/wenzelbarboza/Ecommerce",
    demo: "https://estore-pied.vercel.app/",
  },
]
export function Projects() {
  return (
    <section id="projects" className="mb-16">
      <h2 className="mb-6 text-sm font-medium uppercase tracking-wider text-muted-foreground">
        Projects
      </h2>
      <div className="space-y-4">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group relative -mx-4 rounded-2xl p-4 transition-all duration-300 hover:bg-secondary/40 dark:hover:bg-secondary/20"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-base font-medium text-foreground transition-colors group-hover:text-primary">
                  {project.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded border border-border bg-secondary/50 px-2 py-0.5 text-xs text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex shrink-0 gap-3 text-sm">
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground underline underline-offset-4 hover:text-foreground transition-colors"
                >
                  Code
                </Link>
                {project.demo && (
                  <Link
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground underline underline-offset-4 hover:text-foreground transition-colors"
                  >
                    Demo
                  </Link>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
