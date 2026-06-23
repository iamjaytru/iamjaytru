import About from "./about";
import SocialLinks from "./social-links";

export default function HeroSection() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-12 min-h-screen">
      <div className="flex-1 space-y-6">
        <p className="text-[#64ffda] text-lg">Hi, my name is</p>

        <h1 className="text-5xl font-bold text-primary">
          Chukuweike Jude
        </h1>

        <h2 className="text-2xl sm:text-4xl font-semibold text-primary/70">
          Frontend Developer
        </h2>

        <p className="text-primary/60 sm:text-primary/40 text-base sm:text-lg max-w-lg">
          I build modern, user-focused web applications and digital
          experiences that solve real-world problems. With experience
          developing e-commerce platforms, management systems, and
          business solutions, I enjoy turning ideas into products that
          people can use and businesses can grow with.
        </p>

        <SocialLinks />
      </div>

      <div className="flex flex-1 justify-center w-full md:w-auto">
        <About />
      </div>
    </div>
  );
}
