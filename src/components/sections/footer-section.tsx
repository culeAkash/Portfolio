import {
  Copyright,
  GithubIcon,
  Linkedin,
  Mail,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";

const Footer = () => {
  const iconClass = "h-8 w-8 hover:text-[#E2E9F1] cursor-pointer";
  return (
    <div className="mt-20 md:mt-20 w-full h-fit bg-[#0E1734] shadow-xl p-10 space-y-10 md:space-y-20">
      <div className="flex flex-col-reverse gap-y-10 md:gap-y-0 md:flex-row  justify-between items-start text-[#40c4c6]">
        <div className="w-full md:w-[55%]  space-y-8">
          <p
            className="text-xl md:text-2xl  uppercase  font-bold"
            style={{ letterSpacing: 2 }}
          >
            Akash Jaiswal
          </p>
          <p className="text-md md:text-lg font-normal">
            A Full Stack Web Developer, building Full stack web and mobile
            applications that leads to success of the overall product.
          </p>
        </div>
        <div className="w-full md:w-[35%] flex flex-col items-start gap-y-5">
          <p
            className="text-xl md:text-2xl  uppercase  font-bold"
            style={{ letterSpacing: 2 }}
          >
            Socials
          </p>
          <div className="flex flex-row gap-x-5">
            <GithubIcon
              className={iconClass}
              onClick={() => window.open("https://github.com/culeAkash")}
            />
            <TwitterIcon
              className={iconClass}
              onClick={() => window.open("https://x.com/space_monkey_05")}
            />
            <Linkedin
              className={iconClass}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/akash-jaiswal-704b48212/"
                )
              }
            />
            <Mail
              className={iconClass}
              onClick={() => window.open("mailto:akashjaiswal3120@gmail.com")}
            />
            <YoutubeIcon
              className={iconClass}
              onClick={() => window.open("https://www.youtube.com/@Code_Local")}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-y-10 items-center">
        <div className="h-[3px] w-full bg-[#1d2d5a]" />
        <div className="flex flex-row items-center gap-x-1 text-[#40c4c6]">
          <Copyright className="h-5 w-5 " />
          <p className="text-lgs">
            Copyright 2025. Made by{" "}
            <span className="underline">Akash Jaiswal</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
