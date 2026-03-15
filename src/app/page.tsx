"use client";

import { useState, useEffect } from "react";
import { useScrollMemory } from "@/hooks/useScrollMemory";
import ProfileAside from "@/components/ProfileAside";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";

export default function Home() {
  const [isRestoring, setIsRestoring] = useState(true);

  useScrollMemory();

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const savedScrollY = Number(sessionStorage.getItem("scrollY") ?? 0);
    const savedSection = sessionStorage.getItem("activeSection") ?? "#about";

    window.scrollTo({ top: savedScrollY, behavior: "instant" as ScrollBehavior });

    if (!prefersReduced) {
      requestAnimationFrame(() => {
        document
          .querySelector(savedSection)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
        setIsRestoring(false);
      });
    } else {
      setIsRestoring(false);
    }
  }, []);

  return (
    <>
      <a href="#content" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <a href="#nav" className="sr-only focus:not-sr-only">
        Skip to navigation
      </a>
      <div
        className={`
          flex flex-col md:flex-row min-h-screen w-full
          transition-opacity duration-300
          ${isRestoring ? "opacity-0" : "opacity-100"}
        `}
      >
        <ProfileAside />
        <main id="content" className="md:w-7/12 w-full flex-1 p-6 md:p-12">
          <About />
          <Experience />
          <Projects />
        </main>
      </div>
    </>
  );
}
