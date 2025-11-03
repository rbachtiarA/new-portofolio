import { ButtonGroup } from "../ui/button-group";
import { Button } from "../ui/button";
import Link from "next/link";
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import { USER_CONTACT } from "@/constant/contact";

export default function ProfileItem() {
  const contact = USER_CONTACT;
  return (
    <div className="flex items-center gap-2 pl-4 md:pl-0">
      <div className="w-12 h-12 bg-accent rounded-full"></div>
      <div className="flex flex-col gap-1">
        <p className="line-clamp-1">Ryan Bachtiar Abdalla</p>
        <ButtonGroup>
          <Button asChild size={"icon"} variant={"outline"} title="Send email">
            <Link href={contact.email} prefetch={false}>
              <MailIcon />
            </Link>
          </Button>
          <Button
            asChild
            size={"icon"}
            variant={"outline"}
            title="Ryan's github"
          >
            <Link href={contact.github} prefetch={false} target="_blank">
              <GithubIcon />
            </Link>
          </Button>
          <Button
            asChild
            size={"icon"}
            variant={"outline"}
            title="Ryan's linkedIn"
          >
            <Link href={contact.linkedIn} prefetch={false} target="_blank">
              <LinkedinIcon />
            </Link>
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}
