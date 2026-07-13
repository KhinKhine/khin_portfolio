"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-5 sm:px-8 lg:px-10">
      <div className="mx-auto mt-5 max-w-7xl rounded-3xl border border-white/10 bg-black/60 px-6 py-4 shadow-xl backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <a
            href="#"
            className="bg-gradient-to-r from-fuchsia-400 to-purple-500 bg-clip-text text-2xl font-extrabold text-transparent"
          >
            KhinKyi
          </a>

          <nav className="hidden md:block">
            <ul className="flex items-center gap-8 text-sm font-medium">
              <li>
                <a
                  href="#about"
                  className="transition hover:text-fuchsia-400"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#skills"
                  className="transition hover:text-fuchsia-400"
                >
                  Skills
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="transition hover:text-fuchsia-400"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#experience"
                  className="transition hover:text-fuchsia-400"
                >
                  Experience
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="transition hover:text-fuchsia-400"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="relative h-8 w-8 md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            <span
              className={`absolute left-1 top-2 h-0.5 w-6 bg-white transition duration-300 ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />

            <span
              className={`absolute left-1 top-4 h-0.5 w-6 bg-white transition duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`absolute left-1 top-6 h-0.5 w-6 bg-white transition duration-300 ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {isOpen && (
          <nav className="mt-5 border-t border-white/10 pt-5 md:hidden">
            <ul className="flex flex-col gap-4 text-sm font-medium">
              <li>
                <a
                  href="#about"
                  onClick={closeMenu}
                  className="block transition hover:text-fuchsia-400"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#skills"
                  onClick={closeMenu}
                  className="block transition hover:text-fuchsia-400"
                >
                  Skills
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  onClick={closeMenu}
                  className="block transition hover:text-fuchsia-400"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#experience"
                  onClick={closeMenu}
                  className="block transition hover:text-fuchsia-400"
                >
                  Experience
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="block transition hover:text-fuchsia-400"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}