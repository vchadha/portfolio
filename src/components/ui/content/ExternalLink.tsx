interface ExternalLinkProps {
  href: string;
  ariaLabel: string;
  className?: string;
  children: React.ReactNode;
}

export default function ExternalLink({
  href,
  ariaLabel,
  className = "inline-link",
  children,
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}
