interface SectionHeaderProps {
  title: string;
}

export default function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only">
      <h2 className="text-sm font-bold tracking-widest text-slate-200 uppercase">
        {title}
      </h2>
    </div>
  );
}
