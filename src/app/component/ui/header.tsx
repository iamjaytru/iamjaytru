import Link from "next/link";
import Image from "next/image";
import NavBar from "./navbar";
import { MobileMenu } from "./mobile-menu";

export default function Header() {
  return (
    <header
      className="fixed top-0 left-0 w-full bg-[#0a192f] py-0 z-50"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link
            className="text-white font-bold text-2xl sm:text-3xl md:text-5xl hover:text-[#64ffda] transition-colors duration-200"
            href="/"
            aria-label="Homepage"
          >
            <Image
              src="/images/CJ-real.svg"
              alt="Logo"
              width={80}
              height={80}
            />
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
