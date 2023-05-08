import React from "react";
import Simple from "./offre-produits/Simple";
import Pro from "./offre-produits/Pro";
import StartUp from "./offre-produits/StartUp";

type Props = {};

const Offre = (props: Props) => {
  return (
    <div>
      <div className="text-center">
        <h2 className="font-bold text-3xl underline mb-5">
          Offre de lancement (40% de réduction)
        </h2>
        <h3 className="text-xl font-bold underline text-center">
          Pour les 5 premiers clients
        </h3>
      </div>
      <div className="container-offres">
        <Simple />
        <Pro />
        <StartUp />
      </div>
    </div>
  );
};

export default Offre;
