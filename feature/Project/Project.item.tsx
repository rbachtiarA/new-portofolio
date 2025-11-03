import ContentParser from "@/components/content-parser";
import IconSkeleton from "@/components/icon/skeleton";
import { Button } from "@/components/ui/button";
import { Content } from "@/types/content";
import { GithubIcon, SquareArrowOutUpRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function ImageHead({ image, slug }: { image?: string; slug: string }) {
  if (image) {
    return (
      <Image
        src={image}
        alt={`image-${slug}`}
        width={150}
        height={150}
        className="w-full h-45 md:h-[200px] object-cover bg-accent rounded-t-xl "
      />
    );
  } else {
    return (
      <div className="h-45 md:h-[200px] w-full object-cover bg-accent rounded-t-xl" />
    );
  }
}

function Badges({ tag }: { tag: string }) {
  return (
    <div className="bg-accent border-border rounded-full text-sm px-2 py-0. outline-1">
      {tag}
    </div>
  );
}

export default function ProjectItem({ content }: { content: Content }) {
  return (
    <div className="h-full max-w-md rounded-xl bg-card shadow hover:shadow-2xl transition">
      <div className="relative">
        <div className="absolute inset-0 bg-radial from-transparent from-50% to-black/20 w-full h-full rounded-t-xl"></div>
        <ImageHead image={content.image ?? undefined} slug={content.slug} />
      </div>
      <div className="p-2 space-y-4">
        <div className="flex gap-2 items-start justify-between">
          <div className="flex gap-4 items-center">
            {content?.icon ? (
              <Image
                src={content.icon}
                width={30}
                height={30}
                alt={`${content.icon}-${content.slug}`}
                className="size-8"
              />
            ) : (
              <IconSkeleton />
            )}
            <div>
              <h3 className="font-semibold">{content.title}</h3>
              <span className="text-sm line-clamp-1 text-primary">
                {content.type}
              </span>
            </div>
          </div>
          <div className="flex space-x-0.5">
            {content.link?.github && (
              <Button
                size={"icon-sm"}
                asChild
                variant={"secondary"}
                title={`Github ${content.title}`}
              >
                <Link href={content.link.github} prefetch={false}>
                  <GithubIcon />
                </Link>
              </Button>
            )}
            {content.link?.url && (
              <Button size={"icon-sm"} asChild variant={"secondary"}>
                <Link
                  href={content.link.url}
                  prefetch={false}
                  title={`Url ${content.title}`}
                >
                  <SquareArrowOutUpRightIcon />
                </Link>
              </Button>
            )}
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {content.tags &&
            content.tags.map((tag) => (
              <Badges tag={tag} key={`tag-${tag.split(" ").join()}`} />
            ))}
        </div>
        <ContentParser
          className="text-muted-foreground"
          content={content.shortSummary ?? ""}
        />
      </div>
    </div>
  );
}
