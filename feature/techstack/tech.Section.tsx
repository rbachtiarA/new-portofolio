import SectionWrapper from "@/components/main/SectionWrapper";
import React from "react";
import TechItem from "./tech.item";
import { TECH_STACK } from "@/constant/content";

export default function TechSection() {
  const contents = TECH_STACK;
  return (
    <SectionWrapper id="tech-stack" threshold={0.2}>
      <h2>Tech & Tools</h2>
      <p className="text-muted-foreground text-center">
        My favorite stack and tools that help me bring ideas to life and build
        awesome web applications.
      </p>
      <div className="flex w-full gap-2 flex-wrap justify-center">
        <TechItem content={contents.frontend} />
        <TechItem content={contents.backend} />
        <TechItem content={contents.database} />
        <TechItem content={contents.tools} />
      </div>
    </SectionWrapper>
  );
}
