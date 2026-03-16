interface SubsectionTitleProps {
  children: React.ReactNode;
}

export default function SubsectionTitle({ children }: SubsectionTitleProps) {
  return (
    <h3 className="mb-6 text-xs font-semibold tracking-widest text-slate-500 uppercase">
      {children}
    </h3>
  );
}
