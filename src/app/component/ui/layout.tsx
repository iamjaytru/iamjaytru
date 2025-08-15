"use client";

import Header from "./header";
import HeroSection from "./hero-section";
import ExperienceSection from "./experience-section";
import Projects from "./projects";
import ContactSection from "./contact-section";
import Footer from "./footer";

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#0a192f] text-primary/30 antialiased">
      <Header />

      <main className="container pt-24 mx-auto px-4 sm:px-6 lg:px-8 py-8 md:pt-16">
        <HeroSection />
      </main>
      <ExperienceSection />
      <Projects />
      <ContactSection />
      <Footer />
    </div>
  );
}