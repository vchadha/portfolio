"use client";
import { useMousePosition } from "@/hooks/useMousePosition";

export default function SpotlightGradient() {
  const { x, y, hasMovedMouse } = useMousePosition();

  // Don't render until the user has moved their mouse — avoids the
  // jarring gradient flash on page load
  if (!hasMovedMouse) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-none"
      style={{
        background: `radial-gradient(600px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
      }}
    />
  );
}
