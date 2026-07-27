const leftPaths = [
  "M0,14 L18,14 L18,24 L34,24 L34,20 L46,20",
  "M0,30 L14,30 L14,42 L32,42",
  "M0,50 L20,50 L20,58 L36,58 L36,50 L48,50",
  "M0,68 L16,68 L16,78 L33,78",
  "M0,86 L22,86 L22,94 L45,94",
];

const rightPaths = [
  "M100,14 L82,14 L82,24 L66,24 L66,20 L54,20",
  "M100,30 L86,30 L86,42 L68,42",
  "M100,50 L80,50 L80,58 L64,58 L64,50 L52,50",
  "M100,68 L84,68 L84,78 L67,78",
  "M100,86 L78,86 L78,94 L55,94",
];

function HeroCircuitOverlay() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="hero-flow-blue" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
          <stop offset="50%" stopColor="#7dd3fc" stopOpacity="1" />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="hero-flow-orange" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#fb923c" stopOpacity="0" />
          <stop offset="50%" stopColor="#fdba74" stopOpacity="1" />
          <stop offset="100%" stopColor="#fb923c" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* faint base traces */}
      {leftPaths.map((d, i) => (
        <path
          key={`base-l${i}`}
          d={d}
          vectorEffect="non-scaling-stroke"
          className="hero-trace-base"
        />
      ))}
      {rightPaths.map((d, i) => (
        <path
          key={`base-r${i}`}
          d={d}
          vectorEffect="non-scaling-stroke"
          className="hero-trace-base"
        />
      ))}

      {/* flowing current */}
      {leftPaths.map((d, i) => (
        <path
          key={`flow-l${i}`}
          d={d}
          vectorEffect="non-scaling-stroke"
          stroke="url(#hero-flow-blue)"
          className="hero-trace-flow hero-trace-flow-blue"
          style={{ animationDelay: `${i * 0.5}s` }}
        />
      ))}
      {rightPaths.map((d, i) => (
        <path
          key={`flow-r${i}`}
          d={d}
          vectorEffect="non-scaling-stroke"
          stroke="url(#hero-flow-orange)"
          className="hero-trace-flow hero-trace-flow-orange"
          style={{ animationDelay: `${i * 0.5 + 0.3}s` }}
        />
      ))}

      {/* node pulses at circuit joins */}
      {[
        [18, 14],
        [34, 24],
        [20, 50],
        [36, 58],
        [22, 86],
        [82, 14],
        [66, 24],
        [80, 50],
        [64, 58],
        [78, 86],
      ].map(([cx, cy], i) => (
        <circle
          key={`node${i}`}
          cx={cx}
          cy={cy}
          r="0.6"
          className="hero-trace-node"
          style={{ animationDelay: `${(i % 6) * 0.35}s` }}
        />
      ))}
    </svg>
  );
}

export default HeroCircuitOverlay;
