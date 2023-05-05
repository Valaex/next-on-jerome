import React from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
});

type Props = {};

function ContactButton({}: Props) {
  return (
    <div
      className={`${montserrat.className} hover:bg-slate-200 hover:text-[#040320] hover:transition-all hover:duration-300 duration-300 hover:shadow-xl hover:shadow-[#040320] flex flex-row justify-center items-center p-4 gap-2 w-48 h-12 left-24  bg-[#040320]  rounded-full text-white font-bold text-xs sm:text-xs  tracking-widest`}
    >
      ME CONTACTER
    </div>
  );
}

export default ContactButton;
