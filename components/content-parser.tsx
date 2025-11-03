import { HTMLAttributes, HTMLProps } from "react";

export default function ContentParser({
  content,
  ...props
}: {
  content: string;
} & HTMLAttributes<HTMLParagraphElement>) {
  const parts = content.split(/(\*\*.*?\*\*)/g);

  return (
    <p {...props}>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={i} className="font-bold text-primary text-shadow-2xs">
              {part.slice(2, -2)}
            </strong>
          );
        } else return part;
      })}
    </p>
  );
}
