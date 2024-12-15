const AboutSection = () => {
  return (
    <div className="mt-20 w-full px-24  h-[90vh]">
      <div className="flex flex-col gap-y-2 items-center ">
        <h1 className="text-3xl font-bold text-center text-[#E2E9F1] uppercase font-mono">
          <p style={{ letterSpacing: "10px" }}>
            About<span className="ml-2">Me</span>
          </p>
        </h1>

        <div className="w-10 h-[3px] bg-[#1d2d5a]" />
        <p className="text-[#94A3B8] text-center text-md w-2/3 mt-5">
          Here, you will find more information about me, what I do, and my
          current skills mostly in terms of programming and tecnology.
        </p>
      </div>
      <div className="flex flex-row justify-between gap-x-5 items-center mt-24 px-20">
        <div className="w-1/2 space-y-4">
          <h1 className="font-bold text-2xl text-[#E2E9F1]">Get to know me!</h1>
          <p
            className="text-[#94A3B8] text-md font-sans"
            style={{ lineHeight: "2" }}
          >
            I'm a <span className="text-[#2549ad]">Software Engineer</span> with
            a passion for creating innovative and efficient solutions. With a
            strong foundation in{" "}
            <span className="text-[#2549ad]">
              Java, Node.js, and Spring Boot
            </span>
            , I specialize in designing scalable microservices, crafting
            efficient APIs, and solving complex problems. Constantly learning
            and evolving, I'm dedicated to building innovative and impactful
            solutions. Let's collaborate and create something amazing! Feel free
            to Connect or Follow me on my{" "}
            <a href="https://www.linkedin.com/in/akash-jaiswal-704b48212/">
              <span className="text-[#2549ad] underline">Linkedin</span>
            </a>{" "}
            and{" "}
            <a href="https://twitter.com/space_monkey_05">
              <span className="text-[#2549ad] underline">Twitter</span>
            </a>{" "}
            where I post useful content related to Web Development and
            Programming.
            <br />
            <span className="mt-4">
              I'm open to <span className="text-[#2549ad]">Job </span>
              opportunities where I can contribute, learn and grow. If you have
              a good opportunity that matches my skills and experience then
              don't hesitate to <span className="text-[#2549ad]">
                contact
              </span>{" "}
              me.
            </span>
          </p>
        </div>
        <div className="w-1/2 space-y-4 ml-10">
          <div className="font-bold text-2xl text-[#E2E9F1]">My Skills</div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
