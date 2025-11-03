import BrandLogo from "../icon/BrandLogo";
import Link from "next/link";

const className = {
  itemList: "px-2 py-1 rounded-lg cursor-pointer w-full",
  activeItem: "font-semibold bg-accent",
};

function LeftItem({ label, link }: { link: string; label: string }) {
  return (
    <li className={`${className.itemList} relative group`}>
      <Link href={link} prefetch={true} className="flex relative z-6">
        {label}
      </Link>
      <div className="absolute z-5 bg-accent w-full h-full inset-0 rounded-lg transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 ease-in-out"></div>
    </li>
  );
}

export default function LeftSidebarItem() {
  return (
    <div className="px-2 py-3 space-y-2">
      <Link
        href={"/"}
        className={`flex gap-2 items-center px-2 py-2 ${className.itemList}`}
      >
        <BrandLogo className="size-16 fill-primary rounded-full border-2 border-primary" />
        <span className="text-lg font-bold">RyanBA</span>
      </Link>
      <ul className="space-y-1 text-md">
        <LeftItem label="# Welcome" link="/#welcome" />
        <LeftItem label="# About Me" link="/#about-me" />
        <LeftItem label="# Tech Stack" link="/#tech-stack" />
        <LeftItem label="# My Project" link="/#project" />
      </ul>
    </div>
  );
}
