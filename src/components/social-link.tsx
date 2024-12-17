interface SocialLinkInterface {
  icon: string;
  href: string;
  boxStyles?: string;
  iconStyles?: string;
  hoverBoxStyles?: string;
}

const SocialLink = ({ href, icon }: SocialLinkInterface) => {
  return (
    <div
      className=" flex items-center justify-center cursor-pointer hover:bg-[#13293A] px-2 py-3 rounded-[5px]"
      onClick={() => window.open(href)}
    >
      <img src={icon} className="w-8 h-8" />
    </div>
  );
};

export default SocialLink;
