export const profile = {
  name: "Varun Chadha",
  role: "Senior Software Engineer",
  tagline:
    "Building resilient, formally verified software. Also, I make games.",
  github: "https://github.com/vchadha",
  linkedin: "https://www.linkedin.com/in/vchadha023",
} as const;

export interface NavItem {
  href: string;
  label: string;
}

export const navItems: NavItem[] = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
];
