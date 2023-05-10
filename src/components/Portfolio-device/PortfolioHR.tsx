import React from "react";
import Image from "next/image";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import barberImg from "@/public/projetbarberblanc.jpg";
import Reveal from "../MotionReveal/Reveal";

type Props = {};

const PortfolioHR = (props: Props) => {
  return (
    <div className="container-HR hidden md:flex  relative w-full mt-5">
      <div className="portfolio-left relative md:w-2/3 mt-2 pointer-events-auto ">
        <a href="https://www.jeromeknops.com/">
          <Reveal>
            <Image
              src={barberImg}
              alt="Site vitrine Barbershop"
              width={700}
              height={380}
              className="z-30 flexcursor-pointer opacity-40 hover:opacity-100 transition-all ease-in rounded-3xl shadow-lg shadow-[#040320]"
            />
          </Reveal>
        </a>
      </div>
      <div className="portfolio-right text-right z-10 absolute right-0 inline-block pointer-events-none ">
        <div className="">
          <Reveal>
            <h3 className="text-xl text-[#040320] font-medium drop-shadow-sm shadow-[#040320] ">
              Site Vitrine
            </h3>
          </Reveal>
          <a href="https://www.jeromeknops.com/" className="inline-block">
            <Reveal>
              <h2 className=" drop-shadow-sm shadow-slate-700 text-2xl font-bold mb-5 text-[#040320] hover:text-[#00D1FF]  transition-all ease-in text-right pointer-events-auto">
                GC Barbershop
              </h2>
            </Reveal>
          </a>
          <Reveal>
            <p className="text-[15px] font-light mb-6 text-white bg-[#040320] max-w-[550px] p-8 text-left rounded-3xl">
              En concevant un portfolio{" "}
              <span className="text-bold text-[#00D1FF]">innovant</span> à
              l&apos;aide de React, Next.js et TypeScript, j&apos;ai mis en
              avant mon
              <span className="text-bold text-[#00D1FF]">
                {" "}
                expertise technique
              </span>
              , créant ainsi un site{" "}
              <span className="text-bold text-[#00D1FF]">
                attrayant
              </span> et{" "}
              <span className="text-bold text-[#00D1FF]">fonctionnel</span> qui
              témoigne de mon{" "}
              <span className="text-bold text-[#00D1FF]">savoir-faire</span> en
              matière de développement web moderne et de ma capacité à réaliser
              des projets{" "}
              <span className="text-bold text-[#00D1FF]">épurés</span> et{" "}
              <span className="text-bold text-[#00D1FF]">esthétiques.</span>
            </p>
          </Reveal>

          <div className="mb-5 flex flex-wrap text-[#040320] justify-end font-medium ">
            <Reveal>
              <span className="mr-4">Html</span>
            </Reveal>
            <Reveal>
              <span className="mr-4">Css</span>
            </Reveal>
            <Reveal>
              <span className="mr-4">Javascript</span>
            </Reveal>
            <Reveal>
              <span className="mr-4">Jquery</span>
            </Reveal>
            <Reveal>
              <span className="mr-4">Figma</span>
            </Reveal>
            <Reveal>
              <span className="mr-4">Hostinger</span>
            </Reveal>
            <Reveal>
              <span className="">SEO</span>
            </Reveal>
          </div>
          <div className="flex justify-end pointer-events-auto">
            <a
              href="https://github.com/Valaex/GC-BARBERSHOP"
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
    </div>
  );
};

export default PortfolioHR;
