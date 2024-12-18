import SkillIcon from "../skills-icons";

const WorkExperience = () => {
  return (
    <div className="mt-24 w-full h-fit px-14 md:px-28">
      <div className="flex flex-col gap-y-2 items-center">
        <h1 className="md:text-3xl text-xl font-bold text-center text-[#E2E9F1] uppercase font-mono">
          <p style={{ letterSpacing: "10px" }}>
            Work<span className="ml-4">Experience</span>
          </p>
        </h1>

        <div className="w-10 h-[3px] bg-[#1d2d5a] mt-4" />
        <div className="flex flex-col md:flex-row  items-start justify-between w-full h-fit bg-transparent rounded-[10px] hover:bg-[#161f33] hover:shadow-xl transition-all mt-5 p-6 group">
          <div className="w-full md:w-1/2 h-fit flex items-start text-[#5F708E] text-sm uppercase group-hover:text-[#f1f1f2]">
            September, 2023 - Present
          </div>
          <div className="w-full md:w-1/2 mt-3 md:mt-0 h-fit flex flex-col items-start text-[#5F708E] text-sm justify-center">
            <p className="group-hover:text-[#369ea0] text-[#f1f1f2] text-md">
              Software Engineer, Cognizant Technology Solutions, Kolkata
            </p>
            <p className="mt-2">
              <ol className="list-disc ml-4">
                <li>
                  Worked as a Full Stack Developer. Developed, maintained, and
                  shipped production code for client websites.
                </li>
                <li>
                  Responsible for designing, implementing, and maintaining web
                  applications.
                </li>
                <li>
                  Worked proficiently with both backend and frontend teams to
                  produce quality code.
                </li>
              </ol>
            </p>
            <div className="flex flex-wrap w-full mt-3 gap-2">
              <SkillIcon name="Java" heightStyle="h-5" />
              <SkillIcon name="Spring Boot" heightStyle="h-5" />
              <SkillIcon name="JavaScript" heightStyle="h-5" />
              <SkillIcon name="TypeScript" heightStyle="h-5" />
              <SkillIcon name="ReactJS" heightStyle="h-5" />
              <SkillIcon name="NextJS" heightStyle="h-5" />
              <SkillIcon name="MySQL" heightStyle="h-5" />
              <SkillIcon name="MongoDB" heightStyle="h-5" />
              <SkillIcon name="Docker" heightStyle="h-5" />
              <SkillIcon name="Git" heightStyle="h-5" />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row  items-start justify-between w-full h-fit bg-transparent rounded-[10px] hover:bg-[#161f33] hover:shadow-xl transition-all mt-5 p-6 group">
          <div className="w-full md:w-1/2 h-fit flex items-start text-[#5F708E] text-sm uppercase group-hover:text-[#f1f1f2]">
            March, 2023 - July, 2023
          </div>
          <div className="w-full md:w-1/2 mt-3 md:mt-0 h-fit flex flex-col items-start text-[#5F708E] text-sm justify-center">
            <p className="group-hover:text-[#369ea0] text-[#f1f1f2] text-md">
              Full Stack Java Intern, Cognizant Technology Solutions, Kolkata
            </p>
            <p className="mt-2">
              <ol className="list-disc ml-4">
                <li>
                  Worked on developing a full stack application from scratch,
                  which included functionalities like Role based Authorization,
                  Data Caching in Frontend and Data Management.
                </li>
                <li>
                  {" "}
                  Responsible for designing, developing and testing an
                  end-to-end Full Stack Application.
                </li>
                <li>
                  Collaborated with several team members, to produce high
                  quality code, seamless UI and performance.
                </li>
              </ol>
            </p>
            <div className="flex flex-wrap w-full mt-3 gap-2">
              <SkillIcon name="Java" heightStyle="h-5" />
              <SkillIcon name="Spring Boot" heightStyle="h-5" />
              <SkillIcon name="JavaScript" heightStyle="h-5" />
              <SkillIcon name="ReactJS" heightStyle="h-5" />
              <SkillIcon name="Redux" heightStyle="h-5" />
              <SkillIcon name="MySQL" heightStyle="h-5" />
              <SkillIcon name="Git" heightStyle="h-5" />
              <SkillIcon name="JUnit" heightStyle="h-5" />
              <SkillIcon name="Spring Security" heightStyle="h-5" />
              <SkillIcon name="Spring Data JPA" heightStyle="h-5" />
              <SkillIcon name="Hibernate" heightStyle="h-5" />
              <SkillIcon name="Mockito" heightStyle="h-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
