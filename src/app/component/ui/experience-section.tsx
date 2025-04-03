"use client";

import { useState } from "react";
import SideBar from "./sidebar";

type ExperienceTab = "Internship" | "Bootcamp" | "Education";

interface ExperienceData {
  title: string;
  company: string;
  period: string;
  points: string[];
}

const EXPERIENCE_TABS: { id: ExperienceTab; label: string }[] = [
  { id: "Internship", label: "Internship" },
  { id: "Bootcamp", label: "Bootcamp" },
  { id: "Education", label: "Education" },
];

const EXPERIENCE_DATA: Record<ExperienceTab, ExperienceData> = {
  Internship: {
    title: "Frontend Development Intern",
    company: "CentralStack Technologies",
    period: "2024",
    points: [
      "Assisted in developing responsive UI components using React and TypeScript",
      "Collaborated with senior developers to implement new features",
      "Learned best practices for code organization and version control",
    ],
  },
  Bootcamp: {
    title: "Full-Stack Bootcamp",
    company: "Code Academy",
    period: "2023",
    points: [
      "Learned full-stack development with React and Node.js",
      "Built projects to solidify understanding of concepts",
      "Collaborated with peers on group assignments",
    ],
  },
  Education: {
    title: "Bachelor of Computer Science",
    company: "University of Tech",
    period: "2020-2024",
    points: [
      "Specialized in software engineering",
      "Completed coursework in algorithms and data structures",
      "Participated in hackathons and coding competitions",
    ],
  },
};

export default function ExperienceSection() {
  const [selectedTab, setSelectedTab] = useState<ExperienceTab>(
    EXPERIENCE_TABS[0].id
  );

  return (
    <section id="experience" className="flex px-4 sm:px-6 lg:px-8">
      <div className="container flex-1 mx-auto max-w-6xl">
        <h2 className="text-3xl text-center md:text-start md:text-4xl font-bold text-white mb-12">
          My Journey
        </h2>

        <div className="grid md:grid-cols-[minmax(150px,200px)_1fr] gap-8">
          {/* Desktop Tab List */}
          <div
            className="hidden md:flex flex-col border-l-2 border-primary/20"
            role="tablist"
            aria-orientation="vertical"
          >
            {EXPERIENCE_TABS.map((tab) => (
              <button
                key={tab.id}
                id={`${tab.id}-tab`}
                role="tab"
                aria-selected={selectedTab === tab.id}
                aria-controls={`${tab.id}-panel`}
                className={`pl-6 py-3 text-left font-medium relative transition-colors ${
                  selectedTab === tab.id
                    ? "text-[#64ffda] before:absolute before:w-1 before:h-full before:bg-[#64ffda] before:-left-[1px] before:top-0"
                    : "text-primary/60 hover:text-[#64ffda] hover:bg-[#112240]/50"
                }`}
                onClick={() => setSelectedTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Mobile Tab List */}
          <div
            className="md:hidden flex overflow-x-auto pb-4 gap-2"
            role="tablist"
          >
            {EXPERIENCE_TABS.map((tab) => (
              <button
                key={tab.id}
                id={`${tab.id}-mobile-tab`}
                role="tab"
                aria-selected={selectedTab === tab.id}
                aria-controls={`${tab.id}-panel`}
                className={`px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedTab === tab.id
                    ? "text-white bg-[#112240] border-b-2 border-[#64ffda]"
                    : "text-primary/60 hover:bg-[#112240]/30"
                }`}
                onClick={() => setSelectedTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content Panel */}
          <div
            id={`${selectedTab}-panel`}
            role="tabpanel"
            aria-labelledby={`${selectedTab}-tab`}
            className="transition-opacity duration-200"
          >
            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl font-medium text-white">
                {EXPERIENCE_DATA[selectedTab].title}{" "}
                <span className="text-[#64ffda]">
                  @{EXPERIENCE_DATA[selectedTab].company}
                </span>
              </h3>
              <p className="text-primary/60 text-sm md:text-base">
                {EXPERIENCE_DATA[selectedTab].period}
              </p>
              <ul className="space-y-3">
                {EXPERIENCE_DATA[selectedTab].points.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#64ffda] mr-3 mt-1">▹</span>
                    <span className="text-primary/80 leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col pr-4">
        <SideBar />
      </div>
    </section>
  );
}
