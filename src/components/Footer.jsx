import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="bg-[#1c1c1c] px-6 sm:px-10 py-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-white/50 text-sm text-center sm:text-left">
          &copy; {new Date().getFullYear()} {profile.name}. Built with care.
        </p>

        <div className="flex items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="w-10 h-10 rounded-full border border-line flex items-center justify-center text-white hover:border-acid hover:text-acid transition-colors"
          >
            <HiOutlineMail size={17} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            className="w-10 h-10 rounded-full border border-line flex items-center justify-center text-white hover:border-acid hover:text-acid transition-colors"
          >
            <FaLinkedinIn size={15} />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="w-10 h-10 rounded-full border border-line flex items-center justify-center text-white hover:border-acid hover:text-acid transition-colors"
          >
            <FaGithub size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
