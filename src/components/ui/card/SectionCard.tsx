import Image from "next/image";

import { cn } from "@/lib/utils";

type AspectRatio = "video" | "square" | "cover";

interface SectionCardProps {
  children: React.ReactNode;
  image?: {
    src: string;
    alt: string;
    aspect?: AspectRatio;
  };
}

const aspectClasses: Record<AspectRatio, string> = {
  video: "aspect-video",
  square: "aspect-square",
  cover: "aspect-[4/3]",
};

export default function SectionCard({ children, image }: SectionCardProps) {
  const aspectClass = aspectClasses[image?.aspect ?? "video"];

  return (
    <div
      className={cn(
        "group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:group-hover/list:opacity-50 lg:hover:!opacity-100",
        image && "gap-4"
      )}
    >
      <div className="card-hover-overlay" />
      {image && (
        <Image
          src={image.src}
          alt={image.alt}
          width={320}
          height={240}
          className={cn(
            "z-10 rounded border-2 border-[--border] object-cover transition group-hover:border-[--border-60] sm:order-1 sm:col-span-2 sm:translate-y-1",
            aspectClass
          )}
        />
      )}
      {children}
    </div>
  );
}
