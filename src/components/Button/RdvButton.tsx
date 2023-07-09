import React from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
});

type Props = {};

function RdvButton({}: Props) {
  return (
    <a href="https://calendly.com/jeromeknops/book">
      <div
        className={`${montserrat.className} cursor-pointer hover:bg-[#040320] hover:text-[white] hover:transition-all hover:duration-300 duration-300 hover:shadow-xl hover:shadow-[#040320] flex flex-row justify-center items-center p-4 gap-2 w-52 md:w-60 h-12 left-24  bg-[white]  rounded-full text-[#040320] font-bold text-[8px] md:text-xs tracking-widest border-2 border-solid border-opacity-100 border-[#040320]`}
      >
        PRENDRE RENDEZ-VOUS
      </div>
    </a>
  );
}

export default RdvButton;
