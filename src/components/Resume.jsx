import { resume } from "../data/profile";

export default function Resume() {
  return (
    <section id="resume" className="px-6 sm:px-10 py-20">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <h2 className="font-display text-2xl sm:text-3xl text-white tracking-wide mb-10">
          RESUME
        </h2>

        <a
          href={resume.file}
          target="_blank"
          rel="noreferrer noopener"
          className="block w-full max-w-xs sm:max-w-sm rounded-md overflow-hidden border border-line shadow-[0_0_40px_-10px_rgba(198,242,78,0.15)] hover:border-acid/50 transition-colors"
          aria-label="Open resume PDF in a new tab"
        >
          <img
            src={resume.preview}
            alt="Preview of Agrima Gandotra's resume"
            className="w-full h-auto bg-white"
          />
        </a>

        <a
          href={resume.file}
          download
          className="mt-6 inline-flex items-center gap-2 border border-line rounded-full px-6 py-2.5 text-sm font-medium text-white hover:border-acid hover:text-acid transition-colors"
        >
          Download Resume
        </a>

        {resume.quote && (
          <blockquote className="mt-14 max-w-lg">
            <p className="font-display text-xl sm:text-2xl text-white leading-snug">
              <span className="text-acid">&ldquo;</span>
              {resume.quote}
              <span className="text-acid">&rdquo;</span>
            </p>
          </blockquote>
        )}
      </div>
    </section>
  );
}
