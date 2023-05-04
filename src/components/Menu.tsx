import * as React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

const classNames = {
  base: "cursor-pointer transition-all duration-500 relative inline-block capitalize",
  before:
    "before:content-[''] before:absolute before:-bottom-0 before:left-0 before:w-0 before:h-1 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-white",
  hover: "hover:before:w-full hover:before:opacity-100",
};

function combineClassNames(classObj: object) {
  return Object.values(classObj).join(" ");
}

const combinedClassNames = combineClassNames(classNames);

function Menu({}: Props) {
  return (
    <motion.div
      initial={{ x: 200, opacity: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
        x: 0,
      }}
      transition={{
        duration: 0.4,
      }}
      className="z-2 w-full fixed top-0 right-0 sm:w-60 md:w-80 h-auto text-center text-white bg-[#040320] lg:hi"
    >
      <div className="link-container text-2xl mt-20 leading-loose mb-10">
        <ul>
          <li className="">
            <a href="#about" className={combineClassNames(classNames)}>
              À propos
            </a>
          </li>
          <li>
            <a href="#experience" className={combineClassNames(classNames)}>
              Expérience
            </a>
          </li>
          <li>
            <a href="#portfolio" className={combineClassNames(classNames)}>
              Portfolio
            </a>
          </li>
          <li>
            <a href="#services" className={combineClassNames(classNames)}>
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className={combineClassNames(classNames)}>
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="social-container mb-10">
        <SocialIcon
          url="https://www.linkedin.com/in/jeromeknops/"
          fgColor="white"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://twitter.com/Valaexx"
          fgColor="white"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/Valaex"
          fgColor="white"
          bgColor="transparent"
        />
      </div>
    </motion.div>
  );
}

export default Menu;
