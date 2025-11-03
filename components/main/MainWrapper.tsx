import { ReactNode } from "react";

export default function MainWrapper({ children }: { children: ReactNode }) {
  return (
    <main className="h-full w-full lg:w-[calc(100vw-1rem)] bg-background border-2 border-sidebar-border flex justify-between md:rounded-tl-lg overflow-hidden">
      {children}
    </main>
  );
}
