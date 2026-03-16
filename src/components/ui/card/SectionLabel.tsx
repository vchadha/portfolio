interface SectionLabelProps {
  children: React.ReactNode;
}

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <p className="mb-1 text-xs font-semibold tracking-wide text-slate-500 uppercase">
      {children}
    </p>
  );
}
