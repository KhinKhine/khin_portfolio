"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    period: "2026 - Present",
    role: "Frontend Engineer / Web Designer",
    company: "Torat Co., Ltd. | Tokyo, Japan",
    description:
      "Maintain and improve company websites, enhance UI/UX, develop responsive web pages, manage WordPress websites, and support internal web systems using HTML, CSS, JavaScript, PHP, and Bootstrap, while continuing to develop practical skills in React, Next.js, and TypeScript.",
  },
  {
    period: "2024 - 2025",
    role: "Frontend Engineer",
    company: "Idealump Co., Ltd. | Tokyo, Japan",
    description:
      "Developed and maintained corporate websites, landing pages, and e-commerce websites using HTML, CSS, JavaScript, PHP, and WordPress.",
  },
  {
    period: "2019 - 2024",
    role: "Web Coder / Web Designer",
    company: "Itami Arts Co., Ltd. | Okayama, Japan",
    description:
      "Designed and developed responsive corporate websites, landing pages, and promotional websites while improving usability and user experience.",
  },
  {
    period: "2016 - 2019",
    role: "Graphic Designer",
    company: "Itami Arts Myanmar Co., Ltd. | Yangon, Myanmar",
    description:
      "Designed promotional flags, banners, catalogs, and print materials using Adobe Illustrator and Photoshop while collaborating with clients and production teams.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="px-5 py-24 sm:px-8 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-sm uppercase tracking-[0.35em] text-fuchsia-400"
        >
          Experience
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-3 text-center text-4xl font-bold sm:text-5xl"
        >
          Work Experience
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="mx-auto mt-5 h-1 w-24 origin-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
        />

        <div className="mt-14 space-y-6">
          {experiences.map((experience, index) => (
            <motion.article
              key={`${experience.company}-${experience.period}`}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
              }}
              whileHover={{ x: 8 }}
              className="grid gap-5 rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-fuchsia-500/40 md:grid-cols-[180px_1fr] md:p-8"
            >
              <p className="text-sm text-gray-500">
                {experience.period}
              </p>

              <div>
                <h3 className="text-2xl font-semibold">
                  {experience.role}
                </h3>

                <p className="mt-1 text-fuchsia-300">
                  {experience.company}
                </p>

                <p className="mt-4 max-w-3xl leading-7 text-gray-400">
                  {experience.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
