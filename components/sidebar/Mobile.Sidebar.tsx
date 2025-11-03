import { PanelLeftClose, PanelLeftOpenIcon } from "lucide-react";
import LeftSidebarItem from "./Left.item";
import ProfileItem from "./Profile.item";
import ThemeSwitcher from "../theme-switcher";

export default function MobileSidebar() {
  return (
    <div className="flex px-2 justify-center items-center h-full md:hidden">
      <input type="checkbox" id={"sidebar-menu"} className="peer hidden" />
      <label htmlFor="sidebar-menu" className="w-fit h-fit">
        <PanelLeftOpenIcon />
      </label>

      <label
        htmlFor="sidebar-menu"
        className="fixed inset-0 z-10 bg-black/40 opacity-0 invisible transition-all duration-300 peer-checked:opacity-100 peer-checked:visible"
      ></label>
      <div className="fixed py-2 top-0 left-0 z-20 h-full bg-sidebar border-sidebar-border border-r-2 -translate-x-full peer-checked:translate-x-0 transition-transform duration-300 ease-in-out">
        <div className="flex gap-4">
          <div>
            <LeftSidebarItem />
            <ProfileItem />
          </div>
          <label htmlFor="sidebar-menu" className="size-8">
            <PanelLeftClose />
          </label>
        </div>
      </div>
    </div>
  );
}
