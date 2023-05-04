import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

const Header = (props: Props) => {
  return (
    <header>
      <nav className="flex flex-row items-center justify-between max-w-7xl mx-auto h-20">
        <h2 className="font-bold text-lg">Jérôme Knops</h2>
        <div className="link-container">
          <ul className="flex flex-row items-center gap-12 text-base font-medium">
            <li className="">
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
        <div className="social-container hidden md:block lg:block">
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
      </nav>
    </header>
  );
};

export default Header;
