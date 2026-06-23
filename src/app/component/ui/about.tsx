export default function About() {
  const technologies = [
    "React",
    "TypeScript",
    "JavaScript (ES6+)",
    "Next.js",
    "Laravel",
    "Inertia.js",
    "Tailwind CSS",
    "Node.js",
    "SQLite",
    "MySQL",
    "Git",
    "REST APIs",
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8">
          About Me
        </h2>

        <div className="space-y-6">
          <p className="text-lg text-gray-300 leading-relaxed">
            I’m a Frontend Developer passionate about building modern,
            scalable, and user-focused web applications. With experience
            developing multi-vendor e-commerce platforms, business
            management systems, and educational solutions, I enjoy
            transforming complex ideas into seamless digital experiences
            that are both functional and visually engaging.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed">
            My expertise includes{" "}
            <span className="text-[#64ffda]">
              React, TypeScript, Next.js, Laravel, and Inertia.js
            </span>
            , allowing me to bridge the gap between frontend excellence
            and backend functionality. I focus on creating responsive,
            high-performance applications that deliver exceptional user
            experiences across devices.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed">
            My journey in software development began through self-learning
            and has grown through hands-on projects, real-world problem
            solving, and continuous improvement. I’m particularly
            interested in{" "}
            <span className="text-[#64ffda]">
              accessible design, clean architecture
            </span>{" "}
            and building products that solve meaningful business
            challenges. I value learning from experienced developers and
            staying current with modern development practices.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
          {technologies.map((tech) => (
            <div key={tech} className="flex items-center">
              <span className="text-[#64ffda] mr-2">▹</span>
              <span className="text-gray-400 text-sm md:text-base">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
