"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
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
  const { visibleSection, activeSection } = useActiveSection(sectionIds);
  const [announcement, setAnnouncement] = useState("");

  // Keyboard navigation: j = next, k = previous
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
      window.location.hash = target.href;
      setAnnouncement(`Navigated to ${target.label} section`);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeSection]);

  return (
    <aside
      aria-label="Profile"
      className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24 w-full py-12"
    >
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {announcement}
      </div>

      <div>
        <h1 className="text-5xl font-bold leading-tight mb-2">
          Varun Chadha
        </h1>
        <p className="text-2xl font-semibold mb-6">
          Software Engineer
        </p>
        <p className="text-sm font-light mb-6">
          Building formally verified software.
        </p>

        <nav id="nav" aria-label="On-page navigation">
          <ul className="mt-16">
            {navItems.map((item) => {
              const isVisible = visibleSection === item.href;

              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`group flex items-center py-3 ${isVisible ? "active" : ""}`}
                    aria-current={activeSection === item.href ? "location" : undefined}
                  >
                    <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all duration-300 ease-out motion-reduce:transition-none group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200" />
                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 transition-colors duration-300 motion-reduce:transition-none group-hover:text-slate-200 group-focus-visible:text-slate-200">
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
