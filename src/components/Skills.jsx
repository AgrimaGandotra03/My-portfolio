import { SiPython, SiCplusplus, SiMysql, SiGithub, SiFigma, SiClaude } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { GiPowerButton } from "react-icons/gi";
import { VscVscode } from "react-icons/vsc";
import { skillset, learning, tools } from "../data/profile";

const ICONS = {
  python: <SiPython className="text-[#3776AB]" size={30} />,
  cpp: <SiCplusplus className="text-[#00599C]" size={30} />,
  mysql: <SiMysql className="text-[#4479A1]" size={30} />,
  java: <FaJava className="text-[#e76f00]" size={28} />,
  github: <SiGithub className="text-white" size={28} />,
  vscode: <VscVscode className="text-[#007ACC]" size={30} />,
  figma: <SiFigma className="text-[#F24E1E]" size={28} />,
  claude: <SiClaude className="text-[#D97757]" size={28} />,
};

function SkillCard({ name, icon }) {
  if (icon === "text") {
    return (
      <div className="border border-acid bg-panel rounded-lg h-24 flex items-center justify-center px-3">
        <span className="text-white text-sm font-medium text-center">{name}</span>
      </div>
    );
  }

  if (icon === "spring") {
    return (
      <div className="border border-acid bg-panel rounded-lg h-24 flex items-center justify-center">
        <span
          className="w-12 h-12 flex items-center justify-center"
          style={{
            backgroundColor: "#bae0bd",
            clipPath:
              "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)",
          }}
          aria-label="Spring Boot"
        >
          <GiPowerButton className="text-[#1a1a1a]" size={22} />
        </span>
      </div>
    );
  }

  return (
    <div className="border border-acid bg-panel rounded-lg h-24 flex items-center justify-center">
      {ICONS[icon]}
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-6 sm:px-10 py-16 max-w-6xl mx-auto w-full"
    >
      <div className="w-full flex flex-col items-center">
        <h2 className="font-display text-2xl sm:text-3xl text-white tracking-wide mb-8 text-center">
          SKILLSET
        </h2>
        <div className="grid grid-cols-3 gap-4 sm:gap-6 w-full max-w-md mb-12">
          {skillset.map((s) => (
            <SkillCard key={s.name} {...s} />
          ))}
        </div>

        <h2 className="font-display text-2xl sm:text-3xl text-white tracking-wide mb-8 text-center">
          SKILLS I AM LEARNING
        </h2>
        <div className="grid grid-cols-3 gap-4 sm:gap-6 w-full max-w-md mb-12">
          {learning.map((s) => (
            <SkillCard key={s.name} {...s} />
          ))}
        </div>

        <h2 className="font-display text-2xl sm:text-3xl text-white tracking-wide mb-8 text-center">
          TOOLS I USE
        </h2>
        <div className="grid grid-cols-4 gap-3 sm:gap-6 w-full max-w-md">
          {tools.map((t) => (
            <SkillCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
