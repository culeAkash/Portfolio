import Navbar from "./components/navbar";
import "./App.css";
import { useEffect, useRef } from "react";
import { Loader2 } from "lucide-react";
import HeroSection from "./components/sections/hero-section";
import AboutSection from "./components/sections/about-section";
import WorkExperience from "./components/sections/work-experience-section";
import Projects from "./components/sections/projects-section/projects-section";
import ContactMe from "./components/sections/contact-section";

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

  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  if (!containerRef || !glowCursorRef) {
    return (
      <div className="h-[100vh] flex justify-center items-center">
        <Loader2 className="animate-spin h-6 w-6" />
        <div>Loading...</div>
      </div>
    );
  }

  const scrollToSection = (section: string) => {
    let ref = null;
    switch (section) {
      case "home-section":
        ref = heroRef;
        break;
      case "about-section":
        ref = aboutRef;
        break;
      case "work-section":
        ref = workRef;
        break;
      case "projects-section":
        ref = projectsRef;
        break;
      case "contact-section":
        ref = contactRef;
        break;
      default:
        break;
    }
    if (ref) {
      const targetSection = (ref.current?.offsetTop || 0) - 20;
      window.scrollTo({ top: targetSection, behavior: "smooth" });
    }
  };

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
            <AboutSection />
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
        </div>
      </div>
    </div>
  );
};

export default App;
