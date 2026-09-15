// ---------------------------------------------------------------------------
// ALL YOUR PORTFOLIO CONTENT LIVES HERE.
// Edit this file to update your info — every section reads from this data.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Agrima Gandotra",
  tagline:
    "A second-year B.Tech CSE (CC) student at SRM IST, Ramapuram, passionate about web development and building impactful digital experiences.",
  motto: "EAT SLEEP CODE",
  email: "agrimagandotra03@gmail.com",
  phone: "817198702",
  location: "Chennai, India",
  linkedin: "https://linkedin.com/in/agrima-gandotra-305813425/",
  github: "https://github.com/AgrimaGandotra03",
};

export const about = {
  paragraphs: [
    [
      "I'm ",
      { text: "Agrima Gandotra", highlight: true },
      ", originally from Uttar Pradesh and brought up in Chennai, India.",
    ],
    [
      "I'm a second-year B.Tech Computer Science Engineering (Cloud Computing) student at SRM Institute of Science and Technology, Chennai, with a CGPA of 9.91.",
    ],
    [
      "I aspire to become a ",
      { text: "backend developer", highlight: true },
      " while building a strong ",
      { text: "understanding of AI technologies, particularly LLMs and RAG", highlight: true },
      ". I'm also keen to explore cloud computing and scalable application development using technologies like ",
      { text: "AWS, Docker, and Kubernetes", highlight: true },
      ".",
    ],
    ["Beyond code, I enjoy travelling, exploring different cultures, and experiencing their food."],
  ],
  education: [
    {
      degree: "B.Tech CSE (CC)",
      school: "SRM University, Ramapuram, Chennai",
      meta: "1st Year CGPA: 9.91",
    },
    {
      degree: "Xth & XIIth",
      school: "Velammal Vidyalaya Annexure",
      meta: "CBSE Score: 96% Xth, 92.8% XIIth",
    },
  ],
};

export const skillset = [
  { name: "Python", icon: "python" },
  { name: "C++", icon: "cpp" },
  { name: "MySQL", icon: "mysql" },
];

export const learning = [
  { name: "DSA in C++", icon: "text" },
  { name: "Java", icon: "java" },
  { name: "Spring Boot", icon: "spring" },
];

export const tools = [
  { name: "GitHub", icon: "github" },
  { name: "VS Code", icon: "vscode" },
  { name: "Figma", icon: "figma" },
  { name: "Claude", icon: "claude" },
];

export const projects = [
  {
    title: "Currently Building",
    description:
      "Currently learning how APIs, databases, and server-side logic work together.",
    placeholder: true,
  },
];

export const resume = {
  quote: "Impossible is only a mindset.",
  file: "/resume/Agrima_Gandotra_Resume.pdf",
  preview: "/resume/resume-preview.png",
};

export const nav = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "PROJECTS", href: "#projects" },
  { label: "RESUME", href: "#resume" },
];
