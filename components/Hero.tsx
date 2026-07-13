"use client";

import { motion } from "framer-motion";
import HeroMotion from "./HeroMotion";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-5 pt-28 sm:px-8 lg:px-10">
      <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-12 lg:grid-cols-2">
        {/* Left content */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-5 text-sm uppercase tracking-[0.35em] text-fuchsia-400"
          >
            Creative Engineer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="max-w-2xl text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl"
          >
            I create
            <span className="block bg-gradient-to-r from-fuchsia-400 via-purple-400 to-violet-500 bg-clip-text text-transparent">
              digital experiences
            </span>
            that feel alive.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-7 max-w-xl text-base leading-8 text-gray-400 sm:text-lg"
          >
            I am Khin Kyi, a UI/UX Designer and Frontend Engineer based in
            Japan. I design and build modern, responsive and user-friendly web
            experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#projects"
              className="rounded-full bg-white px-7 py-3 text-center font-medium text-black transition duration-300 hover:-translate-y-1 hover:bg-gray-200"
            >
              View my work
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/20 px-7 py-3 text-center font-medium text-white transition duration-300 hover:-translate-y-1 hover:border-fuchsia-400 hover:text-fuchsia-300"
            >
              Contact me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-10 flex items-center gap-6 text-sm text-gray-500"
          >
            <a
              href="https://github.com/KhinKhine/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/khin-kyi-kyi-khine-10a427261"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              LinkedIn
            </a>

            <a
              href="/KhinKyi_KyiKhine.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              Resume
            </a>
          </motion.div>
        </div>

        {/* Right motion */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="hidden lg:block"
        >
          <HeroMotion />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-xs uppercase tracking-[0.3em] text-gray-500 transition hover:text-white"
      >
        Scroll

        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mx-auto mt-3 block h-8 w-px bg-gradient-to-b from-white to-transparent"
        />
      </motion.a>
    </section>
  );
}
