import { useState, useEffect, useCallback, useRef } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [visibleSection, setVisibleSection] = useState(`#${sectionIds[0]}`);
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
      sessionStorage.setItem(
        "activeSection",
        window.location.hash || `#${sectionIds[0]}`
      );
      sessionStorage.setItem("scrollY", String(window.scrollY));
      history.replaceState(null, "", window.location.pathname);
    };
    window.addEventListener("beforeunload", onBeforeUnload);
    return () => window.removeEventListener("beforeunload", onBeforeUnload);
  }, []);

  // On mount: restore scroll position then smoothly scroll to active section
  useEffect(() => {
    history.scrollRestoration = "manual";

    const saved = sessionStorage.getItem("activeSection");
    const savedScrollY = sessionStorage.getItem("scrollY");
    const target = saved || `#${sectionIds[0]}`;

    activeSectionRef.current = target;
    setActiveSection(target);

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (saved && savedScrollY) {
      window.scrollTo({ top: parseInt(savedScrollY, 10), behavior: "instant" });

      if (reducedMotion) {
        document.documentElement.style.opacity = "1";
        document.querySelector(saved)?.scrollIntoView({ behavior: "instant" });
        history.replaceState(null, "", saved);
      } else {
        document.documentElement.style.transition = "opacity 0.3s ease";
        document.documentElement.style.opacity = "1";

        const timer = setTimeout(() => {
          document.querySelector(saved)?.scrollIntoView({ behavior: "smooth" });
          history.replaceState(null, "", saved);
        }, 50);
        return () => clearTimeout(timer);
      }
    } else {
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
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return { visibleSection, activeSection, activeSectionRef, navigateTo };
}
