"use client";

import { useMousePosition } from "@/hooks/useMousePosition";

import { useEffect, useState } from "react";

export default function SpotlightGradient() {
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

  if (!hasMovedMouse || reducedMotion) return null;

  // Dark: warm amber glow matching --accent (#c8a84b)
  // Light: warm rust glow matching --accent (#8b4513)
  const color = isDark ? "rgba(200, 168, 75, 0.12)" : "rgba(139, 69, 19, 0.08)";

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-none"
      style={{
        background: `radial-gradient(600px at ${x}px ${y}px, ${color}, transparent 80%)`,
      }}
    />
  );
}
