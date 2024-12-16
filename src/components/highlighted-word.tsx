import React from "react";

const Highlight = ({ children }: { children: React.ReactNode }) => {
  return <span className="text-[#369ea0]">{children}</span>;
};

export default Highlight;
