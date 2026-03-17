import ExternalLink from "@/components/ui/content/ExternalLink";

interface FooterLink {
  href: string;
  label: string;
  ariaLabel: string;
}

const inspirationLinks: FooterLink[] = [
  {
    href: "https://brittanychiang.com",
    label: "Brittany Chiang",
    ariaLabel: "Brittany Chiang's portfolio (opens in a new tab)",
  },
  {
    href: "https://taamannae.dev",
    label: "Tammy Taabassum",
    ariaLabel: "Tammy Taabassum's portfolio (opens in a new tab)",
  },
  {
    href: "https://perryw-2023.webflow.io/",
    label: "Perry Wang",
    ariaLabel: "Perry Wang's portfolio (opens in a new tab)",
  },
  {
    href: "https://aashreysharma.com/",
    label: "Aashrey Sharma",
    ariaLabel: "Aashrey Sharma's portfolio (opens in a new tab)",
  },
];

export default function Footer() {
  return (
    <footer className="max-w-md pb-16 text-sm text-[--text-muted] sm:pb-0">
      <p>
        Designed in{" "}
        <ExternalLink
          href="https://figma.com/"
          ariaLabel="Figma (opens in a new tab)"
          className="inline-link-muted"
        >
          Figma
        </ExternalLink>
        . Built with{" "}
        <ExternalLink
          href="https://nextjs.org/"
          ariaLabel="Next.js (opens in a new tab)"
          className="inline-link-muted"
        >
          Next.js
        </ExternalLink>
        . Built with{" "}
        <ExternalLink
          href="https://tailwindcss.com/"
          ariaLabel="Tailwind CSS (opens in a new tab)"
          className="inline-link-muted"
        >
          Tailwind CSS
        </ExternalLink>
        , deployed with{" "}
        <ExternalLink
          href="https://vercel.com/"
          ariaLabel="Vercel (opens in a new tab)"
          className="inline-link-muted"
        >
          Vercel
        </ExternalLink>
        . Design inspired by{" "}
        {inspirationLinks.map((link, i) => (
          <span key={link.href}>
            <ExternalLink
              href={link.href}
              ariaLabel={link.ariaLabel}
              className="inline-link-muted"
            >
              {link.label}
            </ExternalLink>
            {i < inspirationLinks.length - 2 && ", "}
            {i === inspirationLinks.length - 2 && ", and "}
          </span>
        ))}
        .
      </p>
    </footer>
  );
}
