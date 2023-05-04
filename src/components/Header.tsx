import * as React from "react";
import { SocialIcon } from "react-social-icons";
import { Divide as Hamburger } from "hamburger-react";
import Menu from "./Menu";
import { motion } from "framer-motion";

type Props = {};

const Header = (props: Props) => {
  const [isOpen, setOpen] = React.useState(false);

  const menu = (toggled: boolean) => {
    setOpen(toggled);
  };

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
        <nav className="flex flex-row items-center justify-between h-20 ">
          <div>
            <h2 className="font-bold text-lg overflow-auto whitespace-nowrap">
              {"{Jérôme Knops}"}
            </h2>
          </div>
          <div className="link-container">
            <ul className=" hidden lg:flex flex-row items-center gap-12 text-base font-medium  ">
              <li>
                <a href="#about">À propos</a>
              </li>
              <li>
                <a href="#experience">Expérience</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
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
