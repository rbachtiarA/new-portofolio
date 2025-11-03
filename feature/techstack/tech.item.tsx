import { Content } from "@/types/content";
import Image from "next/image";
export default function TechItem({ content }: { content: Content }) {
  return (
    <div className="bg-card border-card w-sm p-2 rounded-xl shadow hover:shadow-2xl">
      <div className="space-y-4">
        <h3 className="font-semibold">{content.mainTitle}</h3>
        <p className="text-sm text-muted-foreground">{content.description}</p>
        <div className="w-full flex justify-center">
          <div className="flex flex-wrap justify-center items-end gap-4 w-3/4">
            {content.item?.length &&
              content.item?.map((item) => (
                <div key={item.slug} className="flex flex-col items-center">
                  <Image
                    src={item.icon!}
                    width={40}
                    height={40}
                    alt={`icon-${item.title}`}
                    className="size-12 my-auto bg-muted rounded-xl"
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
