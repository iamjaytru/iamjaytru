import Link from "next/link";
import React from "react";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <nav className="hidden md:flex items-center space-x-8">
      <Link
        href="#about"
        className="text-primary/30 hover:text-[#64ffda] transition-colors"
      >
        About
      </Link>
      <Link
        href="#experience"
        className="text-primary/30 hover:text-[#64ffda] transition-colors"
      >
        Experience
      </Link>
      <Link
        href="#projects"
        className="text-primary/30 hover:text-[#64ffda] transition-colors"
      >
        Projects
      </Link>
      <Link
        href="/resume.pdf"
        className=" rounded bg-[#64ffda] hover:bg-opacity-10 transition-colors inline-block"
      >
        <div className="bg-[#0a192f] px-5 py-2 border border-[#64ffda] text-[#64ffda] relative hover:bottom-0.5 hover:right-0.5 transition-colors duration-300 rounded">
         Resume
        </div>
      </Link>
    </nav>
  );
};

export default NavBar;
