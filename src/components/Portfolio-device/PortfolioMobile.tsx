import React from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import barberImg from "@/public/projetbarber.jpg";

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
      <h3 className="text-base  text-[#00D1FF] ">Site Vitrine</h3>
      <a href="https://www.jeromeknops.com/">
        <h2 className="text-lg font-bold mb-5 text-white hover:text-[#00D1FF]  transition-all ease-in">
          GC Barbershop
        </h2>
      </a>
      <p className="text-base font-light mb-6  text-white">
        Grâce à l'élaboration d'un site web{" "}
        <span className="text-bold text-[#00D1FF]">innovant</span> pour son
        barbershop, combinant{" "}
        <span className="text-bold text-[#00D1FF]">design attrayant</span> et
        fonctionnalités efficaces, le client a été{" "}
        <span className="text-bold text-[#00D1FF]">soutenu</span> tout au long
        du processus, bénéficiant d'un accompagnement{" "}
        <span className="text-bold text-[#00D1FF]">sur mesure</span> et d'une
        solution d'hébergement adaptée, renforçant ainsi sa présence en ligne,
        attirant une clientèle plus large et{" "}
        <span className="text-bold text-[#00D1FF]">
          augmentant significativement ses revenus
        </span>
        .
      </p>
      <div className="mb-5 flex flex-wrap">
        <span className="mr-4">Html</span>

        <span className="mr-4">Css</span>
        <span className="mr-4">Javascript</span>
        <span className="mr-4">Jquery</span>
        <span className="mr-4">Figma</span>
        <span className="mr-4">Hostinger</span>
        <span className="">SEO</span>
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

export default PortfolioMobile;
