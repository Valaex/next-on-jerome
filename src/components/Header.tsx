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
    <header>
      <motion.div
        initial={{ y: -50, opacity: 0, scale: 0.5 }}
        animate={{
          y: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.8,
        }}
      >
        <nav className="flex flex-row items-center justify-between h-20 border-b border-[#040320] border-opacity-5">
          <div>
            <h2 className="font-bold text-lg overflow-auto whitespace-nowrap">
              {"{Jérôme Knops}"}
            </h2>
          </div>
          <div className="link-container">
            <ul className=" hidden lg:flex flex-row items-center gap-12 text-base font-medium  ">
              <li>
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
          <div className="social-container hidden  lg:block">
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
          </div>
          <div className="z-10  lg:hidden">
            <Hamburger
              color={isOpen ? "white" : "currentColor"}
              toggled={isOpen}
              toggle={setOpen}
            />
          </div>
        </nav>
      </motion.div>
      {isOpen && <Menu />}
    </header>
  );
};

export default Header;
