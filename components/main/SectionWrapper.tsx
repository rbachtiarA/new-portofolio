"use client";
import { ReactNode, useEffect, useRef, useState } from "react";
import { Separator } from "../ui/separator";

export default function SectionWrapper({
  children,
  id,
  threshold = 0.3,
}: {
  children: ReactNode;
  id: string;
  threshold?: number;
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);
  return (
    <>
      <div
        ref={ref}
        id={id}
        className={`${
          isVisible ? "animate-fade-in-scale opacity-100" : "opacity-[0.01]"
        } flex flex-col w-full justify-center items-center gap-4 text-md lg:text-lg first:h-full py-8 md:py-16`}
      >
        {children}
      </div>
      <Separator />
    </>
  );
}
