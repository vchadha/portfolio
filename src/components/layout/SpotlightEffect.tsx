"use client";

import { useMousePosition } from "@/hooks/useMousePosition";

import { useEffect, useState } from "react";

export default function SpotlightEffect() {
  const { x, y, hasMovedMouse } = useMousePosition();
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDark(mq.matches);
    setReducedMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
    const handler = (e: MediaQueryListEvent) => setIsDark(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Only show in dark mode — torch/lantern light doesn't suit the sandy light theme
  if (!hasMovedMouse || reducedMotion || !isDark) return null;

  return (
    <>
      {/* Layer 1: very subtle peripheral darkening — just enough to feel the torch */}
      <div
        className="pointer-events-none fixed inset-0 z-[2] transition-none"
        style={{
          background: `radial-gradient(circle 400px at ${x}px ${y}px,
            transparent 0%,
            transparent 60%,
            rgba(5, 4, 10, 0.08) 80%,
            rgba(5, 4, 10, 0.18) 100%
            )`,
        }}
        aria-hidden="true"
      />

      {/* Layer 2: hard-edged scanline brightening inside torch radius */}
      <div
        className="pointer-events-none fixed inset-0 z-[2] transition-none"
        style={{
          clipPath: `circle(240px at ${x}px ${y}px)`,
          background: `repeating-linear-gradient(
            to bottom,
            rgba(200, 168, 75, 0.02) 0px,
            rgba(200, 168, 75, 0.02) 3px,
            transparent 3px,
            transparent 4px
            )`,
        }}
        aria-hidden="true"
      />

      {/* Layer 3: warm amber centre glow */}
      <div
        className="pointer-events-none fixed inset-0 z-[2] transition-none"
        style={{
          clipPath: `circle(240px at ${x}px ${y}px)`,
          background: `radial-gradient(circle 240px at ${x}px ${y}px,
            rgba(200, 168, 75, 0.06) 0%,
            rgba(200, 168, 75, 0.02) 60%,
            transparent 100%
            )`,
        }}
        aria-hidden="true"
      />
    </>
  );
}
