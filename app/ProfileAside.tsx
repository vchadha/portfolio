"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

interface NavItem {
  href: string;
  label: string;
}

const navItems: NavItem[] = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
];

/**
 * Profile sidebar component with navigation, social links, and active section highlighting.
 * Handles client-side navigation via clicks and keyboard (j/k keys).
 */
export default function ProfileAside() {
  const [activeSection, setActiveSection] = useState("#about");

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setActiveSection(hash);
      // Smooth scroll to section after a delay to ensure page is loaded
      setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 200);
    }

    // Simple observer to update active on scroll for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.8 }
    );

    navItems.forEach((item) => {
      const section = document.querySelector(item.href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      const direction = keyMappings[e.key];
      if (direction) {
        navigateToSection(direction);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeSection]);

  const [announcement, setAnnouncement] = useState("");

  type Direction = 'next' | 'prev';

  const keyMappings: Record<string, Direction> = {
    "j": 'next',
    "k": 'prev',
  };

  const navigateToSection = (direction: Direction): void => {
    const currentIndex = navItems.findIndex((item) => item.href === activeSection);
    let targetIndex: number;
    if (direction === 'next') {
      targetIndex = (currentIndex + 1) % navItems.length;
    } else {
      targetIndex = currentIndex === 0 ? navItems.length - 1 : currentIndex - 1;
    }
    const targetItem = navItems[targetIndex];
    setActiveSection(targetItem.href);
    document.querySelector(targetItem.href)?.scrollIntoView({ behavior: "smooth" });
    window.location.hash = targetItem.href;
    setAnnouncement(`Navigated to ${targetItem.label} section`);
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
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group flex items-center py-3"
                aria-current={activeSection === item.href ? "location" : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSection(item.href);
                  document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
                  window.location.hash = item.href;
                }}
              >
                <span className={`mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none ${
                  activeSection === item.href ? "w-16 bg-slate-200" : ""
                }`}></span>
                <span className={`text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200 ${
                  activeSection === item.href ? "text-slate-200" : ""
                }`}>
                  {item.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto mb-4">
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
