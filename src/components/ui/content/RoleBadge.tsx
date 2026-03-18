interface RoleBadgeProps {
  role: string;
}

export default function RoleBadge({ role }: RoleBadgeProps) {
  return (
    <span
      className="ml-2 inline-flex items-center"
      style={{
        fontFamily: "var(--font-silkscreen)",
        fontSize: "0.65rem",
        letterSpacing: "0.06em",
        color: "var(--accent)",
        backgroundColor: "var(--accent-tint)",
        border: "1px solid var(--accent)",
        padding: "3px 8px",
        verticalAlign: "middle",
        position: "relative",
        top: "-1px",
        clipPath: `polygon(
          3px 0%, calc(100% - 3px) 0%,
          100% 3px, 100% calc(100% - 3px),
          calc(100% - 3px) 100%, 3px 100%,
          0% calc(100% - 3px), 0% 3px
        )`,
      }}
    >
      {role}
    </span>
  );
}
