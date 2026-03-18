"use client";

import { createContext, useContext, ReactNode } from "react";
import { useActiveSection } from "@/hooks/useActiveSection";
import { navItems } from "@/data/profile";

const sectionIds = navItems.map((item) => item.href.replace("#", ""));

interface ActiveSectionContextValue {
  visibleSection: string;
  activeSection: string;
  activeSectionRef: React.RefObject<string>;
  navigateTo: (href: string) => void;
}

const ActiveSectionContext = createContext<ActiveSectionContextValue | null>(
  null
);

export function ActiveSectionProvider({ children }: { children: ReactNode }) {
  const value = useActiveSection(sectionIds);
  return (
    <ActiveSectionContext.Provider value={value}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const ctx = useContext(ActiveSectionContext);
  if (!ctx)
    throw new Error(
      "useActiveSectionContext must be used inside ActiveSectionProvider"
    );
  return ctx;
}
