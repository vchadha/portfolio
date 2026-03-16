import TechTag from "./TechTag";

interface TechTagListProps {
  techs: string[];
}

export default function TechTagList({ techs }: TechTagListProps) {
  return (
    <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
      {techs.map((tech) => (
        <li key={tech} className="mr-1.5 mt-2">
          <TechTag label={tech} />
        </li>
      ))}
    </ul>
  );
}
