const skills = [
  {
    category: "Frontend",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "REST APIs", "Authentication"],
  },
  {
    category: "Database",
    items: ["SQL", "PostgreSQL", "Drizzle ORM", "Database Design"],
  },
  {
    category: "Tools & Others",
    items: ["Git", "VS Code", "Vercel", "npm/yarn", "Responsive Design"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="mb-16">
      <h2 className="mb-6 text-sm font-medium uppercase tracking-wider text-muted-foreground">
        Skills
      </h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {skills.map((skill) => (
          <div key={skill.category}>
            <h3 className="mb-2 text-sm font-medium text-foreground">
              {skill.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item) => (
                <span
                  key={item}
                  className="rounded border border-border bg-secondary px-2.5 py-1 text-sm text-secondary-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
