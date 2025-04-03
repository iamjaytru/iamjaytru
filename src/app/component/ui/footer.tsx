import Link from "next/link";
import SocialLinks from "./social-links";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1e2b47] py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-center gap-6">
          {/* Social Links */}
          <SocialLinks />

          {/* Attribution */}
          <p className="text-center text-primary/60 text-sm">
            Designed & Built by Chukuweike Jude
            <span className="mx-2">•</span>
            Inspired by Brittany Chiang
          </p>

          {/* Copyright */}
          <p className="text-primary/40 text-xs">
            © {currentYear} All Rights Reserved
          </p>

          {/* Back to top */}
          <Link
            href="#"
            className="text-[#64ffda] text-xs font-mono mt-4 hover:underline"
            aria-label="Back to top"
          >
            [ Back to Top ]
          </Link>
        </div>
      </div>
    </footer>
  );
}