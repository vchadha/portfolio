"use client";

import { useMousePosition } from "@/hooks/useMousePosition";

import { useEffect, useState } from "react";

export default function SpotlightGradient() {
  const { x, y, hasMovedMouse } = useMousePosition();
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  if (!hasMovedMouse || reducedMotion) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-none"
      style={{
        background: `radial-gradient(600px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
      }}
    />
  );
}
