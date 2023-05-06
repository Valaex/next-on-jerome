import React from "react";
import PortfolioMobile from "./Portfolio-device/PortfolioMobile";
import PortfolioMobile2 from "./Portfolio-device/PortfolioMobile2";
import PortfolioHR from "./Portfolio-device/PortfolioHR";
import PortfolioHR2 from "./Portfolio-device/PortfolioHR2";

type Props = {};

const Portfolio = (props: Props) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
      <div>
        <div className="text-center mb-16">
          <h3 className="font-normal text-base tracking-tighter">
            Mes projets récents
          </h3>
          <h2 className="font-bold text-3xl">Portfolio</h2>
        </div>
        <div className=" flex justify-center lg:static text-white mb-4 md:mb-32 lg:mb-20">
          <PortfolioMobile />
          <PortfolioHR />
        </div>
        <div className=" flex justify-center lg:static text-white mb-4 md:mb-32 lg:mb-20">
          <PortfolioMobile2 />
          <PortfolioHR2 />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
