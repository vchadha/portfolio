"use client";

import React, { useState, useEffect } from "react";
import { useActiveSection } from "@/hooks/useActiveSection";

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
  const { visibleSection, activeSection, activeSectionRef, navigateTo } =
    useActiveSection(sectionIds);
  const [announcement, setAnnouncement] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "j" && e.key !== "k") return;
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA"
      )
        return;

      const currentIndex = navItems.findIndex(
        (item) => item.href === activeSectionRef.current
      );
      const safeIndex = currentIndex === -1 ? 0 : currentIndex;
      const targetIndex =
        e.key === "j"
          ? (safeIndex + 1) % navItems.length
          : safeIndex === 0
            ? navItems.length - 1
            : safeIndex - 1;

      const target = navItems[targetIndex];

      navigateTo(target.href);
      setAnnouncement(`Navigated to ${target.label} section`);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <aside
      aria-label="Profile"
      className="w-full py-12 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24"
    >
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {announcement}
      </div>

      <div>
        <h1 className="mb-2 text-5xl leading-tight font-bold">Varun Chadha</h1>
        <p className="mb-6 text-2xl font-semibold">Software Engineer</p>
        <p className="mb-6 text-sm font-light">
          Building formally verified software.
        </p>

        <nav
          id="nav"
          aria-label="On-page navigation"
          className="hidden lg:block"
        >
          <ul className="mt-16">
            {navItems.map((item) => {
              const isVisible = visibleSection === item.href;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`group flex items-center py-3 ${isVisible ? "active" : ""}`}
                    aria-current={
                      activeSection === item.href ? "location" : undefined
                    }
                  >
                    <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all duration-300 ease-out group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none" />
                    <span className="nav-text text-xs font-bold tracking-widest text-slate-500 uppercase transition-colors duration-300 group-hover:text-slate-200 group-focus-visible:text-slate-200 motion-reduce:transition-none">
                      {item.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="mt-auto pt-8">
        <ul className="flex gap-4">
          <li>
            <a
              href="https://github.com/your-username"
              aria-label="GitHub profile"
              className="hover:underline"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/your-username"
              aria-label="LinkedIn profile"
              className="hover:underline"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="mailto:you@example.com"
              aria-label="Email"
              className="hover:underline"
            >
              Email
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
