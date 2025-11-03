import { PROJECT_LIST } from "@/constant/content";
import ProjectItem from "./Project.item";
import SectionWrapper from "@/components/main/SectionWrapper";

export default function ProjectFeatured() {
  const content = PROJECT_LIST;
  return (
    // <div
    //   id="projects"
    //   className="w-full flex flex-col gap-2 justify-center items-center"
    // >
    <SectionWrapper id="project" threshold={0.1}>
      <h2>Featured Projects</h2>
      <p className="text-muted-foreground text-center">
        A collection of projects I’ve crafted with passion, either built by
        myself or in collaboration with friends and fellow creators
      </p>
      <div className="grid max-w-[1400px] md:grid-cols-2 2xl:grid-cols-3 w-full justify-center gap-4">
        {content.map((item) => (
          <ProjectItem content={item} key={item.slug} />
        ))}
      </div>
    </SectionWrapper>
  );
}
