
import About from "./about";
import SocialLinks from "./social-links";

export default function HeroSection() {
  
  return (
    <div className="flex flex-col md:flex-row items-center justify-between h-full gap-8 md:gap-12">
      <div className="flex flex-col w-full md:w-auto flex-1 pl-4 space-y-4 md:space-y-6">
        <header className="space-y-2">
          <h3 className="text-xs sm:text-sm text-[#64ffda] tracking-widest pb-2 md:pb-3">
            Hi, My name is
          </h3>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary leading-tight">
            Chukuweike Jude
          </h1>
          <h2 className="text-2xl sm:text-3xl font-medium text-[#9594aa]">
            Junior Frontend Developer
          </h2>
        </header>

        <p className="text-primary/60 sm:text-primary/40 text-base sm:text-lg max-w-lg">
          I&apos;m passionate about building responsive, accessible web applications
          with modern technologies.
        </p>

       <SocialLinks />
      </div>

      <div className="flex flex-1 justify-center w-full md:w-auto">
        <About />
      </div>
    </div>
  );
}