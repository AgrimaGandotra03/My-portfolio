import { projects } from "../data/profile";

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-[calc(100vh-4rem)] px-6 sm:px-10 py-16 max-w-6xl mx-auto w-full flex flex-col items-center justify-center text-center"
    >
      <div className="w-full max-w-2xl flex flex-col items-center">
        <h2 className="font-display text-2xl sm:text-3xl text-white tracking-wide mb-12">
          PROJECTS
        </h2>

        <div className="flex flex-col gap-6 w-full max-w-xl">
          {projects.map((p) => (
            <div
              key={p.title}
              className="border border-dashed border-line rounded-xl p-8"
            >
              <h3 className="text-white/80 font-semibold text-lg">{p.title}</h3>
              <p className="text-white/50 text-sm mt-2">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
