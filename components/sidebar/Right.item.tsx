import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Content } from "@/types/content";

export default function ItemList({
  title,
  contents,
  className,
}: {
  isOpen?: boolean;
  className?: string;
  title: string;
  contents: Content[];
}) {
  return (
    <Accordion type="multiple">
      <AccordionItem value={title}>
        <AccordionTrigger className={className}>{title}</AccordionTrigger>
        <AccordionContent>
          <ul className="space-y-3 text-md">
            {contents.map((item) => (
              <li key={item.slug} className="flex items-center gap-2">
                <div>
                  {item.icon ? (
                    <Image
                      src={item.icon}
                      width={40}
                      height={40}
                      alt={`icon-${item.title}`}
                      className="bg-muted rounded-xl"
                    />
                  ) : (
                    <div className="w-10 h-10 bg-accent"></div>
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <p>{item.title}</p>
                  <p
                    className={`${
                      item.level === "Experienced"
                        ? "text-primary"
                        : "text-muted-foreground"
                    } text-sm`}
                  >
                    {item.level}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
