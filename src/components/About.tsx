import React from "react";
import Image from "next/image";
import aboutImg from "@/public/aboutimg.svg";
import fileImg from "@/public/file.svg";
import ContactButton from "./Button/ContactButton";

type Props = {};

function About({}: Props) {
  return (
    <section className="h-auto bg-[#F5F5F5] shadow-inner">
      <div className="container max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 pt-10">
        <div className="text-center mb-16">
          <h3 className="font-normal text-base tracking-tighter">
            Apprenez à me connaître
          </h3>
          <h2 className="font-bold text-3xl">À propos de moi</h2>
        </div>
        <div className="flex flex-wrap justify-center lg:justify-between md:flex-nowrap ">
          <div className="flex relative mb-12 md:mr-20 ">
            <Image
              className=" "
              style={{ objectFit: "contain" }}
              width={450}
              height={450}
              src={aboutImg}
              alt="Photo de présentation"
              quality={100}
            />
          </div>

          <div>
            <div className="about-right flex flex-wrap justify-center md:justify-normal lg:pt-14 md:max-w-xl mb-8">
              <div className="flex flex-col justify-center items-center w-44 h-40 bg-[#040320] rounded-lg mb-5">
                <Image className="mb-1" src={fileImg} alt="icone fichier" />
                <h3 className="text-white text-base tracking-tighter">
                  Projets
                </h3>
                <h4 className="text-white">5+ Complétés</h4>
              </div>
              <p className=" leading-7 text-base text-left mb-8 lg:text-lg">
                Je m’appelle Jérôme , je développe des projets web, qu’ils
                soient petits ou grands, pour les start-ups et les petites
                entreprises, de celles qui cherchent à se doter d’un site
                vitrine professionnel à celles qui cherchent à créer des projets
                complexes.
              </p>
              <ContactButton></ContactButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
