import ContentParser from "@/components/content-parser";
import SectionWrapper from "@/components/main/SectionWrapper";

export default function AboutMe() {
  return (
    // <div className="flex flex-col w-full justify-center items-center gap-4">
    <SectionWrapper id="about-me">
      <h2>About Me</h2>
      <div className="lg:w-3/4 text-center">
        <ContentParser
          className="text-muted-foreground"
          content="
          I'm a **Fullstack Web Developer** seeking a new role in an exciting
          company. I'm **open to opportunities** not only in web development
          but also in mobile and software application development. My main focus
          is building responsive and robust applications using **TypeScript/Javascript** and
          the NextJs framework, with experience in both **NextJs** and **NestJs**.
          I'm based in **Indonesia** and have experience working with remote
          teams. I hope you enjoy exploring my work!"
        />
      </div>
    </SectionWrapper>
  );
}
