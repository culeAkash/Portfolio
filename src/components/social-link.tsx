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
      className="h-20 w-20 border-2 border-[#1d2d5a] flex items-center justify-center cursor-pointer"
      onClick={() => window.open(href)}
    >
      <img src={icon} className="w-2/3" />
    </div>
  );
};

export default SocialLink;
