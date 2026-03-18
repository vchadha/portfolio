import { useState, useEffect, useCallback, useRef } from "react";

// Wraps sessionStorage to gracefully handle some private browsing,
// which throws a SecurityError on any sessionStorage access
const safeStorage = {
  get: (key: string): string | null => {
    try {
      return sessionStorage.getItem(key);
    } catch {
      return null;
    }
  },
  set: (key: string, value: string): void => {
    try {
      sessionStorage.setItem(key, value);
    } catch {
      // Silently fail — scroll restoration won't work in this session
    }
  },
};

export function useActiveSection(sectionIds: string[]) {
  // Tracks which section is currently most visible in the viewport
  const [visibleSection, setVisibleSection] = useState(`#${sectionIds[0]}`);
  // Tracks the active section in the URL/state (may differ from visibleSection)
  const [activeSection, setActiveSection] = useState(`#${sectionIds[0]}`);
  // Ref mirrors activeSection but updates synchronously for keyboard navigation
  const activeSectionRef = useRef(`#${sectionIds[0]}`);

  // Stable navigate function — updates ref synchronously, state async
  const navigateTo = useCallback((href: string) => {
    activeSectionRef.current = href;
    setActiveSection(href);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    history.replaceState(null, "", href);
  }, []);

  // Before unload: save scroll position and active section, strip hash
  useEffect(() => {
    const onBeforeUnload = () => {
      safeStorage.set(
        "activeSection",
        window.location.hash || `#${sectionIds[0]}`
      );
      safeStorage.set("scrollY", String(window.scrollY));
      history.replaceState(null, "", window.location.pathname);
    };
    window.addEventListener("beforeunload", onBeforeUnload);
    return () => window.removeEventListener("beforeunload", onBeforeUnload);
  }, []);

  useEffect(() => {
    // Disable automatic scroll restoration to handle it manually
    history.scrollRestoration = "manual";

    const saved = safeStorage.get("activeSection");
    const savedScrollY = safeStorage.get("scrollY");
    const target = saved || `#${sectionIds[0]}`;

    activeSectionRef.current = target;
    setActiveSection(target);

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Restore scroll position and navigate to saved section
    if (saved && savedScrollY) {
      window.scrollTo({ top: parseInt(savedScrollY, 10), behavior: "instant" });

      if (reducedMotion) {
        // Instant navigation for reduced motion users
        document.documentElement.style.opacity = "1";
        document.querySelector(saved)?.scrollIntoView({ behavior: "instant" });
        history.replaceState(null, "", saved);
      } else {
        // Smooth transition with fade-in effect
        document.documentElement.style.transition = "opacity 0.3s ease";
        document.documentElement.style.opacity = "1";

        const timer = setTimeout(() => {
          document.querySelector(saved)?.scrollIntoView({ behavior: "smooth" });
          history.replaceState(null, "", saved);
        }, 50);
        return () => clearTimeout(timer);
      }
    } else {
      // No saved state - just fade in
      document.documentElement.style.opacity = "1";
    }
  }, []);

  // IntersectionObserver: drives nav highlight as user scrolls
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSection(`#${entry.target.id}`);
          }
        });
      },
      // Trigger when section is 40% from top/bottom of viewport
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    // Observe all section elements
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return { visibleSection, activeSection, activeSectionRef, navigateTo };
}
