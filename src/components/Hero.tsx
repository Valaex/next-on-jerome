import React, { useState, useEffect } from "react";
import Image from "next/image";
import heroImg from "../../public/heroimg.svg";
import { Montserrat } from "next/font/google";
import { motion } from "framer-motion";
import ContactButton from "./Button/ContactButton";
import RdvButton from "./Button/RdvButton";

const montserrat = Montserrat({
  subsets: ["latin"],
});

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="flex flex-wrap justify-center  h-screen md:h-[800px] lg:flex-nowrap max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
      <div>
        <div className="hero-left w-full mt-48 lg:mt-60 lg:w-auto">
          <motion.h2
            initial={{ y: 10, opacity: 0 }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.2,
              delay: 1.3,
            }}
            className="font-semibold  text-center text-4xl md:text-5xl lg:text-left leading-11 tracking-tighter"
          >
            Développeur
          </motion.h2>
          <motion.h1
            initial={{ y: 10, opacity: 0 }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.3,
              delay: 1.3,
            }}
            className="font-bold  text-center text-6xl md:text-7xl mb-6 lg:text-left"
          >
            Front-End React
          </motion.h1>
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{
              opacity: 1,

              y: 0,
            }}
            transition={{
              duration: 0.4,
              delay: 1.3,
            }}
            className="font-light
             text-center text-lg md:text-xl lg:text-2xl lg:text-left leading-8 text-custom-gray tracking-wide mb-6 lg:mb-8 md:whitespace-normal"
          >
            Concrétisez vos idées et sublimez votre projet à un prix fixe, clair
            et abordable.
          </motion.p>
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{
              opacity: 1,

              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 1.3,
            }}
            className="flex flex-row justify-center relative w-full gap-x-8 lg:justify-normal"
          >
            <ContactButton></ContactButton>
            <RdvButton></RdvButton>
          </motion.div>
        </div>
      </div>
      <div className="hero-right hidden mt-24 lg:flex lg:min-w-max ">
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: [0, 0.2, 0.4, 1],
          }}
          transition={{
            duration: 1,
            delay: 1.3,
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
            duration: 1.5,
            delay: 2,
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
