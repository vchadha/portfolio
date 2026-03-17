interface RoleBadgeProps {
  role: string;
}

export default function RoleBadge({ role }: RoleBadgeProps) {
  return (
    <span className="ml-2 rounded-full bg-[--surface] px-2.5 py-0.5 text-xs font-medium text-[--text-muted]">
      {role}
    </span>
  );
}
