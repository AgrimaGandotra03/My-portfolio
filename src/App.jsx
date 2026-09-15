import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-white font-body">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
      </main>
      <Footer />
    </div>
  );
}
