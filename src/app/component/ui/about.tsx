export default function About() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 flex items-center">
      <div className="mx-auto max-w-4xl lg:max-w-6xl">
        <div className="space-y-6 md:space-y-8">
          <p className="text-lg text-gray-300 leading-relaxed">
            I’m an enthusiastic junior developer with a strong foundation in{" "}
            <span className="text-[#64ffda]">modern web technologies.</span> I
            enjoy solving complex problems and creating applications that are
            both functional and visually engaging. Currently, I’m leveling up my
            skills in <strong>React, TypeScript, and responsive design.</strong>
          </p>

          <p className="text-lg text-gray-300 leading-relaxed">
            My journey in web development began with self-learning, evolving
            through hands-on projects and real-world experience. I’m deeply
            interested in{" "}
            <span className="text-[#64ffda]">accessible design</span> and
            industry best practices. Learning from experienced developers is
            something I value immensely.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
          {['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Node.js', 'Git'].map((tech) => (
            <div key={tech} className="flex items-center">
              <span className="text-[#64ffda] mr-2">▹</span>
              <span className="text-gray-400 text-sm md:text-base">{tech}</span>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
}
