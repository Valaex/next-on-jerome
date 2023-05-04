import React from "react";
import Image from "next/image";
import heroImg from "@/public/heroimg.png";
import linkImg from "@/public/linkedin.png";
import { Montserrat } from "next/font/google";
import { Ubuntu } from "next/font/google";
import { motion } from "framer-motion";

const montserrat = Montserrat({
  subsets: ["latin"],
});

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

type Props = {};

const Hero = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1,
      }}
      className="flex flex-wrap justify-between lg:flex-nowrap"
    >
      <div className="hero-left w-full mt-32 lg:mt-44 lg:w-auto">
        <h2 className="font-semibold  text-center text-4xl md:text-5xl lg:text-left leading-11 tracking-tighter">
          Développeur
        </h2>
        <h1 className="font-bold  text-center text-6xl md:text-7xl mb-6 lg:text-left">
          Front-End React
        </h1>
        <p className="font-normal text-center text-lg md:text-xl lg:text-2xl lg:text-left leading-8 text-custom-gray tracking-wide mb-6 lg:mb-8 md:whitespace-normal">
          Concrétisez vos idées et sublimez votre projet à un prix fixe , clair
          et abordable.
        </p>
        <div className="flex flex-row justify-center w-full gap-x-8 lg:justify-normal">
          <button className="flex flex-row justify-center items-center p-4 gap-2 left-5  w-29 h-12 bg-[#040320] shadow-md rounded-full text-sm sm:text-base md:text-lg  ">
            <Image src={linkImg} alt="linkedin" />
          </button>
          <button
            className={`${montserrat.className} flex flex-row justify-center items-center p-4 gap-2 w-48 h-12 left-24  bg-gray-900 shadow-md rounded-full text-white font-bold text-xs sm:text-xs  tracking-widest`}
          >
            ME CONTACTER
          </button>
        </div>
      </div>
      <div className="hero-right hidden mt-16 lg:flex lg:min-w-max ">
        <Image src={heroImg} alt="homme envoyant un avion en papier" />
        <motion.div className="font-semibold text-sm leading-5 absolute top-96 transform translate-x-96 translate-y-24 rotate-90 tracking-wide">
          {`Défilez vers le bas ---->`}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
