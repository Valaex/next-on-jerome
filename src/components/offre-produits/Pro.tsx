import React from "react";
import IconValid from "./iconValid";

import Reveal from "../MotionReveal/Reveal";

type Props = {};

const Pro = (props: Props) => {
  return (
    <div className="container-pro bg-[#040320] text-white max-w-[350px] md:max-w-[280px]  lg:max-w-[350px] rounded-2xl flex flex-col justify-center  px-[30px] py-[30px]  ">
      <Reveal>
        <h2 className="font-bold text-[32px] md:text-2xl lg:text-[32px] mb-[25px] text-center">
          Site Vitrine Pro
        </h2>
      </Reveal>
      <Reveal>
        <div className="séparation h-[1px] bg-white mx-14 mb-[15px]"></div>
      </Reveal>
      <Reveal>
        <h4 className="text-center mb-[5px] text-lg md:text-base lg:text-lg font-normal">
          Au Prix De
        </h4>
      </Reveal>
      <div className=" flex justify-center items-center mb-[20px] ">
        <Reveal>
          <p className="mr-5 text-[#00D1FF] font-bold text-2xl md:text-xl lg:text-2xl line-through">
            2700€
          </p>
        </Reveal>{" "}
        <Reveal>
          <p className="text-[#00D1FF] font-bold text-base md:text-sm lg:text-base bg-white rounded-3xl p-2 shadow ">
            Économisez 40%
          </p>
        </Reveal>
      </div>
      <Reveal>
        <h3 className="text-center mb-[20px] font-normal text-xl md:text-lg lg:text-xl">
          <span className="text-[60px] font-bold">1620</span>€/HTVA
        </h3>
      </Reveal>
      <Reveal>
        <div className="séparation  h-[1px] bg-white mx-14 mb-[25px]"></div>
      </Reveal>
      <Reveal>
        <p className="mb-[20px] font-normal text-xl md:text-lg lg:text-xl pl-4">
          Idéal pour une société qui souhaite{" "}
          <span className="font-bold">promouvoir</span> ses produits et services
          et mettre en <span className="font-bold">valeur</span> son entreprise.
        </p>
      </Reveal>
      <Reveal>
        <div className="séparation  h-[1px] bg-white mx-6 mb-[25px]"></div>
      </Reveal>

      {/* list */}
      <ul className="list">
        <Reveal>
          <li className="list-child flex  items-center justify-around bg-[#FFFFFF] bg-opacity-10 max-w-[300px] border-b-[1px] border-[#040320] rounded-t-xl">
            <IconValid />
            <p className="w-64 p-2 text-base md:text-sm lg:text-base">
              ~7 pages modifiables (accueil, page à propos, service,
              contact,...)
            </p>
          </li>
        </Reveal>

        <Reveal>
          <li className="list-child flex  items-center justify-around bg-[#FFFFFF] bg-opacity-10 max-w-[300px] border-b-[1px] border-[#040320]">
            <IconValid />
            <p className="w-64 p-2 text-base md:text-sm lg:text-base">
              Nom de domaine & hébergement
            </p>
          </li>
        </Reveal>

        <Reveal>
          <li className="list-child flex  items-center justify-around bg-[#FFFFFF] bg-opacity-10 max-w-[300px] border-b-[1px] border-[#040320]">
            <IconValid />
            <p className="w-64 p-2 text-base md:text-sm lg:text-base">
              Adresse mail pro personnalisée
            </p>
          </li>
        </Reveal>

        <Reveal>
          <li className="list-child flex  items-center justify-around bg-[#FFFFFF] bg-opacity-10 max-w-[300px] border-b-[1px] border-[#040320]">
            <IconValid />
            <p className="w-64 p-2 text-base md:text-sm">
              Design responsive qui s’adapte à tous les écrans (téléphone,
              tablette,...)
            </p>
          </li>
        </Reveal>

        <Reveal>
          <li className="list-child flex  items-center justify-around bg-[#FFFFFF] bg-opacity-10 max-w-[300px] border-b-[1px] border-[#040320]">
            <IconValid />
            <p className="w-64 p-2 text-base md:text-sm lg:text-base">
              Fonctionnalités au choix (formulaire de contact, newsletter,
              blog,...)
            </p>
          </li>
        </Reveal>

        <Reveal>
          <li className="list-child flex  items-center justify-around bg-[#FFFFFF] bg-opacity-10 max-w-[300px] border-b-[1px] border-[#040320]">
            <IconValid />
            <p className="w-64 p-2 text-base md:text-sm lg:text-base">
              12 mois de maintenance du site
            </p>
          </li>
        </Reveal>

        <Reveal>
          <li className="list-child flex  items-center justify-around bg-[#FFFFFF] bg-opacity-10 max-w-[300px] border-b-[1px] border-[#040320]">
            <IconValid />
            <p className="w-64 p-2 text-base md:text-sm lg:text-base">
              Mise en ligne du site & SEO{" "}
            </p>
          </li>
        </Reveal>

        <Reveal>
          <li className="list-child flex  items-center justify-around bg-[#FFFFFF] bg-opacity-10 max-w-[300px] rounded-b-xl">
            <IconValid />
            <p className="w-64 p-2 text-base md:text-sm lg:text-base">
              Modifications jusqu’à 1 semaine après la livraison
            </p>
          </li>
        </Reveal>
      </ul>
    </div>
  );
};

export default Pro;
