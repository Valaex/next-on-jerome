import React from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
});

type Props = {};

function DevisButton({}: Props) {
  return (
    <div
      className={`${montserrat.className} cursor-pointer hover:bg-slate-200 hover:text-[#040320] hover:transition-all hover:duration-300 duration-300 hover:shadow-xl hover:shadow-[#040320] text-center p-4 gap-2 md:w-[180px]  lg:w-[264px]  left-24  bg-[#040320] rounded-2xl text-white font-bold md:text-xs lg:text-[18px]  tracking-widest`}
    >
      <a href="#contact">Demandez un Devis</a>
    </div>
  );
}

export default DevisButton;
