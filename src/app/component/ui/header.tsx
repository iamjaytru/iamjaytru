import Link from "next/link";
import NavBar from "./navbar";
import { MobileMenu } from "./mobile-menu";

export default function Header() {
  return (
    <header
    className="fixed top-0 left-0 w-full z-50 bg-[#0a192f] py-4"
     aria-label="Main navigation">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="text-white font-bold text-2xl sm:text-3xl md:text-4xl hover:text-[#64ffda] transition-colors duration-200"
            aria-label="Homepage"
          >
            CJ
          </Link>

          <div className="flex items-center gap-4">
            <NavBar />
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
