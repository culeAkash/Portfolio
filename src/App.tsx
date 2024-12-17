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
import { useMouseScroll } from "./hooks/use-scroll";
import { motion, useScroll } from "motion/react";
import twitterIcon from "./assets/socials/twitter.svg";
import githubIcon from "./assets/socials/github.svg";
import linkedinIcon from "./assets/socials/linkedin.svg";
import emailIcons from "./assets/socials/email.svg";
import SocialLink from "./components/social-link";

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
  } = useMouseScroll();

  const { scrollYProgress } = useScroll();

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
        <motion.div
          className="h-[1.5px] w-[200%] bg-[#369ea0] fixed top-20 left-[-100%] z-50"
          style={{ scaleX: scrollYProgress }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 3 }}
          className="px-14 md:px-28 relative"
        >
          <div className="absolute left-0 top-[8%] -translate-y-1/2 h-fit w-fit bg-[#0E1734] rounded-[5px] shadow-2xl p-2 hidden md:block">
            <div className="flex flex-col gap-y-4 justify-center items-center">
              <SocialLink
                href="https://github.com/culeAkash"
                icon={githubIcon}
              />
              <SocialLink
                href="https://x.com/space_monkey_05"
                icon={twitterIcon}
              />
              <SocialLink
                href="https://www.linkedin.com/in/akash-jaiswal-704b48212/"
                icon={linkedinIcon}
              />
              <SocialLink
                href="mailto:akashjaiswal3120@gmail.com"
                icon={emailIcons}
              />
            </div>
          </div>
          <div ref={heroRef}>
            <HeroSection />
          </div>
          <div ref={aboutRef} className="hidden-container">
            <AboutSection scrollToSection={scrollToSection} />
          </div>
          <div ref={workRef} className="hidden-container">
            <WorkExperience />
          </div>
          <div ref={projectsRef} className="hidden-container">
            <Projects />
          </div>
          <div ref={contactRef} className="hidden-container">
            <ContactMe />
          </div>
        </motion.div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
