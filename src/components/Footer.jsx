import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="snap-start bg-[#111111] px-4 sm:px-6 py-2 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex-1 min-w-0">
          <div className="flex items-end gap-2 leading-none">
            <div
              className="font-serif italic tracking-[-0.08em] text-[clamp(1.35rem,2.2vw,2.4rem)] text-white/90"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              poRTfolio
            </div>
            <span className="text-[8px] sm:text-[10px] font-medium tracking-[0.1em] text-[#c6f24e]">
              2026
            </span>
          </div>

          <p
            className="text-[10px] sm:text-xs italic text-white/90"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            by <span className="text-[#c6f24e]">Agrima</span>
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}`}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Email"
            className="w-7 h-7 rounded-full border border-line flex items-center justify-center text-white hover:border-acid hover:text-acid transition-colors"
          >
            <HiOutlineMail size={17} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            className="w-7 h-7 rounded-full border border-line flex items-center justify-center text-white hover:border-acid hover:text-acid transition-colors"
          >
            <FaLinkedinIn size={15} />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="w-7 h-7 rounded-full border border-line flex items-center justify-center text-white hover:border-acid hover:text-acid transition-colors"
          >
            <FaGithub size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
