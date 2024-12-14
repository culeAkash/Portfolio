import profileImg from "../assets/90236346.jpeg";
const Navbar = () => {
  return (
    <div className="w-full h-20 bg-[#0E1734] flex flex-row justify-center md:justify-between items-center px-6">
      <div className="flex flex-row gap-x-2 justify-center items-center">
        <div className="h-10 w-10 rounded-lg bg-zinc-200">
          <img src={profileImg} className="w-10 h-10" />
        </div>
        <h1 className="text-xl text-zinc-200 font-serif uppercase">
          Akash Jaiswal
        </h1>
      </div>
      <div className="hidden md:block">
        <div className="flex flex-row gap-x-8 justify-center items-center uppercase px-6 ">
          <a href="#" className="text-white hover:text-gray-500 cursor-pointer">
            Home
          </a>
          <a href="#" className="text-white hover:text-gray-500 cursor-pointer">
            About
          </a>
          <a href="#" className="text-white hover:text-gray-500">
            Projects
          </a>
          <a href="#" className="text-white hover:text-gray-500">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
