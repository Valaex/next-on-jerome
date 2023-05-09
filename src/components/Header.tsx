import * as React from "react";
import { SocialIcon } from "react-social-icons";
import { Divide as Hamburger } from "hamburger-react";
import Menu from "./Menu";
import { motion } from "framer-motion";

type Props = {};

const Header = (props: Props) => {
  const classNames = {
    base: "cursor-pointer transition-all duration-500 relative inline-block capitalize",
    before:
      "before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-1 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-[#040320]",
    hover: "hover:before:w-full hover:before:opacity-100",
  };
  const combinedClassNames = combineClassNames(classNames);
  const [isOpen, setOpen] = React.useState(false);

  const menu = (toggled: boolean) => {
    setOpen(toggled);
  };

  function combineClassNames(classObj: object) {
    return Object.values(classObj).join(" ");
  }
  return (
    <header
      id="accueil"
      className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16"
    >
      <div>
        <nav className="flex flex-row items-center justify-between h-20 border-b border-[#040320] border-opacity-5">
          <div>
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.4,
              }}
              className="font-bold text-lg overflow-auto whitespace-nowrap"
            >
              {"{Jérôme Knops}"}
            </motion.h2>
          </div>
          <div className="link-container">
            <ul className=" hidden md:flex flex-row items-center lg:gap-12 md:gap-8 text-base font-medium  ">
              <li>
                <motion.a
                  initial={{
                    opacity: 0,
                    y: -200,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: 0.3,
                  }}
                  href="#about"
                  className={combineClassNames(classNames)}
                >
                  À propos
                </motion.a>
              </li>
              <li>
                <motion.a
                  initial={{
                    opacity: 0,
                    y: -200,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: 0.4,
                  }}
                  href="#experience"
                  className={combineClassNames(classNames)}
                >
                  Expérience
                </motion.a>
              </li>
              <li>
                <motion.a
                  initial={{
                    opacity: 0,
                    y: -200,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: 0.5,
                  }}
                  href="#portfolio"
                  className={combineClassNames(classNames)}
                >
                  Portfolio
                </motion.a>
              </li>
              <li>
                <motion.a
                  initial={{
                    opacity: 0,
                    y: -200,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: 0.6,
                  }}
                  href="#services"
                  className={combineClassNames(classNames)}
                >
                  Services
                </motion.a>
              </li>
              <li>
                <motion.a
                  initial={{
                    opacity: 0,
                    y: -200,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.7,
                    duration: 0.4,
                  }}
                  href="#contact"
                  className={combineClassNames(classNames)}
                >
                  Contact
                </motion.a>
              </li>
            </ul>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.2,
            }}
            className="social-container hidden  lg:block"
          >
            <SocialIcon
              url="https://www.linkedin.com/in/jeromeknops/"
              fgColor="#040320"
              bgColor="transparent"
            />
            <SocialIcon
              url="https://twitter.com/Valaexx"
              fgColor="#040320"
              bgColor="transparent"
            />
            <SocialIcon
              url="https://github.com/Valaex"
              fgColor="#040320"
              bgColor="transparent"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.4,
            }}
            className="z-10  md:hidden"
          >
            <Hamburger
              color={isOpen ? "white" : "currentColor"}
              toggled={isOpen}
              toggle={setOpen}
            />
          </motion.div>
        </nav>
      </div>
      {isOpen && <Menu />}
    </header>
  );
};

export default Header;
