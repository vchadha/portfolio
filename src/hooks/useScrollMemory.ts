import { useEffect } from "react";

/**
 * Persists window.scrollY to sessionStorage on every scroll event.
 * Throttled via requestAnimationFrame to avoid performance issues.
 */
export function useScrollMemory() {
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          sessionStorage.setItem("scrollY", String(window.scrollY));
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
}
