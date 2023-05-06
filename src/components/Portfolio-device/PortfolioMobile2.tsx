import React from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import portfolioImg from "@/public/portfoliojeromefonce.jpg";

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
      <h3 className="text-base  text-[#00D1FF] ">PortFolio</h3>
      <a href="https://www.jeromeknops.com/">
        <h2 className="text-lg font-bold mb-5 text-white hover:text-[#00D1FF] transition-all ease-in">
          Jérôme Knops
        </h2>
      </a>
      <p className="text-base font-light mb-6  text-white">
        En concevant un portfolio{" "}
        <span className="text-bold text-[#00D1FF]">innovant</span> à l'aide de
        React, Next.js et TypeScript, j'ai mis en avant mon
        <span className="text-bold text-[#00D1FF]"> expertise technique</span>,
        créant ainsi un site{" "}
        <span className="text-bold text-[#00D1FF]">attrayant</span> et{" "}
        <span className="text-bold text-[#00D1FF]">fonctionnel</span> qui
        témoigne de mon{" "}
        <span className="text-bold text-[#00D1FF]">savoir-faire</span> en
        matière de développement web moderne et de ma capacité à réaliser des
        projets <span className="text-bold text-[#00D1FF]">épurés</span> et{" "}
        <span className="text-bold text-[#00D1FF]">esthétiques.</span>
      </p>
      <div className="mb-5 flex flex-wrap">
        <span className="mr-4">React</span>
        <span className="mr-4">Next.Js</span>
        <span className="mr-4">TypeScript</span>
        <span className="mr-4">TailWind Css</span>
        <span className="mr-4">Figma</span>
        <span className="mr-4">Hostinger</span>
      </div>
      <div className="flex">
        <a
          href="https://github.com/Valaex"
          className="mr-4 hover:text-[#00D1FF]  transition-all ease-in"
        >
          <FiGithub size={20} />
        </a>
        <a
          href="https://www.jeromeknops.com/"
          className="hover:text-[#00D1FF]  transition-all ease-in"
        >
          <FiExternalLink size={20} />
        </a>
      </div>
    </div>
  );
};

export default PortfolioMobile2;
