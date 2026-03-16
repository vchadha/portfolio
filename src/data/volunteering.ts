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
    company: "CODERS / SPARK",
    description:
      "Taught web and app development to middle and high school students as instructor \
      and site lead at CODERS. Mentored a student at SPARK in developing a Scratch-based \
      educational climate awareness game.",
    techs: ["Replit", "CodeHS", "MIT App Inventor", "Scratch"],
  },
];
