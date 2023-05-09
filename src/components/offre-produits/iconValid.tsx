import React from "react";
import Image from "next/image";
import Valid from "@/public/valid.svg";

type Props = {};

const IconValid = (props: Props) => {
  return (
    <div className="ml-2">
      <Image src={Valid} alt="icon valid" height={20} width={20} />{" "}
    </div>
  );
};

export default IconValid;
