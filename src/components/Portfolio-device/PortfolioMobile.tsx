import React from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import barberImg from "@/public/projetbarber.jpg";
import Reveal from "../MotionReveal/Reveal";

type Props = {};

const PortfolioMobile = (props: Props) => {
  return (
    <div
      className="container-mobile px-10 py-12 md:pl-16 md:pt-20 md:pr-16 rounded-3xl md:hidden "
      style={{
        width: "800px",
        height: "auto",

        backgroundImage: `url(${barberImg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Reveal>
        <h3 className="text-base  text-[#00D1FF] ">Site Vitrine</h3>
      </Reveal>
      <a href="https://www.jeromeknops.com/">
        <Reveal>
          <h2 className="text-lg font-bold mb-5 text-white hover:text-[#00D1FF]  transition-all ease-in">
            GC Barbershop
          </h2>
        </Reveal>
      </a>
      <Reveal>
        <p className="text-base font-light mb-6  text-white">
          Grâce à l&apos;élaboration d&apos;un site web{" "}
          <span className="text-bold text-[#00D1FF]">innovant</span> pour son
          barbershop, combinant{" "}
          <span className="text-bold text-[#00D1FF]">design attrayant</span> et
          fonctionnalités efficaces, le client a été{" "}
          <span className="text-bold text-[#00D1FF]">soutenu</span> tout au long
          du processus, bénéficiant d&apos;un accompagnement{" "}
          <span className="text-bold text-[#00D1FF]">sur mesure</span> et
          d&apos;une solution d&apos;hébergement adaptée, renforçant ainsi sa
          présence en ligne, attirant une clientèle plus large et{" "}
          <span className="text-bold text-[#00D1FF]">
            augmentant significativement ses revenus
          </span>
          .
        </p>
      </Reveal>
      <div className="mb-5 flex flex-wrap">
        <Reveal>
          <span className="mr-4">Html</span>
        </Reveal>
        <Reveal>
          <span className="mr-4">Css</span>
        </Reveal>
        <Reveal>
          <span className="mr-4">Javascript</span>
        </Reveal>
        <Reveal>
          <span className="mr-4">Jquery</span>
        </Reveal>
        <Reveal>
          <span className="mr-4">Figma</span>
        </Reveal>
        <Reveal>
          <span className="mr-4">Hostinger</span>
        </Reveal>
        <Reveal>
          <span className="">SEO</span>
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

export default PortfolioMobile;
