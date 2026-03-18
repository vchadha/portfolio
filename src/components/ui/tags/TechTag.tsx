import { cn } from "@/lib/utils";

interface TechTagProps {
  label: string;
  className?: string;
}

export default function TechTag({ label, className }: TechTagProps) {
  return (
    <div
      className={cn("inline-flex items-center px-2.5 py-1", className)}
      style={{
        fontFamily: "var(--font-silkscreen)",
        fontSize: "0.70rem",
        letterSpacing: "0.04em",
        lineHeight: "1.6",
        color: "var(--accent)",
        backgroundColor: "var(--accent-tint)",
        border: "1px solid var(--accent)",
        /* Notched corners — cuts 3px diagonal at each corner to create pixel art effect */
        clipPath: `polygon(
          3px 0%, calc(100% - 3px) 0%,
          100% 3px, 100% calc(100% - 3px),
          calc(100% - 3px) 100%, 3px 100%,
          0% calc(100% - 3px), 0% 3px
        )`,
      }}
    >
      {label}
    </div>
  );
}
