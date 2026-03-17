import { cn } from "@/lib/utils";

interface TechTagProps {
  label: string;
  className?: string;
}

export default function TechTag({ label, className }: TechTagProps) {
  return (
    <div
      className={cn(
        "flex items-center rounded-full px-3 py-1 text-xs leading-5 font-medium",
        className
      )}
      style={{
        backgroundColor: "var(--accent-tint)",
        color: "var(--accent)",
      }}
    >
      {label}
    </div>
  );
}
