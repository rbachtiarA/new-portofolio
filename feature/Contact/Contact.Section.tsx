import ContactButton from "@/components/contact-buttons";
import SectionWrapper from "@/components/main/SectionWrapper";

export default function ContactSection() {
  return (
    <SectionWrapper id="contact">
      <h2>Let&apos;s Connected!</h2>
      <p className="text-muted-foreground">
        Feel free to contact me if you want to chat with me or want to discuss
        interesting things about app development.
      </p>
      <div>
        <ContactButton />
      </div>
    </SectionWrapper>
  );
}
