import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import Reveal from "./MotionReveal/Reveal";

type Props = {};

const Footer = (props: Props) => {
  const classNames = {
    base: "cursor-pointer transition-all duration-500 relative inline-block capitalize",
    before:
      "before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-1 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-[white]",
    hover: "hover:before:w-full hover:before:opacity-100",
  };
  const combinedClassNames = combineClassNames(classNames);
  function combineClassNames(classObj: object) {
    return Object.values(classObj).join(" ");
  }
  return (
    <Reveal>
      <section className="bg-[#040320]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
          <Reveal>
            <h2 className="text-center font-bold text-3xl text-white pt-10 mb-4">
              Merci..!
            </h2>
          </Reveal>
          <div className="flex flex-row items-center justify-center h-20 border-b border-[#040320] border-opacity-5 text-white">
            <div className="link-container">
              <ul className="flex flex-row flex-wrap items-center justify-between gap-2 lg:gap-12 md:gap-8 text-base md:text-lg font-base  ">
                <Reveal>
                  <li>
                    <motion.a
                      href="#accueil"
                      className={combineClassNames(classNames)}
                    >
                      Accueil
                    </motion.a>
                  </li>
                </Reveal>

                <Reveal>
                  <li>
                    <motion.a
                      href="#about"
                      className={combineClassNames(classNames)}
                    >
                      À propos
                    </motion.a>
                  </li>
                </Reveal>

                <Reveal>
                  <li>
                    <motion.a
                      href="#experience"
                      className={combineClassNames(classNames)}
                    >
                      Expérience
                    </motion.a>
                  </li>
                </Reveal>

                <Reveal>
                  <li>
                    <motion.a
                      href="#portfolio"
                      className={combineClassNames(classNames)}
                    >
                      Portfolio
                    </motion.a>
                  </li>
                </Reveal>

                <Reveal>
                  <li>
                    <motion.a
                      href="#services"
                      className={combineClassNames(classNames)}
                    >
                      Services
                    </motion.a>
                  </li>
                </Reveal>

                <Reveal>
                  <li>
                    <motion.a
                      href="#contact"
                      className={combineClassNames(classNames)}
                    >
                      Contact
                    </motion.a>
                  </li>
                </Reveal>
              </ul>
            </div>
          </div>
          <Reveal>
            <div className="social-container flex flex-row justify-center items-center mb-10">
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
          </Reveal>
          <div className="text-white text-center pb-10">
            <Reveal>
              <p className="">©Jérôme Knops - Tous les droits réservés</p>
            </Reveal>{" "}
            <Reveal>
              <p className="">BCE: 0800.537.931</p>
            </Reveal>
          </div>
        </div>
      </section>
    </Reveal>
  );
};

export default Footer;
