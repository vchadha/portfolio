import { useState, useEffect } from "react";

interface MousePosition {
  x: number;
  y: number;
  hasMovedMouse: boolean;
}

export function useMousePosition(): MousePosition {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
    hasMovedMouse: false,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY, hasMovedMouse: true });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return position;
}
