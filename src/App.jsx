import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = [...document.querySelectorAll("main section[id]")];
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      { rootMargin: "-25% 0px -55%", threshold: [0.15, 0.35, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-ink text-white font-body flex flex-col justify-between selection:bg-acid selection:text-ink">
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <main className="flex-1 w-full">
        <Hero />
        <About />
        <Projects />
        <Resume />
      </main>
      <Footer />
    </div>
  );
}
