import { useState, useEffect, useCallback } from "react";

/**
 * visibleSection: whichever section is currently in the viewport (drives nav highlight)
 * activeSection: only changes on explicit navigation (click or j/k), drives URL + sessionStorage
 */
export function useActiveSection(sectionIds: string[]) {
  const [visibleSection, setVisibleSection] = useState(`#${sectionIds[0]}`);
  const [activeSection, setActiveSection] = useState(`#${sectionIds[0]}`);

  // Restore activeSection from sessionStorage on mount (client-only)
  useEffect(() => {
    const saved = sessionStorage.getItem("activeSection");
    if (saved) setActiveSection(saved);
  }, []);

  // IntersectionObserver: only updates visibleSection, never activeSection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  const navigateTo = useCallback((href: string) => {
    setActiveSection(href);
    sessionStorage.setItem("activeSection", href);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => history.replaceState(null, "", href), 500);
  }, []);

  return { visibleSection, activeSection, navigateTo };
}
