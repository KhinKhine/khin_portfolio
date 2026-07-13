export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-8 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center text-sm text-gray-400 md:flex-row">
            <p>
            © {new Date().getFullYear()} Khin Kyi. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
            <a
                href="https://github.com/KhinKhine/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-fuchsia-400"
            >
                GitHub
            </a>

            <a
                href="https://linkedin.com/in/khin-kyi-kyi-khine-10a427261"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-fuchsia-400"
            >
                LinkedIn
            </a>

            <a
                href="mailto:khinkyikyikhine3991@gmail.com"
                className="transition hover:text-fuchsia-400"
            >
                Email
            </a>
            </div>
        </div>
    </footer>
  );
}