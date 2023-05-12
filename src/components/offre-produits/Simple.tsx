import React from "react";
import IconValid from "./iconValid";
import Reveal from "../MotionReveal/Reveal";

type Props = {};

const Simple = (props: Props) => {
  return (
    <div className="container-simple bg-[#040320] text-white max-w-[300px] md:max-w-[230px]  lg:max-w-[300px] rounded-2xl flex flex-col justify-center px-[20px] py-[30px]  ">
      <Reveal>
        <h2 className="font-bold text-2xl md:text-xl lg:text-2xl mb-[20px] text-center">
          Site Vitrine Simple
        </h2>
      </Reveal>
      <Reveal>
        <div className="séparation h-[1px] bg-white mx-16 mb-[15px]"></div>
      </Reveal>
      <Reveal>
        <h4 className="text-center mb-[5px] text-base md:text-sm lg:text-base font-normal">
          À Partir De
        </h4>
      </Reveal>
      <div className=" flex justify-center items-center mb-[10px] ">
        <Reveal>
          <p className="mr-5 text-[#00D1FF] font-bold text-xl  md:text-lg lg:text-xl line-through">
            1500€
          </p>
        </Reveal>
        <Reveal>
          <p className="text-[#00D1FF] font-bold text-sm md:text-xs lg:text-sm bg-white rounded-3xl p-2 ">
            Économisez 40%
          </p>
        </Reveal>
      </div>
      <Reveal>
        <h3 className="text-center mb-[15px] font-normal text-xl md:text-lg lg:text-xl">
          <span className="text-[48px] font-bold">900</span>€/HTVA
        </h3>
      </Reveal>
      <Reveal>
        <div className="séparation  h-[1px] bg-white mx-16 mb-[20px]"></div>
      </Reveal>
      <Reveal>
        <p className="mb-[20px] font-normal text-base md:text-sm lg:text-base px-4">
          Idéal pour un entrepreneur qui souhaite avoir une{" "}
          <span className="font-bold">visibilité</span> de son{" "}
          <span className="font-bold">activité</span> sur internet.
        </p>
      </Reveal>
      <Reveal>
        <div className="séparation  h-[1px] bg-white mx-8 mb-[20px]"></div>
      </Reveal>

      {/* list */}
      <ul className="list">
        <Reveal>
          <li className="list-child flex  items-center justify-around bg-[#FFFFFF] bg-opacity-10 max-w-[268px] border-b-[1px] border-[#040320] rounded-t-xl">
            <IconValid />
            <p className="w-56 p-2 text-sm md:text-xs lg:text-sm">
              ~4 pages modifiables (accueil, page à propos, contact...)
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
              Adresse mail pro personnalisée
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
              Formulaire de contact integré dans le site
            </p>
          </li>
        </Reveal>
        <Reveal>
          <li className="list-child flex  items-center justify-around bg-[#FFFFFF] bg-opacity-10 max-w-[268px] border-b-[1px] border-[#040320]">
            <IconValid />
            <p className="w-56 p-2 text-sm md:text-xs lg:text-sm">
              Mise en ligne du site{" "}
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

export default Simple;
