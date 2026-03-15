"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrollMemory } from "@/hooks/useScrollMemory";

interface NavItem {
  href: string;
  label: string;
}

const navItems: NavItem[] = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
];

const sectionIds = navItems.map((item) => item.href.replace("#", ""));

export default function ProfileAside() {
  const activeSection = useActiveSection(sectionIds);
  const [scanIndex, setScanIndex] = useState(-1);
  const [announcement, setAnnouncement] = useState("");

  // Persist scroll position
  useScrollMemory();

  // On mount: restore scroll position and run nav scan animation
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const savedScrollY = Number(sessionStorage.getItem("scrollY") ?? 0);
    const savedSection = sessionStorage.getItem("activeSection") ?? "#about";

    if (savedScrollY > 0 && !prefersReduced) {
      window.scrollTo({ top: savedScrollY, behavior: "instant" as ScrollBehavior });
      requestAnimationFrame(() => {
        document
          .querySelector(savedSection)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }

    // Sequential scan animation down to the active section
    const activeIndex = navItems.findIndex((item) => item.href === savedSection);
    if (!prefersReduced) {
      navItems.forEach((_, i) => {
        if (i > activeIndex) return;
        setTimeout(() => setScanIndex(i), i * 180);
      });
    } else {
      setScanIndex(activeIndex);
    }
  }, []); // mount only

  // Keyboard navigation: j = next section, k = previous section
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "j" && e.key !== "k") return;
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA"
      )
        return;

      const currentIndex = navItems.findIndex(
        (item) => item.href === activeSection
      );
      const targetIndex =
        e.key === "j"
          ? (currentIndex + 1) % navItems.length
          : currentIndex === 0
          ? navItems.length - 1
          : currentIndex - 1;

      const target = navItems[targetIndex];
      scrollToSection(target.href);
      setAnnouncement(`Navigated to ${target.label} section`);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeSection]);

  const scrollToSection = (href: string) => {
    sessionStorage.setItem("activeSection", href);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => history.replaceState(null, "", href), 500);
  };

  return (
    <aside
      aria-label="Profile"
      className="md:sticky md:top-0 md:h-screen md:w-5/12 w-full p-6 md:py-24 md:px-32 flex flex-col"
    >
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {announcement}
      </div>

      <h1 className="text-5xl font-bold leading-tight mb-2 text-black dark:text-zinc-50">
        Varun Chadha
      </h1>
      <p className="text-2xl font-semibold mb-6 text-black dark:text-zinc-50">
        Software Engineer
      </p>
      <p className="text-sm font-light mb-6 text-black dark:text-zinc-50">
        Building formally verified software.
      </p>

      <nav id="nav" aria-label="On-page navigation" className="mb-8">
        <ul className="mt-16">
          {navItems.map((item, index) => {
            const isActive = activeSection === item.href;
            const isScanning = scanIndex === index;
            const isHighlighted = isActive || isScanning;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive ? "location" : undefined}
                  className="group flex items-center py-3"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                >
                  <span
                    className={`
                      mr-4 h-px bg-slate-600 transition-all duration-300 ease-out
                      motion-reduce:transition-none
                      group-hover:w-16 group-hover:bg-slate-200
                      group-focus-visible:w-16 group-focus-visible:bg-slate-200
                      ${isHighlighted ? "w-16 bg-slate-200" : "w-8"}
                    `}
                  />
                  <span
                    className={`
                      text-xs font-bold uppercase tracking-widest
                      transition-colors duration-300 motion-reduce:transition-none
                      group-hover:text-slate-200 group-focus-visible:text-slate-200
                      ${isHighlighted ? "text-slate-200" : "text-slate-500"}
                    `}
                  >
                    {item.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="mt-auto mb-4">
        <ul className="flex gap-4">
          <li>
            <a href="https://github.com/your-username" aria-label="GitHub profile" className="hover:underline">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/your-username" aria-label="LinkedIn profile" className="hover:underline">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="mailto:you@example.com" aria-label="Email" className="hover:underline">
              Email
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
