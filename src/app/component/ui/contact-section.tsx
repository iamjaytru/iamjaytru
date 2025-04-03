import Link from "next/link";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-28 md:py-36 px-4 sm:px-6 lg:px-8 text-center"
    >
      <div className="container mx-auto max-w-2xl">
        <p className="text-[#64ffda] text-sm md:text-base font-mono mb-3">
          What's Next?
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
          Get In Touch
        </h2>
        <p className="text-primary/60 text-sm sm:text-base mb-10 md:mb-12 max-w-lg mx-auto">
          I'm excited to connect with other developers and explore new
          opportunities. Whether you have advice, want to collaborate, or just
          want to say hi, I'd love to hear from you!
        </p>
        <Link
          href="mailto:chukuweikejude7@gmail.com"
          className="group inline-block relative"
          aria-label="Send me an email"
        >
          <span className="relative z-10 block px-8 py-4 text-[#64ffda] border border-[#64ffda] rounded-md text-sm sm:text-base font-mono transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_10px_20px_rgba(100,255,218,0.2)]">
            Say Hello
          </span>
        </Link>

        <div className="mt-16 text-xs text-primary/40 font-mono">
          <p>Designed & Built by Chukuweike Jude</p>
        </div>
      </div>
    </section>
  );
}
