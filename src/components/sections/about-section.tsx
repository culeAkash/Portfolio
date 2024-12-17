import SkillIcon from "../skills-icons";
import { motion } from "motion/react";

const AboutSection = ({
  scrollToSection,
}: {
  scrollToSection: (section: string) => void;
}) => {
  return (
    <div className="mt-20 md:mt-20 w-full h-fit" id="about-section">
      <div className="flex flex-col gap-y-2 items-center">
        <h1 className="text-xl md:text-3xl font-bold text-center text-[#E2E9F1] uppercase font-mono">
          <p style={{ letterSpacing: "10px" }}>
            About<span className="ml-2">Me</span>
          </p>
        </h1>

        <div className="w-10 h-[3px] bg-[#1d2d5a] mt-4" />
        <p className="text-[#94A3B8] text-center text-md w-full md:w-2/3 mt-5">
          Here, you will find more information about me, what I do, and my
          current skills mostly in terms of programming and tecnology.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center md:justify-between gap-y-10 md:gap-x-8 md:items-start mt-24">
        <div className="w-full md:w-1/2 space-y-4">
          <h1 className="font-bold text-2xl text-[#E2E9F1]">Get to know me!</h1>
          <p
            className="text-[#94A3B8] text-md font-sans"
            style={{ lineHeight: "2" }}
          >
            I'm a <span className="text-[#369ea0]">Software Engineer</span> with
            a passion for creating innovative and efficient solutions. With a
            strong foundation in{" "}
            <span className="text-[#369ea0]">
              Java, Node.js, and Spring Boot
            </span>
            , I specialize in designing scalable microservices, crafting
            efficient APIs, and solving complex problems. Constantly learning
            and evolving, I'm dedicated to building innovative and impactful
            solutions. Let's collaborate and create something amazing! Feel free
            to Connect or Follow me on my{" "}
            <a href="https://www.linkedin.com/in/akash-jaiswal-704b48212/">
              <span className="text-[#369ea0] underline">Linkedin</span>
            </a>{" "}
            and{" "}
            <a href="https://twitter.com/space_monkey_05">
              <span className="text-[#369ea0] underline">Twitter</span>
            </a>{" "}
            where I post useful content related to Web Development and
            Programming.
            <br />
            <span className="mt-4">
              I'm open to <span className="text-[#369ea0]">Job </span>
              opportunities where I can contribute, learn and grow. If you have
              a good opportunity that matches my skills and experience then
              don't hesitate to <span className="text-[#369ea0]">
                contact
              </span>{" "}
              me.
            </span>
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.1 }}
            className="mt-4 mr-4 transition bg-[#369ea0] h-[50px] w-40  rounded-[10px]"
            onClick={() => scrollToSection("contact-section")}
          >
            <p className="text-[#c8ced7] uppercase group-hover:text-[#369ea0] text-sm font-medium">
              Contact
            </p>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.1 }}
            className="mt-4 transition bg-[#369ea0] h-[50px] w-40  rounded-[10px] text-sm "
            onClick={() =>
              window.open(
                "https://drive.google.com/uc?export=download&id=1ulSM8w7A79b8YX0s51zkuCdRQr-2euux"
              )
            }
          >
            <p className="text-[#c8ced7] uppercase group-hover:text-[#369ea0]">
              Download CV
            </p>
          </motion.button>
        </div>
        <div className="w-full md:w-1/2 space-y-4 md:ml-10">
          <div className="font-bold text-2xl text-[#E2E9F1]">My Skills</div>
          <div className="flex flex-wrap w-full gap-2">
            <SkillIcon name="HTML" />
            <SkillIcon name="CSS" />
            <SkillIcon name="JavaScript" />
            <SkillIcon name="TypeScript" />
            <SkillIcon name="NextJS" />
            <SkillIcon name="ReactJS" />
            <SkillIcon name="ShadCN" />
            <SkillIcon name="Tailwind CSS" />
            <SkillIcon name="Spring Boot" />
            <SkillIcon name="Java" />
            <SkillIcon name="MongoDB" />
            <SkillIcon name="MySQL" />
            <SkillIcon name="Docker" />
            <SkillIcon name="Python" />
            <SkillIcon name="React Native" />
            <SkillIcon name="Responsive Design" />
            <SkillIcon name="Git" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
