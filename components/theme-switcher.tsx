"use client";
import { useTheme } from "next-themes";
import { Switch } from "./ui/switch";
import { MoonIcon, SunIcon } from "lucide-react";
import { useLayoutEffect, useState } from "react";

export default function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isToggling, setIsToggling] = useState(false);
  const isDark = resolvedTheme === "dark";

  const handleToggle = () => {
    if (isToggling) return;
    setIsToggling(true);

    setTheme(isDark ? "light" : "dark");
    setTimeout(() => {
      setIsToggling(false);
    }, 300);
  };

  useLayoutEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (!mounted) setMounted(true);
  }, [mounted]);

  if (!mounted) {
    return <div className="w-[75px] h-full"></div>;
  }
  return (
    <div
      className={`flex items-center gap-2 w-[75px] ${
        isToggling ? "opacity-70 transition-opacity" : ""
      }`}
    >
      <Switch
        id="theme-switch"
        onCheckedChange={handleToggle}
        checked={isDark}
        disabled={isToggling}
      />
      <label htmlFor="theme-switch">
        <span className="sr-only">switch theme</span>
        <SunIcon className="dark:hidden" />
        <MoonIcon className="hidden dark:block" />
      </label>
    </div>
  );
}
