import { useState, useEffect } from "react";

/**
 * Tracks which section is currently in view using IntersectionObserver.
 * Persists the active section to sessionStorage for cross-refresh memory.
 *
 * @param sectionIds - Array of element IDs to observe (without #)
 * @returns The currently active section id (with # prefix e.g. "#about")
 */
export function useActiveSection(sectionIds: string[]): string {
  const [activeSection, setActiveSection] = useState(`#${sectionIds[0]}`);

  // Read sessionStorage only on the client, after mount
  useEffect(() => {
    const saved = sessionStorage.getItem("activeSection");
    if (saved) setActiveSection(saved);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = `#${entry.target.id}`;
            setActiveSection(id);
            sessionStorage.setItem("activeSection", id);
          }
        });
      },
      // A section becomes active when it occupies the middle 20% of the viewport
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
}
