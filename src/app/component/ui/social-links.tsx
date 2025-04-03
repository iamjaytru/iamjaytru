import { Facebook, Github, Instagram, Linkedin, LucideIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

type SocialLink = {
  name: string;
  url: string;
  icon: LucideIcon;
  ariaLabel: string;
};

const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/iamjaytru",
    icon: Github,
    ariaLabel: "GitHub profile",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/iamjaytru",
    icon: Linkedin,
    ariaLabel: "LinkedIn profile",
  },
  {
    name: "Facebook",
    url: "https://facebook.com/chukuweikejude",
    icon: Facebook,
    ariaLabel: "Facebook profile",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/chuuweikejude",
    icon: Instagram,
    ariaLabel: "Instagram profile",
  },
];

type SocialLinksProps = {
  className?: string;
  iconSize?: number;
  iconClassName?: string;
  gap?: string;
};

const SocialLinks = ({
  className = "",
  iconSize = 20,
  iconClassName = "w-5 h-5 sm:w-6 sm:h-6",
  gap = "space-x-4 md:space-x-6",
}: SocialLinksProps) => {
  return (
    <div className={`flex ${gap} ${className}`}>
      {socialLinks.map((link) => (
        <Link
          key={link.name}
          href={link.url}
          aria-label={link.ariaLabel}
          className="text-primary/60 hover:text-[#64ffda] transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <link.icon size={iconSize} className={iconClassName} />
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;