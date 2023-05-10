import React from "react";
import Image from "next/image";
import IconValid from "./iconValid";
import IconReact from "@/public/React.svg";
import Reveal from "../MotionReveal/Reveal";

type Props = {};

const StartUp = (props: Props) => {
  return (
    <div className="container-simple bg-[#040320] text-white max-w-[300px] md:max-w-[230px]  lg:max-w-[300px] rounded-2xl flex flex-col justify-center px-[20px] py-[30px]   ">
      <Reveal>
        <h2 className="font-bold text-2xl md:text-xl lg:text-2xl   mb-[20px] text-center">
          Projet Start-Up en React
        </h2>
      </Reveal>
      <Reveal>
        <div className="séparation h-[1px] bg-white mx-16 mb-[15px]"></div>
      </Reveal>
      <Reveal>
        <h4 className="text-center mb-[15px] text-[40px] md:text-2xl lg:text-[40px] font-bold">
          Sur Devis
        </h4>
      </Reveal>
      <Reveal>
        <div className="séparation  h-[1px] bg-white mx-16 mb-[20px]"></div>
      </Reveal>
      <Reveal>
        <p className="mb-[20px] font-normal text-base md:text-sm lg:text-base px-4">
          Idéal pour toute entreprise de type{" "}
          <span className="font-bold">Start-Up</span> qui souhaite un site avec
          des interfaces utilisateur hautement interactives et dynamiques adapté
          à la <span className="font-bold">croissance</span> potentielle son
          projet.
        </p>
      </Reveal>
      <Reveal>
        <div className="séparation  h-[1px] bg-white mx-8 mb-[20px]"></div>
      </Reveal>

      {/* list */}
      <ul className="list">
        <Reveal>
          <li className="list-child flex  items-center justify-around bg-[#FFFFFF] bg-opacity-10 max-w-[268px] border-b-[1px] border-[#040320] rounded-t-xl">
            <div className="ml-2">
              <Image src={IconReact} alt="icon react" height={20} width={20} />
            </div>
            <p className="w-56 p-2 text-sm md:text-xs lg:text-sm">
              <span className="font-bold text-base md:text-sm lg:text-base">
                React
              </span>{" "}
              au centre de votre projet
            </p>
          </li>
        </Reveal>

        <Reveal>
          <li className="list-child flex  items-center justify-around bg-[#FFFFFF] bg-opacity-10 max-w-[268px] border-b-[1px] border-[#040320]">
            <IconValid />
            <p className="w-56 p-2 text-sm md:text-xs lg:text-sm">
              Nom de domaine & hébergement
            </p>
          </li>
        </Reveal>

        <Reveal>
          <li className="list-child flex  items-center justify-around bg-[#FFFFFF] bg-opacity-10 max-w-[268px] border-b-[1px] border-[#040320]">
            <IconValid />
            <p className="w-56 p-2 text-sm md:text-xs lg:text-sm">
              Création de site sur-mesure
            </p>
          </li>
        </Reveal>

        <Reveal>
          <li className="list-child flex  items-center justify-around bg-[#FFFFFF] bg-opacity-10 max-w-[268px] border-b-[1px] border-[#040320]">
            <IconValid />
            <p className="w-56 p-2 text-sm md:text-xs lg:text-sm">
              Design responsive qui s’adapte à tous les écrans (téléphone,
              tablette,...)
            </p>
          </li>
        </Reveal>

        <Reveal>
          <li className="list-child flex  items-center justify-around bg-[#FFFFFF] bg-opacity-10 max-w-[268px] border-b-[1px] border-[#040320]">
            <IconValid />
            <p className="w-56 p-2 text-sm md:text-xs lg:text-sm">
              Fonctionnalités nécessaire au projet
            </p>
          </li>
        </Reveal>

        <Reveal>
          <li className="list-child flex  items-center justify-around bg-[#FFFFFF] bg-opacity-10 max-w-[268px] border-b-[1px] border-[#040320]">
            <IconValid />
            <p className="w-56 p-2 text-sm md:text-xs lg:text-sm">
              Mise en ligne du site & SEO{" "}
            </p>
          </li>
        </Reveal>

        <Reveal>
          <li className="list-child flex  items-center justify-around bg-[#FFFFFF] bg-opacity-10 max-w-[268px] rounded-b-xl">
            <IconValid />
            <p className="w-56 p-2 text-sm md:text-xs lg:text-sm">
              Modifications jusqu’à 1 semaine après la livraison
            </p>
          </li>
        </Reveal>
      </ul>
    </div>
  );
};

export default StartUp;
