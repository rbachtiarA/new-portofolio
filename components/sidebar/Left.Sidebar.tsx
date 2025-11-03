import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import { Button } from "../ui/button";
import { ButtonGroup } from "../ui/button-group";
import Link from "next/link";
import NavigationItem from "./Left.item";
import ProfileItem from "./Profile.item";

export default function LeftSideBar() {
  return (
    <aside className="hidden md:flex bg-sidebar rounded-l-lg w-[250px] lg:w-[300px] border-r-2 border-sidebar-border flex-col justify-between">
      <NavigationItem />

      <div className="border-t-2 border-sidebar-border px-2 py-3">
        <ProfileItem />
      </div>
    </aside>
  );
}
