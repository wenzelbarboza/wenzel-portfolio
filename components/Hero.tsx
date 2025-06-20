export const Hero = () => {
  return (
    <section id="about" className="pt-32 pb-20 px-6 relative">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern dark:bg-grid-pattern-dark opacity-30 dark:opacity-100"></div>
      </div>
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-light text-gray-800 dark:text-gray-100 mb-6 transition-colors duration-300">
            👋 Hi, I&apos;m <span className="font-medium">Wenzel Barboza</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl transition-colors duration-300">
            Full-stack developer passionate about creating elegant solutions and
            beautiful user experiences. I build modern web applications with
            clean code and thoughtful design.
          </p>
        </div>
      </div>
    </section>
  );
};
