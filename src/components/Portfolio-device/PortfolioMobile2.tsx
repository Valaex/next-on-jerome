import React from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import MedisoluceImg from "../../../public/sitemedisolucesombre.png";
import Reveal from "../MotionReveal/Reveal";

type Props = {};

const PortfolioMobile2 = (props: Props) => {
  return (
    <div
      className="container-mobile px-10 py-12 md:pl-16 md:pt-20 md:pr-16 rounded-3xl md:hidden"
      style={{
        width: "800px",
        height: "auto",

        backgroundImage: `url(${MedisoluceImg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Reveal>
        <h3 className="text-base  text-[#00D1FF] ">Site Start-Up</h3>
      </Reveal>
      <a href="https://www.medisoluce.fr/">
        <Reveal>
          <h2 className="text-lg font-bold mb-5 text-white hover:text-[#00D1FF] transition-all ease-in">
            MédiSoluce
          </h2>
        </Reveal>
      </a>
      <Reveal>
        <p className="text-base font-light mb-6 text-white">
          Pour Médisoluce, j'ai conçu un site{" "}
          <span className="text-bold text-[#00D1FF]">moderne</span> avec React
          et Next.js, offrant à mon client une présence en ligne{" "}
          <span className="text-bold text-[#00D1FF]">efficace</span>. Grâce à un
          design <span className="text-bold text-[#00D1FF]">épuré</span> et{" "}
          <span className="text-bold text-[#00D1FF]">esthétique</span>, le
          service est présenté de manière{" "}
          <span className="text-bold text-[#00D1FF]">attrayante</span> et{" "}
          <span className="text-bold text-[#00D1FF]">professionnelle</span>,
          renforçant la crédibilité et l'attrait de Médisoluce auprès de ses
          utilisateurs.
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
          <span className="mr-4">Netlify</span>
        </Reveal>
      </div>
      <div className="flex">
        <a
          href="https://www.medisoluce.fr/"
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
