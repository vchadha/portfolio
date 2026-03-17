interface SectionLabelProps {
  children: React.ReactNode;
}

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <p className="mb-1 text-xs font-semibold tracking-wide text-[--text-muted] uppercase">
      {children}
    </p>
  );
}
