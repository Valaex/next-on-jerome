import React from "react";
import Image from "next/image";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import barberImg from "@/public/projetbarberblanc.jpg";

type Props = {};

const PortfolioHR = (props: Props) => {
  return (
    <div className="container-HR hidden md:flex  relative w-full mt-5">
      <div className="portfolio-left relative md:w-2/3 mt-2 pointer-events-auto ">
        <a href="https://www.jeromeknops.com/">
          <Image
            src={barberImg}
            alt="Site vitrine Barbershop"
            width={700}
            height={380}
            className="z-30 flexcursor-pointer opacity-40 hover:opacity-100 transition-all ease-in rounded-3xl shadow-lg shadow-[#040320]"
          />
        </a>
      </div>
      <div className="portfolio-right text-right z-10 absolute right-0 inline-block pointer-events-none ">
        <div className="">
          <h3 className="text-xl text-[#040320] font-medium drop-shadow-sm shadow-[#040320] ">
            Site Vitrine
          </h3>
          <a href="https://www.jeromeknops.com/" className="inline-block">
            <h2 className=" drop-shadow-sm shadow-slate-700 text-2xl font-bold mb-5 text-[#040320] hover:text-[#00D1FF]  transition-all ease-in text-right pointer-events-auto">
              GC Barbershop
            </h2>
          </a>
          <p className=" text-[15px] font-light mb-6  text-white bg-[#040320] max-w-[550px] p-8 text-right rounded-3xl ">
            Grâce à l'élaboration d'un site web{" "}
            <span className="text-bold text-[#00D1FF]">innovant</span> pour son
            barbershop, combinant{" "}
            <span className="text-bold text-[#00D1FF]">design attrayant</span>{" "}
            et fonctionnalités efficaces, le client a été{" "}
            <span className="text-bold text-[#00D1FF]">soutenu</span> tout au
            long du processus, bénéficiant d'un accompagnement{" "}
            <span className="text-bold text-[#00D1FF]">sur mesure</span> et
            d'une solution d'hébergement adaptée, renforçant ainsi sa présence
            en ligne, attirant une clientèle plus large et{" "}
            <span className="text-bold text-[#00D1FF]">
              augmentant significativement ses revenus
            </span>
            .
          </p>

          <div className="mb-5 flex flex-wrap text-[#040320] justify-end font-medium ">
            <span className="mr-4">Html</span>
            <span className="mr-4">Css</span>
            <span className="mr-4">Javascript</span>
            <span className="mr-4">Jquery</span>
            <span className="mr-4">Figma</span>
            <span className="mr-4">Hostinger</span>
            <span className="">SEO</span>
          </div>
          <div className="flex justify-end pointer-events-auto">
            <a
              href="https://github.com/Valaex/GC-BARBERSHOP"
              className="mr-4 text-[#040320] hover:text-[#00D1FF]  transition-all ease-in "
            >
              <FiGithub size={28} />
            </a>
            <a
              href="https://www.jeromeknops.com/"
              className=" text-[#040320] hover:text-[#00D1FF]  transition-all ease-in"
            >
              <FiExternalLink size={28} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioHR;
