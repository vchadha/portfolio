interface SubsectionTitleProps {
  children: React.ReactNode;
}

export default function SubsectionTitle({ children }: SubsectionTitleProps) {
  return (
    <h3
      className="mb-6 text-[--text-muted] uppercase"
      style={{
        fontFamily: "var(--font-silkscreen)",
        fontSize: "1.0rem",
        letterSpacing: "0.1em",
      }}
    >
      {children}
    </h3>
  );
}
