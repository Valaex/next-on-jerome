import React from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import portfolioImg from "@/public/portfoliojeromefonce.jpg";
import Reveal from "../MotionReveal/Reveal";

type Props = {};

const PortfolioMobile2 = (props: Props) => {
  return (
    <div
      className="container-mobile px-10 py-12 md:pl-16 md:pt-20 md:pr-16 rounded-3xl md:hidden"
      style={{
        width: "800px",
        height: "auto",

        backgroundImage: `url(${portfolioImg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Reveal>
        <h3 className="text-base  text-[#00D1FF] ">PortFolio</h3>
      </Reveal>
      <a href="https://www.jeromeknops.com/">
        <Reveal>
          <h2 className="text-lg font-bold mb-5 text-white hover:text-[#00D1FF] transition-all ease-in">
            Jérôme Knops
          </h2>
        </Reveal>
      </a>
      <Reveal>
        <p className="text-base font-light mb-6 text-white">
          En concevant un portfolio{" "}
          <span className="text-bold text-[#00D1FF]">innovant</span> à
          l&apos;aide de React, Next.js et TypeScript, j&apos;ai mis en avant
          mon
          <span className="text-bold text-[#00D1FF]"> expertise technique</span>
          , créant ainsi un site{" "}
          <span className="text-bold text-[#00D1FF]">attrayant</span> et{" "}
          <span className="text-bold text-[#00D1FF]">fonctionnel</span> qui
          témoigne de mon{" "}
          <span className="text-bold text-[#00D1FF]">savoir-faire</span> en
          matière de développement web moderne et de ma capacité à réaliser des
          projets <span className="text-bold text-[#00D1FF]">épurés</span> et{" "}
          <span className="text-bold text-[#00D1FF]">esthétiques.</span>
        </p>
      </Reveal>
      <div className="mb-5 flex flex-wrap">
        <Reveal>
          <span className="mr-4">React</span>
        </Reveal>
        <Reveal>
          <span className="mr-4">Next.Js</span>
        </Reveal>
        <Reveal>
          <span className="mr-4">TypeScript</span>
        </Reveal>
        <Reveal>
          <span className="mr-4">TailWind Css</span>
        </Reveal>
        <Reveal>
          <span className="mr-4">Figma</span>
        </Reveal>
        <Reveal>
          <span className="mr-4">Hostinger</span>
        </Reveal>
      </div>
      <div className="flex">
        <a
          href="https://github.com/Valaex"
          className="mr-4 hover:text-[#00D1FF]  transition-all ease-in"
        >
          <Reveal>
            <FiGithub size={20} />
          </Reveal>
        </a>

        <a
          href="https://www.jeromeknops.com/"
          className="hover:text-[#00D1FF]  transition-all ease-in"
        >
          <Reveal>
            <FiExternalLink size={20} />
          </Reveal>
        </a>
      </div>
    </div>
  );
};

export default PortfolioMobile2;
