"use client";
import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
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

export default function ProfileAside() {
  const sectionIds = useMemo(
    () => navItems.map((item) => item.href.replace("#", "")),
    []
  );

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
        {/* Name */}
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          <Link href="/">Varun Chadha</Link>
        </h1>

        {/* Role */}
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          Senior Software Engineer
        </h2>
        <p className="mt-4 max-w-xs leading-normal">
          Building resilient, formally verified software. Also, I make games.
        </p>

        {/* Nav — hidden on mobile */}
        <nav
          id="nav"
          aria-label="On-page navigation"
          className="hidden lg:block"
        >
          <ul className="mt-16 w-max">
            {navItems.map((item) => {
              // visibleSection drives both the active class and aria-current
              // so the highlight always reflects where the user actually is
              const isVisible = visibleSection === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "group flex items-center py-3",
                      isVisible && "active"
                    )}
                    aria-current={isVisible ? "location" : undefined}
                  >
                    <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all duration-300 ease-out group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none" />
                    <span className="nav-text text-xs font-bold tracking-widest text-slate-500 uppercase transition-colors duration-300 group-hover:text-slate-200 group-focus-visible:text-slate-200 motion-reduce:transition-none">
                      {item.label}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <p className="mt-8 text-xs text-slate-600" aria-hidden="true">
            Press{" "}
            <kbd className="rounded border border-slate-700 px-1.5 py-0.5 font-mono text-slate-500">
              j
            </kbd>{" "}
            /{" "}
            <kbd className="rounded border border-slate-700 px-1.5 py-0.5 font-mono text-slate-500">
              k
            </kbd>{" "}
            to navigate sections
          </p>
        </nav>
      </div>

      <ul
        className="mt-8 ml-1 flex items-center gap-5"
        aria-label="Social media"
      >
        <li>
          <a
            href="https://github.com/vchadha"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub (opens in a new tab)"
            className="block text-slate-400 transition-colors hover:text-slate-200"
          >
            <span className="sr-only">GitHub</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/vchadha023"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn (opens in a new tab)"
            className="block text-slate-400 transition-colors hover:text-slate-200"
          >
            <span className="sr-only">LinkedIn</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
            </svg>
          </a>
        </li>
      </ul>
    </aside>
  );
}
