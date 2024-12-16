const SkillIcon = ({
  name,
  heightStyle = "h-12",
}: {
  name: string;
  heightStyle?: string;
}) => {
  return (
    <div
      className={`${heightStyle} rounded-[10px] bg-[#122A3A] flex items-center justify-center p-5 `}
    >
      <p className="text-[#369ea0] text-pretty">{name}</p>
    </div>
  );
};

export default SkillIcon;
