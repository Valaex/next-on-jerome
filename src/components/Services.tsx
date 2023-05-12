import React from "react";
import Offre from "./Offre";
import Reveal from "./MotionReveal/Reveal";

type Props = {};

function Services({}: Props) {
  return (
    <Reveal>
      <section
        id="services"
        className="h-auto bg-[#F5F5F5] shadow-inner pb-10 "
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 pt-10  w-full flex flex-col justify-center">
          <div className="titre text-center mb-16">
            <Reveal>
              <h3 className="font-normal text-base tracking-tighter">
                Ce que je propose
              </h3>
            </Reveal>
            <Reveal>
              <h2 className="font-bold text-3xl">Mes services</h2>
            </Reveal>
          </div>
          <div className="sous-titre text-center mb-10">
            <Reveal>
              <h2 className="font-bold text-3xl ">
                Une tarification simple et transparente
              </h2>
            </Reveal>
            <Reveal>
              <p className="font-normal text-base  tracking-tighter">
                Des forfaits clairs pour des projets complets , un tarif
                journalier pour du développement spécifique
              </p>
            </Reveal>
          </div>
          <Reveal>
            <div className="container-child md:flex md:justify-around  md:bg-[#040320]  text-white  mb-20">
              <div className="child-left py-8  text-center bg-[#040320] mb-4 md:mb-0 rounded-3xl md:rounded-none">
                <Reveal>
                  <h3 className="font-bold text-lg">Taux journalier</h3>
                </Reveal>
                <Reveal>
                  <p className="font-normal text-[13px] mb-4">
                    Pour toute autre prestation en dehors des sites vitrines
                  </p>
                </Reveal>
                <Reveal>
                  <h3 className="font-normal text-xl">
                    <span className="text-[48px] font-bold">300</span>€/Jour
                  </h3>
                </Reveal>
              </div>
              <Reveal>
                <span className="h-[130px] w-[1px] mt-4 bg-white hidden md:block"></span>
              </Reveal>
              <div className="child-left py-8 md:px-10 lg:px-0 lg:pr-20 text-center bg-[#040320] rounded-3xl md:rounded-none">
                <Reveal>
                  <h3 className="font-bold md:text-lg">
                    Maintenance / Modification
                  </h3>
                </Reveal>
                <Reveal>
                  <p className="font-normal md:text-[13px] mb-4">
                    Pour les sites déjà établis
                  </p>
                </Reveal>
                <Reveal>
                  <h3 className="font-normal text-xl">
                    <span className="text-[48px] font-bold">25</span>
                    €/Mois
                  </h3>
                </Reveal>
              </div>
            </div>
          </Reveal>
          <div className="max-w-7xl h-[1px] bg-[#040320] opacity-50 mb-20"></div>
        </div>
        <Offre />
      </section>
    </Reveal>
  );
}

export default Services;
