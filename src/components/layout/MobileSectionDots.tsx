"use client";

import { useActiveSectionContext } from "@/context/ActiveSectionContext";

import Link from "next/link";
import { useMemo } from "react";

import { navItems } from "@/data/profile";

export default function MobileSectionDots() {
  const { visibleSection } = useActiveSectionContext();

  return (
    <nav
      aria-label="Section progress"
      className="fixed right-0 bottom-6 left-0 z-40 flex justify-center gap-3 lg:hidden"
    >
      {navItems.map((item) => {
        const isActive = visibleSection === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-label={`Go to ${item.label} section`}
            aria-current={isActive ? "location" : undefined}
            style={{
              display: "block",
              width: "8px",
              height: "8px",
              backgroundColor: isActive ? "var(--accent)" : "var(--border)",
              transition: "background-color 200ms",
            }}
          />
        );
      })}
    </nav>
  );
}
