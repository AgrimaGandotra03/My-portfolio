import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { profile } from "../data/profile";
import HeroIllustration from "./HeroIllustration";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[85vh] sm:min-h-screen flex items-center px-6 sm:px-10 pt-28 sm:pt-24 pb-16 max-w-6xl mx-auto"
    >
      <div className="w-full grid md:grid-cols-[1.15fr_0.85fr] items-center gap-6 lg:gap-10">
        <div>
          <p className="font-display text-2xl sm:text-3xl text-white tracking-wide">
            HI, I'M
          </p>
          <h1 className="font-display text-[13vw] sm:text-6xl md:text-7xl leading-[1.02] text-white tracking-wide uppercase break-words">
            {profile.name}
          </h1>

          <p className="mt-5 max-w-xl text-sm sm:text-base text-white/50 leading-relaxed">
            {profile.tagline}
          </p>

          <div className="mt-7 flex items-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-3 bg-acid text-ink font-semibold text-sm px-6 py-3 rounded-full hover:brightness-95 active:scale-[0.98] transition"
            >
              CONTACT ME
              <span className="w-1.5 h-1.5 rounded-full bg-ink" aria-hidden="true" />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
              className="w-11 h-11 rounded-full border border-line bg-panel flex items-center justify-center text-white hover:border-acid hover:text-acid transition-colors"
            >
              <FaLinkedinIn size={16} />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub"
              className="w-11 h-11 rounded-full border border-line bg-panel flex items-center justify-center text-white hover:border-acid hover:text-acid transition-colors"
            >
              <FaGithub size={17} />
            </a>
          </div>
        </div>

        <div className="hidden md:block">
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
}
