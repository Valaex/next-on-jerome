import React from "react";
import Image from "next/image";
import barberImg from "../public/projetbarber.jpg";
import portfolioImg from "../public/portfoliojeromefonce.jpg";
import { SocialIcon } from "react-social-icons";
import { FiExternalLink } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";

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
        <ul>
          <li className=" flex justify-center lg:static text-white mb-4 md:mb-20">
            <div
              className="container px-10 py-12 md:pl-16 md:pt-20 md:pr-16 rounded-3xl"
              style={{
                width: "800px",
                height: "auto",

                backgroundImage: `url(${barberImg.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <h3 className="text-base  text-[#00D1FF] ">Site Vitrine</h3>
              <a href="https://www.jeromeknops.com/">
                <h2 className="text-lg font-bold mb-5 text-white">
                  GC Barbershop
                </h2>
              </a>
              <p className="text-base font-light mb-6  text-white">
                Grâce à l'élaboration d'un site web{" "}
                <span className="text-bold text-[#00D1FF]">innovant</span> pour
                son barbershop, combinant{" "}
                <span className="text-bold text-[#00D1FF]">
                  design attrayant
                </span>{" "}
                et fonctionnalités efficaces, le client a été{" "}
                <span className="text-bold text-[#00D1FF]">soutenu</span> tout
                au long du processus, bénéficiant d'un accompagnement{" "}
                <span className="text-bold text-[#00D1FF]">sur mesure</span> et
                d'une solution d'hébergement adaptée, renforçant ainsi sa
                présence en ligne, attirant une clientèle plus large et{" "}
                <span className="text-bold text-[#00D1FF]">
                  augmentant significativement ses revenus
                </span>
                .
              </p>
              <div className="mb-5 flex flex-wrap">
                <span className="mr-4">Html</span>

                <span className="mr-4">Css</span>
                <span className="mr-4">Javascript</span>
                <span className="mr-4">Jquery</span>
                <span className="mr-4">Figma</span>
                <span className="mr-4">Hostinger</span>
                <span className="">SEO</span>
              </div>
              <div className="flex">
                <a href="https://github.com/Valaex" className="mr-4">
                  <FiGithub size={20} />
                </a>
                <a href="https://www.jeromeknops.com/">
                  <FiExternalLink size={20} />
                </a>
              </div>
            </div>
          </li>

          <li className=" flex justify-center lg:static text-white mb-4 md:mb-20">
            <div
              className="container px-10 py-12 md:pl-16 md:pt-20 md:pr-16 rounded-3xl"
              style={{
                width: "800px",
                height: "auto",

                backgroundImage: `url(${portfolioImg.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <h3 className="text-base  text-[#00D1FF] ">PortFolio</h3>
              <a href="https://www.jeromeknops.com/">
                <h2 className="text-lg font-bold mb-5 text-white">
                  Jérôme Knops
                </h2>
              </a>
              <p className="text-base font-light mb-6  text-[#00D1FF]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repellendus alias fugiat reiciendis at hic magni velit minus
                eveniet ratione nesciunt?
              </p>
              <div className="mb-5 flex flex-wrap">
                <span className="mr-4">React</span>
                <span className="mr-4">Next.Js</span>
                <span className="mr-4">Javascript</span>
                <span className="mr-4">Tailwind Css</span>
                <span className="mr-4">Figma</span>
                <span className="">Hostinger</span>
              </div>
              <div className="flex">
                <a href="https://github.com/Valaex" className="mr-4">
                  <FiGithub size={20} />
                </a>
                <a href="https://www.jeromeknops.com/">
                  <FiExternalLink size={20} />
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Portfolio;
