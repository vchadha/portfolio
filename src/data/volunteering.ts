export interface Volunteering {
  venue: string;
  title: string;
  company: string;
  description: string;
  techs: string[];
}

export const volunteering: Volunteering[] = [
  {
    venue: "Volunteer · 2023 — 2025",
    title: "Instructor & Site Lead",
    company: "CODERS",
    description:
      "Taught web and app development to middle and high school students. \
      Organised volunteer programmes as site lead.",
    techs: ["Replit", "CodeHS", "MIT App Inventor"],
  },
  {
    venue: "Volunteer · 2023",
    title: "Mentor",
    company: "SPARK",
    description:
      "Mentored a student in developing a Scratch-based educational climate \
      awareness game.",
    techs: ["Scratch"],
  },
];