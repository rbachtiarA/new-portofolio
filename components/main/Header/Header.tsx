import MobileSidebar from "@/components/sidebar/Mobile.Sidebar";
import ThemeSwitcher from "@/components/theme-switcher";
import PageTitle from "./PageTitle";

export default function Header() {
  return (
    <div className="gap-2 border-b-2 border-sidebar-border pr-2 py-1 md:px-2 lg:py-2 lg:px-6 flex justify-between items-center">
      <MobileSidebar />
      <PageTitle />
      <ThemeSwitcher />
    </div>
  );
}
