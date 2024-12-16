import Project from "./project";
import projectsData from "./projects-data";

const Projects = () => {
  return (
    <div className="mt-24 w-full min-h-[70vh] h-full">
      <div className="flex flex-col gap-y-2 items-center">
        <h1 className="md:text-3xl text-xl font-bold text-center text-[#E2E9F1] uppercase font-mono">
          <p style={{ letterSpacing: "10px" }}>Projects</p>
        </h1>

        <div className="w-10 h-[3px] bg-[#1d2d5a] mt-4" />
        {projectsData.map((project) => (
          <Project
            key={project.id}
            appLink={project.appLink}
            description={project.description}
            githubLink={project.githubLink}
            imgAlt={project.imgAlt}
            imgSrc={project.imgSrc}
            skillsArray={project.skillsArray}
            title={project.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
