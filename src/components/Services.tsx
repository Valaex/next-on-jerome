import React from "react";
import Offre from "./Offre";

type Props = {};

function Services({}: Props) {
  return (
    <section id="services" className="h-auto bg-[#F5F5F5] shadow-inner  ">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 pt-10  w-full flex flex-col justify-center">
        <div className="titre text-center mb-16">
          <h3 className="font-normal text-base tracking-tighter">
            Ce que je propose
          </h3>
          <h2 className="font-bold text-3xl">Mes services</h2>
        </div>
        <div className="sous-titre text-center mb-10">
          <h2 className="font-bold text-3xl ">
            Une tarification simple et transparente
          </h2>
          <p className="font-normal text-base  tracking-tighter">
            Des forfaits clair pour des projets complets , un tarif journalier
            pour du développement spécifique
          </p>
        </div>
        <div className="container-child md:flex md:justify-around  md:bg-[#040320]  text-white  mb-20">
          <div className="child-left py-8  text-center bg-[#040320] mb-4 md:mb-0">
            <h3 className="font-bold text-lg">Taux journalier</h3>
            <p className="font-normal text-[13px] mb-4">
              Pour toute autre prestation en dehors des sites vitrines
            </p>
            <h3 className="font-normal text-xl">
              <span className="text-[48px] font-bold">300</span>€/Jour
            </h3>
          </div>
          <span className="h-[130px] w-[1px] mt-4 bg-white hidden md:block"></span>
          <div className="child-left py-8 md:px-10 lg:px-0 lg:pr-20 text-center bg-[#040320]">
            <h3 className="font-bold md:text-lg">Maintenance / Modification</h3>
            <p className="font-normal md:text-[13px] mb-4">
              Pour les sites déjà établis
            </p>
            <h3 className="font-normal text-xl">
              <span className="text-[48px] font-bold">25</span>
              €/Mois
            </h3>
          </div>
        </div>
        <div className="max-w-7xl h-[1px] bg-[#040320] opacity-50 mb-20"></div>
      </div>
      <Offre />
    </section>
  );
}

export default Services;
