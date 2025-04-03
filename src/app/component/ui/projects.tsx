import { Github, ExternalLink, Folder } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  const featuredProjects = [
    {
      title: "E-commerce Website",
      description:
        "A responsive e-commerce site built with React and Node.js. Features include product listings, shopping cart functionality, and user authentication.",
      tech: ["React", "TypeScript", "Tailwind CSS", "MongoDB", "Node.js"],
      githubUrl: "https://github.com/Configcorp-com/grand-plaza",
      liveUrl: "#",
      image: "/ecommerce-placeholder.jpg",
    },
    {
      title: "Grand Chat",
      description:
        "A real-time chat application with authentication and message history. Built with modern web technologies for seamless communication.",
      tech: ["React", "Typescript", "Tailwind CSS", "WebSockets"],
      githubUrl: "https://github.com/yourusername/grand-chat",
      liveUrl: "#",
      image: "/chat-placeholder.jpg",
    },
  ];

  const otherProjects = [
    "Weather App",
    "Task Manager",
    "Recipe Finder",
    "Portfolio Site",
    "Blog Platform",
    "Quiz App",
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a192f]">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 relative after:content-[''] after:block after:w-16 after:h-1 after:bg-[#64ffda] after:mt-2">
          My Projects
        </h2>

        <div className="space-y-20">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`grid md:grid-cols-12 gap-6 md:gap-8 items-center ${
                index % 2 === 0 ? "" : "md:[&>div:first-child]:order-2"
              }`}
            >
              <div className="md:col-span-7 relative group rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-[#64ffda] bg-opacity-10 z-10 transition-opacity duration-300 group-hover:opacity-0 rounded-lg"></div>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={450}
                  className="w-full h-auto object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div
                className={`md:col-span-5 ${
                  index % 2 === 0
                    ? "md:text-right md:-ml-16 lg:-ml-24"
                    : "md:text-left md:-mr-16 lg:-mr-24"
                }`}
              >
                <p className="text-[#64ffda] text-sm mb-2 font-mono">
                  Featured Project
                </p>
                <h3 className="text-2xl font-bold text-white mb-4 hover:text-[#64ffda] transition-colors">
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </Link>
                </h3>
                <div className="bg-[#112240] p-6 rounded-lg shadow-xl relative z-20 ">
                  <p className="text-primary/60 mb-4 text-sm md:text-base">
                    {project.description}
                  </p>
                  <ul className="flex flex-wrap gap-2 text-xs md:text-sm text-primary/60 font-mono mb-4">
                    {project.tech.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                  <div className="flex gap-4 justify-end">
                    <Link
                      href={project.githubUrl}
                      aria-label={`GitHub repository for ${project.title}`}
                      className="text-primary/60 hover:text-[#64ffda] transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={20} />
                    </Link>
                    <Link
                      href={project.liveUrl}
                      aria-label={`Live demo of ${project.title}`}
                      className="text-primary/60 hover:text-[#64ffda] transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={20} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="mt-24">
            <h3 className="text-2xl font-bold text-white mb-8 relative after:content-[''] after:block after:w-12 after:h-1 after:bg-[#64ffda] after:mt-2">
              Other Projects
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <div
                  key={project}
                  className="bg-[#112240] rounded-lg p-6 hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-lg hover:shadow-[#64ffda]/10"
                >
                  <div className="flex justify-between items-start mb-6">
                    <Folder size={24} className="text-[#64ffda] mb-2" />
                    <div className="flex gap-3">
                      <Link
                        href="#"
                        aria-label={`GitHub repository for ${project}`}
                        className="text-primary/60 hover:text-[#64ffda] transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={18} />
                      </Link>
                      <Link
                        href="#"
                        aria-label={`Live demo of ${project}`}
                        className="text-primary/60 hover:text-[#64ffda] transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={18} />
                      </Link>
                    </div>
                  </div>
                  <h4 className="text-white font-bold text-lg mb-3 hover:text-[#64ffda] transition-colors">
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                      {project}
                    </Link>
                  </h4>
                  <p className="text-primary/60 text-sm mb-4">
                    A {project.toLowerCase()} built with modern web
                    technologies.
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs text-primary/60 font-mono">
                    <span>React</span>
                    <span>TypeScript</span>
                    <span>Tailwind</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
