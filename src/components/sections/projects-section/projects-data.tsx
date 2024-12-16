import { ProjectProps } from "./project";
import rickhousherImg from "../../../assets/rickhousher.png";
import Highlight from "@/components/highlighted-word";
import discordImg from "../../../assets/discord-clone.png";
import blogAppImg from "../../../assets/blog-app-api.png";

const projectsData: ProjectProps[] = [
  {
    id: 1,
    appLink: "https://rickhousher-production.up.railway.app/",
    imgSrc: rickhousherImg,
    imgAlt: "rickhousherImg",
    title: (
      <>
        <span className="text-[#369ea0]">RickHouSher</span> - Explore the power
        of <span className="text-[#369ea0]">The Most Powerful AI</span>
      </>
    ),
    description: (
      <>
        <li>
          AI Assistant SaaS application built in <Highlight>NextJS</Highlight>,{" "}
          <Highlight>TypeScript</Highlight>, <Highlight>MongoDB</Highlight> and{" "}
          <Highlight>Tailwind CSS</Highlight>
        </li>
        <li>
          Authentication and Authorization is implemented using{" "}
          <Highlight>NextAuth</Highlight>
        </li>
        <li>
          Seamless UI built with <Highlight>ShadCN</Highlight> and{" "}
          <Highlight>Tailwind CSS</Highlight>
        </li>
        <li>
          Functionalities like <Highlight>ChatBot</Highlight> and{" "}
          <Highlight>Code Assistance</Highlight> is implemented using{" "}
          <Highlight>Mistral's</Highlight> API.
        </li>
        <li>
          Leveraged <Highlight>Hugging Face Models</Highlight> to implement
          functionalities like <Highlight>Image</Highlight> and{" "}
          <Highlight>Music</Highlight> Generation.
        </li>
        <li>
          Implemented <Highlight>RAG</Highlight> using Pinecone to generate
          answers based on PDFs in the <Highlight>PDF Assistant</Highlight>
        </li>
        <li>
          Payment Integration is implemented using <Highlight>Stripe</Highlight>
        </li>
      </>
    ),
    skillsArray: [
      "NextJs",
      "Typescript",
      "ShadCN",
      "Tailwind CSS",
      "RAG",
      "MongoDB",
      "Prisma",
      "Responsive Design",
      "Stripe",
    ],
    githubLink: "https://github.com/culeAkash/rickhousher",
  },
  {
    id: 2,
    appLink: "https://discord-clone-5lwn.vercel.app/",
    imgSrc: discordImg,
    imgAlt: "discordImg",
    title: (
      <>
        <span className="text-[#369ea0]">Discord Clone</span>
      </>
    ),
    description: (
      <>
        <li>
          <Highlight>Discord Clone</Highlight> built with{" "}
          <Highlight>NextJS</Highlight>, <Highlight>PostgreSQL</Highlight>,{" "}
          <Highlight>Typescript</Highlight> and{" "}
          <Highlight>Tailwind CSS</Highlight>
        </li>
        <li>
          Authentication and Role based Authorization is implemented using{" "}
          <Highlight>Clerk</Highlight>
        </li>
        <li>
          Seamless UI built with <Highlight>ShadCN</Highlight> and{" "}
          <Highlight>Tailwind CSS</Highlight>
        </li>
        <li>
          Application includes <Highlight>core functionalities</Highlight> like{" "}
          <Highlight>Server creation</Highlight>,{" "}
          <Highlight>Member Management</Highlight>,{" "}
          <Highlight>Channel Management</Highlight> and and{" "}
          <Highlight>Real-time chat.</Highlight>
        </li>
        <li>
          <Highlight>Real-time chat</Highlight> is implemented using{" "}
          <Highlight>Socket.IO</Highlight> and{" "}
          <Highlight>Video Calling</Highlight> is implemented using{" "}
          <Highlight>Livekit</Highlight>.
        </li>
      </>
    ),
    skillsArray: [
      "NextJs",
      "Typescript",
      "ShadCN",
      "Tailwind CSS",
      "Socket.IO",
      "PostgreSQL",
      "Prisma",
      "Responsive Design",
      "Livekit",
    ],
    githubLink: "https://github.com/culeAkash/discord-clone",
  },
  {
    id: 3,
    appLink: "https://github.com/culeAkash/Blog-App-Apis",
    imgSrc: blogAppImg,
    imgAlt: "blogAppImg",
    title: (
      <>
        <span className="text-[#369ea0]">Blog App APIs</span> - APIs for a Blog
        Application
      </>
    ),
    description: (
      <>
        <li>
          <Highlight>Blog App APIs</Highlight> developed with{" "}
          <Highlight>Java</Highlight>, <Highlight>Spring Boot</Highlight>,{" "}
          <Highlight>Hibernate</Highlight>, <Highlight>MySQL</Highlight> and{" "}
          <Highlight>Spring Security</Highlight>
        </li>
        <li>
          Authentication and Role based Authorization is implemented using{" "}
          <Highlight>JWT Authentication</Highlight>
        </li>
        <li>
          Application includes <Highlight>functionalities</Highlight> like{" "}
          <Highlight>User Registration and Login</Highlight>,{" "}
          <Highlight>Post creation, updation and deletion</Highlight> and{" "}
          <Highlight>Pagination and Sorting</Highlight>,{" "}
        </li>
      </>
    ),
    skillsArray: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "Hibernate",
      "MySQL",
      "JWT",
    ],
    githubLink: "https://github.com/culeAkash/Blog-App-Apis",
  },
];

export default projectsData;
