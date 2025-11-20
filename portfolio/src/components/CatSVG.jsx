export default function CatSVG({ size = 100, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      stroke="#2e2540"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      style={{
        filter: "drop-shadow(0 0 6px rgba(140,120,200,0.3))"
      }}
    >
      {/* sombra */}
      <ellipse cx="60" cy="105" rx="20" ry="6" fill="#000" opacity="0.25" />

      {/* cuerpo */}
      <g id="cat-body">
        <path
          fill="#d7c8f0"
          d="M40 95 Q60 110 80 95 Q90 60 60 60 Q30 60 40 95 Z"
        />
      </g>

      {/* cola */}
      <path
        id="tail"
        d="M85 80 Q100 70 90 50"
        stroke="#2e2540"
        strokeWidth="5"
      />

      {/* patas */}
      <g id="legs" stroke="#2e2540">
        <path d="M50 95 L50 72" />
        <path d="M70 95 L70 72" />
      </g>

      {/* cabeza */}
      <g id="cat-head">
        <path
          fill="#d7c8f0"
          d="M35 55 Q60 82 85 55 Q85 30 60 25 Q35 30 35 55 Z"
        />

        {/* orejas */}
        <path fill="#d7c8f0" d="M40 35 L30 18 L45 28 Z" />
        <path fill="#d7c8f0" d="M80 35 L90 18 L75 28 Z" />

        {/* ojos abiertos */}
        <g id="eyes-open">
          <circle id="eye-left" cx="50" cy="50" r="4" fill="#9ee7ff" stroke="none" />
          <circle id="eye-right" cx="70" cy="50" r="4" fill="#9ee7ff" stroke="none" />
        </g>

        {/* ojos cerrados */}
        <g id="eyes-closed" opacity="0" stroke="#9ee7ff">
          <line x1="46" y1="50" x2="54" y2="50" strokeWidth="3" />
          <line x1="66" y1="50" x2="74" y2="50" strokeWidth="3" />
        </g>

        {/* boca */}
        <path d="M58 56 Q60 58 62 56" stroke="#2e2540" />
        <path d="M60 58 Q60 62 60 62" stroke="#2e2540" />
      </g>
    </svg>
  );
}
