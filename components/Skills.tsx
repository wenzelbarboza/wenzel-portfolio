export const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Tailwind CSS",
      ],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "REST APIs", "Authentication"],
    },
    {
      title: "Database",
      skills: ["SQL", "PostgreSQL", "Drizzle ORM", "Database Design"],
    },
    {
      title: "Tools & Others",
      skills: ["Git", "VS Code", "Vercel", "npm/yarn", "Responsive Design"],
    },
  ];

  return (
    <section
      id="skills"
      className="px-6 py-20 relative bg-gray-100/30 dark:bg-gray-800/20"
    >
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern dark:bg-grid-pattern-dark opacity-10"></div>
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-light text-gray-800 dark:text-gray-100 mb-4 transition-colors duration-300">
          Skills & Technologies
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12 max-w-2xl transition-colors duration-300">
          Here are the technologies and tools I work with to bring ideas to
          life.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-white/60 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/40 transition-all duration-300 hover:bg-white/80 dark:hover:bg-gray-800/70 hover:border-gray-300/60 dark:hover:border-gray-600/50 hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4 transition-colors duration-300">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-2 bg-gray-200/60 dark:bg-gray-700/60 text-gray-700 dark:text-gray-200 text-sm rounded-lg hover:bg-gray-200/80 dark:hover:bg-gray-600/70 transition-colors duration-200 cursor-default backdrop-blur-sm border border-gray-300/30 dark:border-gray-600/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
