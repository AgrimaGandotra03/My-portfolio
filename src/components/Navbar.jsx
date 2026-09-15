import { useEffect, useState } from "react";
import { nav } from "../data/profile";

export default function Navbar({ activeSection = "home", setActiveSection }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNavClick = (sectionId) => {
    if (setActiveSection) {
      setActiveSection(sectionId);
    }
    setOpen(false);
    document
      .getElementById(sectionId)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-ink/90 backdrop-blur-sm border-b border-line"
          : "bg-ink/60 backdrop-blur-sm border-b border-line/40"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 sm:px-10 h-16">
        <button
          type="button"
          onClick={() => handleNavClick("home")}
          className="font-display text-lg tracking-wide text-white hover:opacity-90 transition-opacity cursor-pointer text-left"
          aria-label="Agrima Gandotra — home"
        >
          AG<span className="text-acid">.</span>
        </button>

        <ul className="hidden md:flex items-center gap-9">
          {nav.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id || item.href}>
                <button
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  aria-current={isActive ? "page" : undefined}
                  className={`text-sm tracking-wide transition-colors cursor-pointer py-1 relative ${
                    isActive
                      ? "text-acid font-semibold after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:right-0 after:h-[2px] after:bg-acid after:rounded-full"
                      : "font-medium text-white/90 hover:text-acid"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          className="md:hidden relative w-9 h-9 flex flex-col items-center justify-center gap-[5px] cursor-pointer"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block h-[2px] w-6 bg-white transition-transform duration-300 ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-white transition-opacity duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-white transition-transform duration-300 ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out bg-ink border-b border-line ${
          open ? "max-h-64" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-4 gap-4">
          {nav.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id || item.href}>
                <button
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  aria-current={isActive ? "page" : undefined}
                  className={`block text-left w-full text-base tracking-wide transition-colors cursor-pointer ${
                    isActive
                      ? "text-acid font-semibold"
                      : "font-medium text-white/90 hover:text-acid"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
