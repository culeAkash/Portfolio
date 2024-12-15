import twitterIcon from "../../assets/socials/twitter.svg";
import githubIcon from "../../assets/socials/github.svg";
import linkedinIcon from "../../assets/socials/linkedin.svg";
import emailIcons from "../../assets/socials/email.svg";
import SocialLink from "../social-link";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <div className="relative h-[90vh]">
      <div className="w-full flex flex-row justify-center md:justify-between gap-x-8 py-20 px-28">
        <div className="w-full md:w-[55%] flex flex-col gap-y-4">
          <h1 className="text-xl md:text-5xl text-[#E2E9F1] uppercase font-serif">
            Hello, I'm Akash Jaiswal
          </h1>
          <h1 className="text-md md:text-2xl text-[#E2E9F1] uppercase font-serif">
            I'm a Full Stack Developer{" "}
          </h1>
          <p className="text-[#94A3B8] text-sm md:text-md ">
            Hi, I'm Akash, a Software Engineer with 2 years of experience in
            backend development using Java, Node.js, and Spring Boot, and
            frontend expertise in React and Next.js. I specialize in designing
            scalable microservices, crafting efficient APIs, and solving complex
            problems, with over 950+ DSA problems solved. Constantly learning
            and evolving, I’m dedicated to building innovative and impactful
            solutions. Let’s collaborate and create something amazing! 🚀
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center md:justify-items-start md:mt-20 mt-10">
            <SocialLink href="https://github.com/culeAkash" icon={githubIcon} />
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
      </div>
      <div className="hidden md:block absolute left-[50%] translate-x-[-50%] bottom-10 w-5 h-9 rounded-xl bg-transparent border-2 border-[#1d2d5a] ">
        <div className="mouse"></div>
      </div>
    </div>
  );
};

export default HeroSection;
