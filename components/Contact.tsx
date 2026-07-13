export default function Contact() {
    return (
        <section
        id="contact"
        className="px-5 py-18 sm:px-8 lg:px-10 lg:py-15"
        >
        <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center sm:p-12">
            <p className="text-sm uppercase tracking-[0.35em] text-fuchsia-400">
            Contact
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Let's Build Something Amazing Together
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-400">
            I'm currently available for Frontend Engineer,
            Web Designer and UI/UX Designer opportunities.
            Feel free to reach out if you'd like to work together.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
                href="mailto:khinkyikyikhine3991@gmail.com"
                className="rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-gray-200"
            >
                Email Me
            </a>

            <a
                href="https://github.com/KhinKhine/"
                target="_blank"
                className="rounded-full border border-white/20 px-6 py-3 transition hover:border-fuchsia-400 hover:text-fuchsia-300"
            >
                GitHub
            </a>

            <a
                href="https://linkedin.com/in/khin-kyi-kyi-khine-10a427261"
                target="_blank"
                className="rounded-full border border-white/20 px-6 py-3 transition hover:border-fuchsia-400 hover:text-fuchsia-300"
            >
                LinkedIn
            </a>

            <a
                href="/khinkyikyikhine.pdf"
                target="_blank"
                className="rounded-full border border-white/20 px-6 py-3 transition hover:border-fuchsia-400 hover:text-fuchsia-300"
            >
                Download Resume
            </a>
            </div>
        </div>
        </section>
    );
}