import React from "react";
import Simple from "./offre-produits/Simple";
import Pro from "./offre-produits/Pro";
import StartUp from "./offre-produits/StartUp";
import DevisButton from "./Button/DevisButton";
import Reveal from "./MotionReveal/Reveal";

type Props = {};

const Offre = (props: Props) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
      <div className="text-center">
        <Reveal>
          <h2 className="font-bold text-3xl underline mb-5">
            Offre de lancement (40% de réduction)
          </h2>
        </Reveal>
        <Reveal>
          <h3 className="text-xl font-bold underline text-center mb-20">
            Pour les 5 premiers clients
          </h3>
        </Reveal>
      </div>
      <div className="container-offres flex flex-col justify-center items-center md:justify-around  md:flex-row lg:flex-row  ">
        <div className="flex flex-col items-center justify-center order-2 md:order-1 md:mr-2 lg:mr-8 mb-14 md:mb-0">
          <div className="mb-5 ">
            <Reveal>
              <Simple />
            </Reveal>
          </div>
          <div className="mb-5">
            <Reveal>
              <DevisButton />
            </Reveal>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center order-1 md:order-2 md:mr-2 lg:mr-8 mb-14 md:mb-0">
          <div className="mb-5">
            <Reveal>
              <Pro />
            </Reveal>
          </div>
          <div>
            <Reveal>
              <DevisButton />
            </Reveal>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center order-3  ">
          <div className="mb-5">
            <Reveal>
              <StartUp />
            </Reveal>
          </div>
          <div>
            <Reveal>
              <DevisButton />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offre;
