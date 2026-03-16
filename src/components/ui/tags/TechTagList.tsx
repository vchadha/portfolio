import TechTag from "./TechTag";

interface TechTagListProps {
  techs: string[];
}

export default function TechTagList({ techs }: TechTagListProps) {
  return (
    <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
      {techs.map((tech) => (
        <li key={tech} className="mt-2 mr-1.5">
          <TechTag label={tech} />
        </li>
      ))}
    </ul>
  );
}
