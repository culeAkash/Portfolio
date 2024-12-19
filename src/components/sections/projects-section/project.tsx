import SkillIcon from "../../skills-icons";
import { GithubIcon, Link } from "lucide-react";
import { ReactNode } from "react";

export interface ProjectProps {
  id?: number;
  appLink: string;
  imgSrc: string;
  imgAlt?: string;
  title: ReactNode;
  description: ReactNode;
  skillsArray: string[];
  githubLink: string;
}

const Project = ({
  appLink,
  imgSrc,
  imgAlt,
  title,
  description,
  skillsArray,
  githubLink,
}: ProjectProps) => {
  return (
    <div
      className="flex flex-col lg:flex-row items-start  lg:items-center justify-between w-full h-fit bg-transparent rounded-[10px] hover:bg-[#161f33] hover:shadow-xl transition-all mt-5 p-6 group"
      onClick={() => window.open(appLink, "_blank")}
    >
      <div className="w-full lg:w-1/2 h-full flex items-center justify-center text-[#5F708E] text-sm uppercase group-hover:text-[#f1f1f2] cursor-pointer">
        <img src={imgSrc} alt={imgAlt} className="h-full w-full lg:w-[80%]" />
      </div>
      <div className="w-full lg:w-1/2 mt-3 lg:mt-0 h-fit flex flex-col items-start text-[#5F708E] text-sm justify-center cursor-pointer">
        <p className=" text-[#f1f1f2] text-lg">{title}</p>
        <p className="mt-2">
          <ol className="list-disc ml-4">{description}</ol>
        </p>
        <div className="flex flex-wrap w-full mt-3 gap-2">
          {skillsArray.map((skill) => (
            <SkillIcon key={skill} name={skill} heightStyle="h-5" />
          ))}

          <GithubIcon
            className="h-6 w-6 my-2 text-[#369ea0] hover:text-[#f1f1f2] cursor-pointer block lg:hidden lg:group-hover:block "
            onClick={() => window.open(githubLink, "_blank")}
          />
          <Link
            className="h-6 w-6 my-2 text-[#369ea0] hover:text-[#f1f1f2] cursor-pointer block lg:hidden lg:group-hover:block"
            onClick={() => window.open(appLink, "_blank")}
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
