// Original illustration (not traced from any reference) — circular avatar
// badge of a girl, built in the site's own lime/dark palette with a
// scattered-stars background, similar in spirit to a "profile picture"
// illustration but drawn fresh for this site.

const stars = [
  { x: 20, y: 30, r: 2 }, { x: 300, y: 40, r: 1.6 }, { x: 280, y: 300, r: 2.2 },
  { x: 30, y: 280, r: 1.8 }, { x: 160, y: 10, r: 1.6 }, { x: 10, y: 160, r: 1.8 },
  { x: 310, y: 170, r: 2 }, { x: 60, y: 60, r: 1.4 }, { x: 250, y: 80, r: 1.6 },
  { x: 90, y: 305, r: 1.6 }, { x: 220, y: 20, r: 1.4 }, { x: 40, y: 220, r: 2 },
];

export default function AboutAvatar() {
  return (
    <svg
      viewBox="0 0 320 320"
      className="w-full max-w-[260px] mx-auto h-auto select-none"
      role="img"
      aria-label="Illustrated avatar of Agrima"
    >
      {stars.map((s, i) => (
        <circle
          key={i}
          cx={s.x}
          cy={s.y}
          r={s.r}
          fill="#c6f24e"
          className="anim-twinkle"
          style={{ animationDelay: `${(i % 5) * 0.4}s` }}
        />
      ))}

      {/* backdrop circle */}
      <circle cx="160" cy="152" r="118" fill="#c6f24e" />

      {/* hoodie / shoulders */}
      <path
        d="M70,320 Q70,240 160,240 Q250,240 250,320 Z"
        fill="#1c1c1c"
      />
      {/* hood collar */}
      <path
        d="M118,246 Q160,270 202,246 L202,262 Q160,286 118,262 Z"
        fill="#141414"
      />
      {/* drawstrings */}
      <path d="M147,258 L143,300" stroke="#c6f24e" strokeWidth="3" strokeLinecap="round" />
      <path d="M173,258 L177,300" stroke="#c6f24e" strokeWidth="3" strokeLinecap="round" />

      {/* neck */}
      <rect x="142" y="212" width="36" height="34" fill="#f0c9a0" />

      {/* head */}
      <circle cx="160" cy="168" r="58" fill="#f0c9a0" />

      {/* hair back */}
      <path
        d="M104,170 Q96,90 160,84 Q224,90 216,170 Q216,190 202,198 Q212,132 160,124 Q108,132 118,198 Q104,190 104,170 Z"
        fill="#2a2018"
      />
      {/* fringe */}
      <path d="M108,138 Q160,102 212,138 Q209,116 160,112 Q111,116 108,138 Z" fill="#2a2018" />
      {/* side strands */}
      <path d="M210,132 Q238,152 226,196 Q214,172 204,150 Z" fill="#2a2018" />
      <path d="M110,132 Q84,150 94,192 Q106,170 116,150 Z" fill="#2a2018" />

      {/* ears */}
      <circle cx="103" cy="172" r="8" fill="#f0c9a0" />
      <circle cx="217" cy="172" r="8" fill="#f0c9a0" />

      {/* glasses */}
      <g stroke="#1c1c1c" strokeWidth="3" fill="none">
        <circle cx="141" cy="170" r="15" />
        <circle cx="181" cy="170" r="15" />
        <path d="M156,170 L166,170" />
        <path d="M126,170 L116,166" />
        <path d="M196,170 L206,166" />
      </g>

      {/* happy closed eyes (little arcs behind glasses) */}
      <path d="M134,169 Q141,163 148,169" stroke="#1c1c1c" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M174,169 Q181,163 188,169" stroke="#1c1c1c" strokeWidth="2.5" fill="none" strokeLinecap="round" />

      {/* blush */}
      <circle cx="124" cy="192" r="8" fill="#e8a97c" opacity="0.6" />
      <circle cx="198" cy="192" r="8" fill="#e8a97c" opacity="0.6" />

      {/* big laughing smile */}
      <path d="M138,196 Q160,220 182,196 Q160,214 138,196 Z" fill="#7a3b2e" />
      <path d="M143,199 Q160,208 177,199 L177,203 Q160,211 143,203 Z" fill="#fff" />
    </svg>
  );
}
