interface ExternalLinkProps {
  href: string;
  label: string;
  ariaLabel: string;
  className?: string;
}

export default function ExternalLink({
  href,
  label,
  ariaLabel,
  className = "inline-link",
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
    >
      {label}
    </a>
  );
}
