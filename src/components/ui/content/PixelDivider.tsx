const DOT_POSITIONS = [
  0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76,
];

export default function PixelDivider() {
  return (
    <div className="pixel-divider" aria-hidden="true">
      <svg width="320" height="20" viewBox="0 0 320 20">
        {/* ── Left dotted line ── */}
        {DOT_POSITIONS.map((x) => (
          <rect
            key={x}
            x={x}
            y="9"
            width="2"
            height="2"
            className="divider-dot"
          />
        ))}

        {/* Left accent diamond */}
        <rect x="82" y="9" width="3" height="2" className="divider-accent" />
        <rect x="83" y="8" width="1" height="4" className="divider-accent" />
        <rect x="83" y="7" width="1" height="1" className="divider-accent" />
        <rect x="83" y="12" width="1" height="1" className="divider-accent" />

        {/* ── Sword ── */}

        {/* Tip — tapers left to right in 4 steps */}
        <rect x="90" y="10" width="1" height="1" className="divider-blade" />
        <rect x="91" y="9" width="1" height="3" className="divider-blade" />
        <rect x="92" y="8" width="1" height="5" className="divider-blade" />
        <rect x="93" y="7" width="2" height="7" className="divider-blade" />

        {/* Blade body */}
        <rect x="95" y="7" width="80" height="7" className="divider-blade" />

        {/* Top edge highlight */}
        <rect
          x="95"
          y="6"
          width="78"
          height="1"
          className="divider-highlight"
        />

        {/* Bottom edge shadow */}
        <rect x="95" y="14" width="78" height="1" className="divider-shadow" />

        {/* Fuller / blood groove running down centre of blade */}
        <rect x="98" y="9" width="68" height="3" className="divider-fuller" />

        {/* Ricasso — wider unsharped section near guard */}
        <rect x="167" y="6" width="8" height="9" className="divider-blade" />

        {/* Guard — tall crossguard */}
        <rect x="175" y="1" width="6" height="18" className="divider-guard" />
        {/* Guard left highlight */}
        <rect
          x="175"
          y="1"
          width="2"
          height="18"
          className="divider-guard-hi"
        />
        {/* Guard right shadow */}
        <rect x="179" y="1" width="2" height="18" className="divider-shadow" />

        {/* Grip base */}
        <rect x="181" y="6" width="32" height="8" className="divider-grip" />

        {/* Grip wrap — alternating bands every 6px */}
        <rect x="181" y="5" width="2" height="10" className="divider-wrap" />
        <rect x="187" y="5" width="2" height="10" className="divider-wrap" />
        <rect x="193" y="5" width="2" height="10" className="divider-wrap" />
        <rect x="199" y="5" width="2" height="10" className="divider-wrap" />
        <rect x="205" y="5" width="2" height="10" className="divider-wrap" />
        <rect x="211" y="5" width="2" height="10" className="divider-wrap" />

        {/* Pommel */}
        <rect x="213" y="3" width="14" height="14" className="divider-guard" />
        {/* Pommel left highlight */}
        <rect
          x="213"
          y="3"
          width="2"
          height="14"
          className="divider-guard-hi"
        />
        {/* Pommel right shadow */}
        <rect x="225" y="3" width="2" height="14" className="divider-shadow" />
        {/* Pommel centre detail */}
        <rect x="217" y="6" width="6" height="8" className="divider-grip" />

        {/* ── Right accent diamond (mirrored) ── */}
        <rect x="234" y="9" width="3" height="2" className="divider-accent" />
        <rect x="234" y="8" width="1" height="4" className="divider-accent" />
        <rect x="234" y="7" width="1" height="1" className="divider-accent" />
        <rect x="234" y="12" width="1" height="1" className="divider-accent" />

        {/* ── Right dotted line ── */}
        {DOT_POSITIONS.map((x) => (
          <rect
            key={x}
            x={320 - x - 2}
            y="9"
            width="2"
            height="2"
            className="divider-dot"
          />
        ))}
      </svg>
    </div>
  );
}
