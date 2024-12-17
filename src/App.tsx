import Navbar from "./components/navbar";
import "./App.css";
import { useEffect, useRef } from "react";
import { Loader2 } from "lucide-react";
import HeroSection from "./components/sections/hero-section";
import AboutSection from "./components/sections/about-section";
import WorkExperience from "./components/sections/work-experience-section";
import Projects from "./components/sections/projects-section/projects-section";
import ContactMe from "./components/sections/contact-section";
import Footer from "./components/sections/footer-section";
import { useScroll } from "./hooks/use-scroll";

const App = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const glowCursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const glowCursor = glowCursorRef.current;

    if (glowCursor && glowCursor) {
      container?.addEventListener("mousemove", (e) => {
        // Get container boundaries
        const { top, left } = container.getBoundingClientRect();

        // Calculate cursor position relative to the container
        const cursorX = e.clientX - left;
        const cursorY = e.clientY - top;

        // Move the glowing effect
        glowCursor.style.transform = `translate(${
          cursorX - glowCursor.offsetWidth / 2
        }px, 
                                             ${
                                               cursorY -
                                               glowCursor.offsetHeight / 2
                                             }px)`;
      });
      container?.addEventListener("mouseleave", () => {
        glowCursor.style.display = "none";
      });
      container?.addEventListener("mouseenter", () => {
        glowCursor.style.display = "block";
      });
    }
  }, []);

  const {
    aboutRef,
    contactRef,
    heroRef,
    projectsRef,
    scrollToSection,
    workRef,
  } = useScroll();

  if (!containerRef || !glowCursorRef) {
    return (
      <div className="h-[100vh] flex justify-center items-center">
        <Loader2 className="animate-spin h-6 w-6" />
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="sticky top-0 z-50 shadow-lg h-20">
        <Navbar scrollFunc={scrollToSection} />
      </div>
      <div
        className="relative min-h-[100vh] overflow-hidden w-full z-10 bg-[#10162B]"
        ref={containerRef}
      >
        <div
          className="absolute w-[320px] h-[320px] bg-[#131f43] rounded-lg pointer-events-none mix-blend-screen glow-cursor opacity-50 blob-cursor__bg"
          ref={glowCursorRef}
        />
        <div className="px-14 md:px-28">
          <div ref={heroRef}>
            <HeroSection />
          </div>
          <div ref={aboutRef}>
            <AboutSection scrollToSection={scrollToSection} />
          </div>
          <div ref={workRef}>
            <WorkExperience />
          </div>
          <div ref={projectsRef}>
            <Projects />
          </div>
          <div ref={contactRef}>
            <ContactMe />
          </div>
          <div></div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
