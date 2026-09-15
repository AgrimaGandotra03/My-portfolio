import { about, profile } from "../data/profile";
import AboutAvatar from "./AboutAvatar";

function Paragraph({ parts }) {
  return (
    <p className="text-sm sm:text-base leading-relaxed text-white/70">
      {parts.map((part, i) =>
        typeof part === "string" ? (
          <span key={i}>{part}</span>
        ) : (
          <span
            key={i}
            className={part.highlight ? "text-acid font-medium" : ""}
          >
            {part.text}
          </span>
        ),
      )}
    </p>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-6 sm:px-10 py-16 max-w-6xl mx-auto w-full"
    >
      <div className="w-full">
        <h2 className="font-display text-2xl sm:text-3xl text-white tracking-wide mb-8">
          About me
        </h2>

        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-3 flex flex-col gap-5">
            {about.paragraphs.map((parts, i) => (
              <Paragraph key={i} parts={parts} />
            ))}
          </div>

          <div className="md:col-span-2 flex flex-col items-center justify-center gap-6 py-4">
            <AboutAvatar />
            <p className="font-display text-lg sm:text-xl tracking-[0.3em] text-acid">
              <span className="typewriter">{profile.motto}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
