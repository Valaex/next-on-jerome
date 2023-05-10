import React from "react";
import PortfolioMobile from "./Portfolio-device/PortfolioMobile";
import PortfolioMobile2 from "./Portfolio-device/PortfolioMobile2";
import PortfolioHR from "./Portfolio-device/PortfolioHR";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import portfolioImg from "@/public/portfoliojeromeblanc.jpg";
import Image from "next/image";
import Reveal from "./MotionReveal/Reveal";

type Props = {};

const Portfolio = (props: Props) => {
  return (
    <section
      id="portfolio"
      className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 "
    >
      <div className="mb-20 md:mb-14">
        <div className="text-center mb-16">
          <Reveal>
            <h3 className="font-normal text-base tracking-tighter">
              Mes projets récents
            </h3>
          </Reveal>
          <Reveal>
            <h2 className="font-bold text-3xl">Portfolio</h2>
          </Reveal>
        </div>
        <div className=" flex justify-center md:static text-white mb-4 md:mb-32 lg:mb-20">
          <PortfolioMobile />
          <PortfolioHR />
        </div>
        <div className=" flex justify-center md:static  text-white ">
          <PortfolioMobile2 />
          <div className="container-HR hidden md:flex h-[400px] justify-between relative w-full mt-5">
            <div className="portfolio-left  text-left z-10 absolute left-0 inline-block pointer-events-none">
              <div className="">
                <Reveal>
                  <h3 className="text-xl text-[#040320] font-medium drop-shadow-sm shadow-[#040320] ">
                    Portfolio
                  </h3>
                </Reveal>
                <a href="https://www.jeromeknops.com/" className="inline-block">
                  <Reveal>
                    <h2 className=" drop-shadow-sm shadow-slate-700 text-2xl font-bold mb-5 text-[#040320] hover:text-[#00D1FF]  transition-all ease-in text-left pointer-events-auto">
                      Jérôme Knops
                    </h2>
                  </Reveal>
                </a>
                <Reveal>
                  <p className=" text-[15px] font-light mb-6  text-white bg-[#040320] max-w-[550px] p-8 text-left rounded-3xl ">
                    En concevant un portfolio{" "}
                    <span className="text-bold text-[#00D1FF]">innovant</span> à
                    l&apos;aide de React, Next.js et TypeScript, j&apos;ai mis
                    en avant mon
                    <span className="text-bold text-[#00D1FF]">
                      {" "}
                      expertise technique
                    </span>
                    , créant ainsi un site{" "}
                    <span className="text-bold text-[#00D1FF]">
                      attrayant
                    </span>{" "}
                    et{" "}
                    <span className="text-bold text-[#00D1FF]">
                      fonctionnel
                    </span>{" "}
                    qui témoigne de mon{" "}
                    <span className="text-bold text-[#00D1FF]">
                      savoir-faire
                    </span>{" "}
                    en matière de développement web moderne et de ma capacité à
                    réaliser des projets{" "}
                    <span className="text-bold text-[#00D1FF]">épurés</span> et{" "}
                    <span className="text-bold text-[#00D1FF]">
                      esthétiques.
                    </span>
                  </p>
                </Reveal>

                <div className="mb-5 flex flex-wrap text-[#040320] justify-start font-medium ">
                  <Reveal>
                    <span className="mr-4">React</span>
                  </Reveal>
                  <Reveal>
                    <span className="mr-4">Next.Js</span>
                  </Reveal>
                  <Reveal>
                    <span className="mr-4">TypeScript</span>
                  </Reveal>
                  <Reveal>
                    <span className="mr-4">TailWind Css</span>
                  </Reveal>
                  <Reveal>
                    <span className="mr-4">Figma</span>
                  </Reveal>
                  <Reveal>
                    <span className="mr-4">Hostinger</span>
                  </Reveal>
                </div>
                <div className="flex justify-start pointer-events-auto">
                  <a
                    href="https://github.com/Valaex/next-on-jerome"
                    className="mr-4 text-[#040320] hover:text-[#00D1FF]  transition-all ease-in "
                  >
                    <Reveal>
                      <FiGithub size={28} />
                    </Reveal>
                  </a>
                  <a
                    href="https://www.jeromeknops.com/"
                    className=" text-[#040320] hover:text-[#00D1FF]  transition-all ease-in"
                  >
                    <Reveal>
                      <FiExternalLink size={28} />
                    </Reveal>
                  </a>
                </div>
              </div>
            </div>
            <div className="portfolio-right absolute right-0 md:w-2/3   pointer-events-auto ">
              <a href="https://www.jeromeknops.com/">
                <Reveal>
                  <Image
                    src={portfolioImg}
                    alt="Portfolio Jérôme Knops"
                    width={700}
                    height={380}
                    className="absolute right-0 flexcursor-pointer opacity-40 hover:opacity-100 transition-all ease-in rounded-3xl shadow-lg shadow-[#040320]"
                  />
                </Reveal>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
