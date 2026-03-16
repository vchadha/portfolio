import Image from "next/image";

interface SectionCardProps {
  children: React.ReactNode;
  image?: {
    src: string;
    alt: string;
    aspect?: "video" | "square" | "cover";
  };
}

const aspectClasses = {
  video: "aspect-video",
  square: "aspect-square",
  cover: "aspect-[4/3]",
};

export default function SectionCard({ children, image }: SectionCardProps) {
  const aspectClass = aspectClasses[image?.aspect ?? "video"];

  return (
    <div
      className={`group relative grid pb-1 transition-all sm:gap-8 md:gap-4 lg:group-hover/list:opacity-50 lg:hover:!opacity-100 ${
        image ? "gap-4 sm:grid-cols-8" : "sm:grid-cols-8"
      }`}
    >
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
      {image && (
        <Image
          src={image.src}
          alt={image.alt}
          width={320}
          height={240}
          className={`z-10 ${aspectClass} rounded border-2 border-slate-200/10 object-cover transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1`}
        />
      )}
      {children}
    </div>
  );
}
