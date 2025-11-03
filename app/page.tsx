import AboutMe from "@/feature/About/aboutMe";
import ContactSection from "@/feature/Contact/Contact.Section";
import ProjectFeatured from "@/feature/Project/Project.section";
import TechSection from "@/feature/techstack/tech.Section";
import Welcome from "@/section/Welcome";

export default function Home() {
  return (
    <div className="h-full overflow-y-auto scroll-smooth px-2 md:px-4 lg:px-8">
      {/* <div className="h-full overflow-y-auto scroll-smooth px-2"> */}
      <Welcome />
      <AboutMe />
      <TechSection />
      <ProjectFeatured />
      <ContactSection />
    </div>
  );
}
