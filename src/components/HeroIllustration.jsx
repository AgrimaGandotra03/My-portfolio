// Original illustration (not traced from any reference) — girl coding at a desk,
// built to match the site's own lime/dark color palette, with a few small
// CSS-driven animations (floating bubbles, glowing screen, blinking cursor).

const dots = [
  { x: 30, y: 40, r: 2.2, delay: "0s" },
  { x: 480, y: 60, r: 1.8, delay: "0.4s" },
  { x: 60, y: 480, r: 2, delay: "0.8s" },
  { x: 470, y: 470, r: 2.4, delay: "1.2s" },
  { x: 250, y: 20, r: 1.6, delay: "0.6s" },
  { x: 20, y: 250, r: 1.8, delay: "1.6s" },
  { x: 500, y: 300, r: 2, delay: "0.2s" },
  { x: 150, y: 500, r: 1.6, delay: "1s" },
  { x: 400, y: 30, r: 1.8, delay: "1.8s" },
  { x: 90, y: 150, r: 1.4, delay: "0.9s" },
];

export default function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 520 540"
      className="w-full h-auto max-w-md mx-auto select-none"
      role="img"
      aria-label="Illustration of a girl sitting at a desk, coding on a laptop"
    >
      {/* background scatter */}
      {dots.map((d, i) => (
        <circle
          key={i}
          cx={d.x}
          cy={d.y}
          r={d.r}
          fill="#c6f24e"
          className="anim-twinkle"
          style={{ animationDelay: d.delay }}
        />
      ))}

      {/* connecting lines from bubbles to the girl */}
      <g stroke="#3a3a2a" strokeWidth="1.5" strokeDasharray="4 5" fill="none" opacity="0.7">
        <path d="M120,110 Q180,150 235,215" />
        <path d="M255,55 Q258,110 260,205" />
        <path d="M390,95 Q330,140 290,205" />
        <path d="M430,215 Q370,220 315,235" />
        <path d="M90,215 Q150,220 205,235" />
      </g>

      {/* floating skill bubbles */}
      <g className="anim-float" style={{ transformOrigin: "120px 90px" }}>
        <rect x="80" y="65" width="80" height="50" rx="14" fill="#1c1c1c" stroke="#c6f24e" strokeWidth="1.5" />
        <text x="120" y="96" textAnchor="middle" fontFamily="Poppins, sans-serif" fontWeight="600" fontSize="16" fill="#c6f24e">
          {"{ }"}
        </text>
      </g>

      <g className="anim-float-slow" style={{ transformOrigin: "255px 40px" }}>
        <rect x="215" y="18" width="80" height="46" rx="23" fill="#c6f24e" />
        <text x="255" y="47" textAnchor="middle" fontFamily="Poppins, sans-serif" fontWeight="700" fontSize="15" fill="#0a0a0a">
          PY
        </text>
      </g>

      <g className="anim-float-sm" style={{ transformOrigin: "390px 75px" }}>
        <rect x="350" y="52" width="80" height="48" rx="14" fill="#1c1c1c" stroke="#c6f24e" strokeWidth="1.5" />
        <text x="390" y="82" textAnchor="middle" fontFamily="Poppins, sans-serif" fontWeight="600" fontSize="15" fill="#c6f24e">
          C++
        </text>
      </g>

      <g className="anim-float" style={{ transformOrigin: "440px 195px" }}>
        <circle cx="440" cy="195" r="34" fill="#c6f24e" />
        <text x="440" y="200" textAnchor="middle" fontFamily="Poppins, sans-serif" fontWeight="700" fontSize="13" fill="#0a0a0a">
          SQL
        </text>
      </g>

      <g className="anim-float-slow" style={{ transformOrigin: "80px 195px" }}>
        <circle cx="80" cy="195" r="34" fill="#c6f24e" />
        {/* database cylinder icon representing a vector database */}
        <g stroke="#0a0a0a" strokeWidth="2.4" fill="none" strokeLinecap="round">
          <ellipse cx="80" cy="183" rx="13" ry="5" />
          <path d="M67,183 L67,207 A13,5 0 0,0 93,207 L93,183" />
          <path d="M67,195 A13,5 0 0,0 93,195" />
        </g>
        {/* small vector nodes/dots hinting at embeddings, orbiting the cylinder */}
        <circle cx="60" cy="176" r="2.5" fill="#0a0a0a" />
        <circle cx="100" cy="180" r="2.5" fill="#0a0a0a" />
        <circle cx="96" cy="212" r="2.5" fill="#0a0a0a" />
        <path d="M62,177 L69,184" stroke="#0a0a0a" strokeWidth="1.4" />
        <path d="M98,181 L91,187" stroke="#0a0a0a" strokeWidth="1.4" />
        <path d="M94,210 L88,203" stroke="#0a0a0a" strokeWidth="1.4" />
      </g>

      {/* plant */}
      <g>
        <path d="M55,430 L120,430 L112,470 L63,470 Z" fill="#1c1c1c" stroke="#3a3a2a" strokeWidth="1.5" />
        <path d="M87,430 C87,395 60,385 45,395 C60,400 75,415 87,430 Z" fill="#8fc73e" />
        <path d="M87,430 C87,390 115,378 132,390 C114,395 97,412 87,430 Z" fill="#c6f24e" />
        <path d="M87,430 C80,405 90,385 87,360 C100,385 100,412 87,430 Z" fill="#a6da4a" />
      </g>

      {/* chair */}
      <path
        d="M175,225 Q175,185 260,185 Q345,185 345,225 L345,400 Q345,415 330,415 L190,415 Q175,415 175,400 Z"
        fill="#1c1c1c"
        stroke="#3a3a2a"
        strokeWidth="1.5"
      />

      {/* ---- girl (body + head), drawn before the desk/laptop so the desk sits in front of her lap ---- */}
      <g className="anim-type" style={{ transformOrigin: "260px 300px" }}>
        {/* torso */}
        <path
          d="M205,298 Q205,263 260,263 Q315,263 315,298 L315,400 L205,400 Z"
          fill="#c6f24e"
        />
        {/* collar */}
        <path d="M245,266 L260,288 L275,266" fill="none" stroke="#0a0a0a" strokeWidth="3" strokeLinecap="round" />
        {/* neck */}
        <rect x="248" y="236" width="24" height="24" fill="#f0c9a0" />
        {/* head */}
        <circle cx="260" cy="213" r="40" fill="#f0c9a0" />
        {/* hair back (bob shape, longer at the sides) */}
        <path
          d="M218,215 Q212,150 260,146 Q308,150 302,215 Q302,230 293,236 Q300,190 260,184 Q220,190 227,236 Q218,230 218,215 Z"
          fill="#2a2018"
        />
        {/* side-swept fringe */}
        <path d="M221,192 Q260,164 299,192 Q297,176 260,173 Q223,176 221,192 Z" fill="#2a2018" />
        {/* small side ponytail */}
        <path d="M300,190 Q322,205 313,240 Q303,222 296,205 Z" fill="#2a2018" />
        {/* glasses */}
        <g stroke="#1c1c1c" strokeWidth="2.5" fill="none">
          <circle cx="246" cy="214" r="11" />
          <circle cx="276" cy="214" r="11" />
          <path d="M257,214 L265,214" />
        </g>
        {/* smile */}
        <path d="M251,230 Q260,236 269,230" stroke="#8a5a3a" strokeWidth="2" strokeLinecap="round" fill="none" />
      </g>

      {/* desk (sits in front of the girl's lap) */}
      <rect x="140" y="378" width="280" height="4" fill="#3a3a2a" />
      <rect x="115" y="382" width="330" height="16" rx="3" fill="#c6f24e" />
      <rect x="115" y="398" width="330" height="8" fill="#9fb63c" />
      <rect x="140" y="406" width="12" height="90" fill="#1c1c1c" />
      <rect x="400" y="406" width="12" height="90" fill="#1c1c1c" />

      {/* laptop, in front of the desk edge */}
      <g>
        <rect x="222" y="366" width="86" height="10" rx="2" fill="#e7e7e2" />
        <g transform="rotate(-3 265 318)">
          <rect x="222" y="298" width="86" height="66" rx="4" fill="#1c1c1c" stroke="#3a3a2a" strokeWidth="1.5" />
          <rect x="229" y="305" width="72" height="52" rx="2" fill="#0f150a" />
          <rect x="235" y="312" width="34" height="3" fill="#c6f24e" className="anim-glow" />
          <rect x="235" y="319" width="50" height="3" fill="#6f8a33" />
          <rect x="235" y="326" width="26" height="3" fill="#c6f24e" className="anim-glow" style={{ animationDelay: "0.6s" }} />
          <rect x="235" y="333" width="44" height="3" fill="#6f8a33" />
          <rect x="235" y="340" width="16" height="3" fill="#c6f24e" className="anim-blink" />
        </g>
      </g>

      {/* arms + hands, on top of the laptop keyboard */}
      <g className="anim-type" style={{ transformOrigin: "260px 300px" }}>
        <path d="M212,318 Q200,345 220,368" stroke="#f0c9a0" strokeWidth="15" strokeLinecap="round" fill="none" />
        <path d="M308,318 Q320,345 300,368" stroke="#f0c9a0" strokeWidth="15" strokeLinecap="round" fill="none" />
        <circle cx="221" cy="370" r="8" fill="#f0c9a0" />
        <circle cx="299" cy="370" r="8" fill="#f0c9a0" />
      </g>
    </svg>
  );
}
