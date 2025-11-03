import { Button } from "./ui/button";
import { LinkedinIcon, MailIcon } from "lucide-react";
import CallButton from "./my-number";
import Link from "next/link";
import { USER_CONTACT } from "@/constant/contact";

export default function ContactButton() {
  const contact = USER_CONTACT;
  return (
    <div className="flex gap-2 mt-4">
      <Button asChild title="Send email" variant={"outline"} size={"lg"}>
        <Link href={contact.email} prefetch={false}>
          <MailIcon />
        </Link>
      </Button>
      <CallButton />
      <Button asChild title="Ryan's linkedIn" variant={"outline"} size={"lg"}>
        <Link href={contact.linkedIn} prefetch={false} target="_blank">
          <LinkedinIcon />
        </Link>
      </Button>
    </div>
  );
}
