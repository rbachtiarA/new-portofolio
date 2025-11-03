import ContactButton from "@/components/contact-buttons";
import ContentParser from "@/components/content-parser";
import SectionWrapper from "@/components/main/SectionWrapper";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Welcome() {
  return (
    <SectionWrapper id="welcome">
      <div className="flex flex-col md:flex-row gap-4 w-full items-center justify-center">
        <Image
          src={"/Hero1.png"}
          alt={"Ryan Photo"}
          width={100}
          height={100}
          className="size-40 md:size-52 bg-accent rounded-full object-cover shadow-lg"
        />
        <div className="md:w-3/5 flex flex-col gap-2">
          <span>Fullstack Web Developer | Software Developer</span>
          <Separator />
          <h2>Ryan Bachtiar Abdalla</h2>
          <p className="text-muted-foreground">
            Crafting modern, user-focused web and software experiences inspired
            by client goals and evolving digital trends. Dedicated to building
            solutions that deliver both value and meaningful user engagement.
          </p>
          <div className="flex flex-col md:flex-row gap-2">
            <ContentParser content="Location: **Indonesia**" />
            <ContentParser content="Open to: **Remote / On site in Indonesia**" />
          </div>
          <ContactButton />
        </div>
      </div>
    </SectionWrapper>
  );
}
