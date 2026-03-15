import { useState, useEffect } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [visibleSection, setVisibleSection] = useState(`#${sectionIds[0]}`);
  const [activeSection, setActiveSection] = useState(`#${sectionIds[0]}`);

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

  // On mount: tell Next.js not to touch scroll, instantly restore position,
  // then smoothly scroll to the active section from there
  useEffect(() => {
    history.scrollRestoration = 'manual';

    const saved = sessionStorage.getItem('activeSection');
    const savedScrollY = sessionStorage.getItem('scrollY');
    const target = saved || `#${sectionIds[0]}`;
    setActiveSection(target);

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (saved && savedScrollY) {
      window.scrollTo({ top: parseInt(savedScrollY, 10), behavior: 'instant' });

      if (reducedMotion) {
        // Reveal instantly and jump directly to section — no animation
        document.documentElement.style.opacity = '1';
        document.querySelector(saved)?.scrollIntoView({ behavior: 'instant' });
        history.replaceState(null, '', saved);
      } else {
        document.documentElement.style.transition = 'opacity 0.3s ease';
        document.documentElement.style.opacity = '1';

        const timer = setTimeout(() => {
          document.querySelector(saved)?.scrollIntoView({ behavior: 'smooth' });
          history.replaceState(null, '', saved);
        }, 50);
        return () => clearTimeout(timer);
      }
    } else {
      document.documentElement.style.opacity = '1';
    }
  }, []);

  // Update active section when hash changes (nav click)
  useEffect(() => {
    const onHashChange = () => setActiveSection(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
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

  return { visibleSection, activeSection };
}
