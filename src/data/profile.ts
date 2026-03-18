// Profile information displayed in the sidebar
export const profile = {
  name: "Varun Chadha",
  role: "Senior Software Engineer",
  tagline:
    "Building resilient, formally verified software. Also, I make games.",
  github: "https://github.com/vchadha",
  linkedin: "https://www.linkedin.com/in/vchadha023",
} as const;

// Navigation items for the desktop sidebar menu
export interface NavItem {
  href: string; // Section anchor link
  label: string; // Display label
}

export const navItems: NavItem[] = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
];
