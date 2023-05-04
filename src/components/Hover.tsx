import * as React from "react";
import { SocialIcon } from "react-social-icons";

interface Props {
  url: string;
}

const HoverSocialIcon: React.FC<Props> = ({ url }) => {
  const [color, setColor] = React.useState("white");

  const handleMouseEnter = () => {
    setColor("#040320");
  };

  const handleMouseLeave = () => {
    setColor("white");
  };

  return (
    <SocialIcon
      url={url}
      fgColor={color}
      bgColor="transparent"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="hover:bg-slate-200 hover: hover:transition-all hover:shadow-xl hover:shadow-[#040320] hover:duration-300 duration-300 bg-[#040320] rounded-full"
    />
  );
};

export default HoverSocialIcon;
