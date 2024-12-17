import profileImg from "../assets/navbar-profile.jpeg";

interface NavbarProps {
  scrollFunc: (section: string) => void;
}

const Navbar = ({ scrollFunc }: NavbarProps) => {
  return (
    <div className="w-full h-full bg-[#0E1734] flex flex-row justify-center md:justify-between items-center px-6">
      <div
        className="flex flex-row gap-x-2 justify-center items-center group cursor-pointer"
        onClick={() => scrollFunc("home-section")}
      >
        <div className="h-10 w-10 rounded-full bg-zinc-200">
          <img src={profileImg} className="w-10 h-10 rounded-full" />
        </div>
        <h1 className="text-xl text-zinc-200 font-serif uppercase group-hover:text-[#369ea0] ml-1">
          Akash Jaiswal
        </h1>
      </div>
      <div className="hidden md:block">
        <div className="flex flex-row gap-x-8 justify-center items-center uppercase px-6 ">
          <p
            onClick={() => scrollFunc("home-section")}
            className="text-white hover:text-[#369ea0] cursor-pointer"
          >
            Home
          </p>
          <p
            onClick={() => scrollFunc("about-section")}
            className="text-white hover:text-[#369ea0] cursor-pointer"
          >
            About
          </p>
          <p
            onClick={() => scrollFunc("projects-section")}
            className="text-white hover:text-[#369ea0] cursor-pointer"
          >
            Projects
          </p>
          <p
            onClick={() => scrollFunc("work-section")}
            className="text-white hover:text-[#369ea0] cursor-pointer"
          >
            Work
          </p>
          <p
            onClick={() => scrollFunc("contact-section")}
            className="text-white hover:text-[#369ea0] cursor-pointer"
          >
            Contact
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
