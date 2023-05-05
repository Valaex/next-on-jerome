import React from "react";
import Image from "next/image";
import heroImg from "@/public/heroimg.svg";
import { Montserrat } from "next/font/google";
import { Ubuntu } from "next/font/google";
import { motion } from "framer-motion";
import ContactButton from "./ContactButton";
import HoverSocialIcon from "./Hover";

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
    <div className="flex flex-wrap justify-center mb-14 lg:flex-nowrap max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
      >
        <div className="hero-left w-full mt-32 lg:mt-44 lg:w-auto">
          <h2 className="font-semibold  text-center text-4xl md:text-5xl lg:text-left leading-11 tracking-tighter">
            Développeur
          </h2>
          <h1 className="font-bold  text-center text-6xl md:text-7xl mb-6 lg:text-left">
            Front-End React
          </h1>
          <p className="font-normal text-center text-lg md:text-xl lg:text-2xl lg:text-left leading-8 text-custom-gray tracking-wide mb-6 lg:mb-8 md:whitespace-normal">
            Concrétisez vos idées et sublimez votre projet à un prix fixe ,
            clair et abordable.
          </p>
          <div className="flex flex-row justify-center relative w-full gap-x-8 lg:justify-normal">
            <HoverSocialIcon url="https://www.linkedin.com/in/jeromeknops/" />
            <ContactButton></ContactButton>
          </div>
        </div>
      </motion.div>
      <div className="hero-right hidden mt-16 lg:flex lg:min-w-max ">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
        >
          <Image src={heroImg} alt="homme envoyant un avion en papier" />
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: [0, 0.2, 0.4, 1],
          }}
          transition={{
            duration: 1,
          }}
          className="font-semibold text-sm leading-5 absolute top-96 transform translate-x-96 translate-y-24 rotate-90 tracking-wide"
        >
          {`Défilez vers le bas ---->`}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
