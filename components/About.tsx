const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "WordPress",
];

export default function About() {
  return (
    <section
      id="about"
      className="px-5 py-15 sm:px-8 lg:px-10 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-fuchsia-400">
          About me
        </p>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left side */}
          <div>
            <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
              Design thinking meets
              <span className="block text-gray-500">
                frontend development.
              </span>
            </h2>
          </div>

          {/* Right side */}
          <div>
            <p className="text-base leading-8 text-gray-400 sm:text-lg">
              I am a Web Designer and Frontend Engineer based in Japan. I
              enjoy creating clean, modern and responsive digital experiences.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-400 sm:text-lg">
              My work combines UI/UX thinking with frontend development. I
              focus on usability, visual consistency and responsive design.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
            <p className="text-sm text-gray-500">Experience</p>
            <p className="mt-3 text-3xl font-bold">Web & UI</p>
            <p className="mt-3 leading-7 text-gray-400">
              Website management, frontend development and UI improvement.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
            <p className="text-sm text-gray-500">Focus</p>
            <p className="mt-3 text-3xl font-bold">User Experience</p>
            <p className="mt-3 leading-7 text-gray-400">
              Clear layouts, accessible interfaces and responsive design.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
            <p className="text-sm text-gray-500">Currently</p>
            <p className="mt-3 text-3xl font-bold">Learning</p>
            <p className="mt-3 leading-7 text-gray-400">
              Next.js, TypeScript and modern frontend development.
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-12 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-gray-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}