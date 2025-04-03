"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface SideBarProps {
  domain?: string;
  className?: string;
}

export default function SideBar({
  domain = "chukuweikejude7@gmail.com",
  className,
}: SideBarProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "relative hidden md:block right-15 top-12 h-full w-12 bg-[#0a192f] md:items-center md:justify-center transition-all duration-300",
        isHovered && "w-16",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        href="mailto:chukuweikejude7@gmail.com"
        className="vertical-text text-[#64ffda] font-mono text-sm tracking-widest hover:text-[#8fffdf] transition-colors"
      >
        {domain}
      </Link>

      <style jsx global>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          transform: rotate(180deg);
          padding: 1rem 0;
        }
      `}</style>
    </div>
  );
}
