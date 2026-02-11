import DynamicBackground from "@/components/DynamicBackground";
import Header from "@/components/Header";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";

import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <DynamicBackground />
      <div className="mx-auto min-h-screen max-w-7xl px-6 py-12 md:px-12 md:py-20 lg:flex lg:gap-16 lg:py-0">
        {/* Left column — sticky on desktop */}
        <div className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[30%] lg:flex-col lg:justify-between lg:py-20">
          <Header />
        </div>

        {/* Right column — scrollable content */}
        <main className="lg:w-[70%] lg:py-20">
          <About />
          <Skills />
          <Experience />
          <Projects />

          <Contact />
        </main>
      </div>
    </>
  );
}
