interface AuthorListProps {
  authors: string[];
  myName: string;
}

export default function AuthorList({ authors, myName }: AuthorListProps) {
  return (
    <p className="mt-2 text-sm leading-normal text-[--text-muted]">
      {authors.map((author, i) => (
        <span key={author}>
          {author === myName ? (
            <span className="font-bold text-[--text-primary]">{author}</span>
          ) : (
            author
          )}
          {i < authors.length - 1 ? ", " : ""}
        </span>
      ))}
    </p>
  );
}
