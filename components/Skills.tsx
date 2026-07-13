"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "HTML / CSS", level: 90 },
  { name: "JavaScript", level: 75 },
  { name: "TypeScript", level: 55 },
  { name: "React", level: 60 },
  { name: "Next.js", level: 55 },
  { name: "Tailwind CSS", level: 65 },
  { name: "WordPress", level: 85 },
  { name: "PHP", level: 60 },
  { name: "Bootstrap", level: 80 },
  { name: "Figma", level: 70 },
  { name: "Illustrator", level: 85 },
  { name: "Photoshop", level: 80 },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden px-5 py-24 sm:px-8 lg:px-10"
    >
      <div className="absolute left-1/2 top-1/2 -z-10 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-sm uppercase tracking-[0.35em] text-fuchsia-400"
        >
          Skills
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-3 text-center text-4xl font-bold sm:text-5xl"
        >
          My Skills
        </motion.h2>

        <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skills.map((skill, index) => (
            <motion.article
              key={skill.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-fuchsia-500/40"
            >
              <h3 className="text-center text-xl font-semibold">
                {skill.name}
              </h3>

              <div className="mt-6 h-3 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: 0.3,
                  }}
                  className="h-full rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-pink-500"
                />
              </div>

              <p className="mt-3 text-right text-sm text-gray-400">
                {skill.level}%
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}