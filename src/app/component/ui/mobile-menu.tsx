"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "@/app/component/button";
import { Sheet, SheetContent, SheetTrigger } from "@/app/component/sheet";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-primary/30"
        >
          <Menu size={24} />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-[#0a192f] border-gray-700 p-0">
        <div className="flex flex-col h-full justify-center items-center">
          

          <nav className="flex flex-col items-center space-y-8">
            <Link
              href="#about"
              className="text-primary/30 text-lg font-medium tracking-wider"
              onClick={handleLinkClick}
            >
              ABOUT
            </Link>
            <Link
              href="#experience"
              className="text-primary/30 text-lg font-medium tracking-wider"
              onClick={handleLinkClick}
            >
              EXPERIENCE
            </Link>
            <Link
              href="#projects"
              className="text-primary/30 text-lg font-medium tracking-wider"
              onClick={handleLinkClick}
            >
              PROJECTS
            </Link>
            <div className="flex justify-center mt-8">
              <Link
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border border-[#64ffda] text-[#64ffda] rounded-md text-sm font-mono hover:bg-[#64ffda]/10 transition-colors flex items-center gap-2"
                onClick={handleLinkClick}
              >
                View Resume
              </Link>
            </div>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}
