import { useRef } from "react";

export const useScroll = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: string) => {
    console.log(section);

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
        console.log("Here is the contact section");

        ref = contactRef;
        break;
      default:
        break;
    }
    console.log(ref);

    if (ref) {
      const targetSection = (ref.current?.offsetTop || 0) - 20;
      window.scrollTo({ top: targetSection, behavior: "smooth" });
    }
  };

  return {
    heroRef,
    aboutRef,
    workRef,
    projectsRef,
    contactRef,
    scrollToSection,
  };
};
