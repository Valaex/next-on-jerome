import React from "react";
import Image from "next/image";
import imgValid from "../public/valid.svg";
import { ComponentProps } from "react";

type Props = {};

type ExpTechProps = {
  icon: ComponentProps<typeof Image>["src"];
  title: string;
  experience: string;
};

function Experience({}: Props) {
  function ExpTech({ icon, title, experience }: ExpTechProps) {
    return (
      <div className="exp-tech flex items-start">
        <Image className="mt-1 mr-2" src={icon} alt="icon valide" />
        <div>
          <h3 className="uppercase text-base font-bold">{title}</h3>
          <h4 className="capitalize text-xs font-normal">{experience}</h4>
        </div>
      </div>
    );
  }
  const techDataL = [
    { icon: imgValid, title: "HTML", experience: "Expérimenté" },
    { icon: imgValid, title: "JAVASCRIPT", experience: "Expérimenté" },
    { icon: imgValid, title: "CSS", experience: "Expérimenté" },
    { icon: imgValid, title: "REACT", experience: "Expérimenté" },
    { icon: imgValid, title: "TAILWIND", experience: "Expérimenté" },
    { icon: imgValid, title: "NEXT JS", experience: "Expérimenté" },
  ];

  const techDataR = [
    { icon: imgValid, title: "FIGMA", experience: "Expérimenté" },
    { icon: imgValid, title: "GIT", experience: "Expérimenté" },
    { icon: imgValid, title: "PHOTOSHOP", experience: "Expérimenté" },
    { icon: imgValid, title: "GITHUB", experience: "Expérimenté" },
    { icon: imgValid, title: "SKETCH", experience: "Expérimenté" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 pt-10 mb-32">
      <div>
        <div className="text-center mb-16">
          <h3 className="font-normal text-base tracking-tighter">
            Mes compétences
          </h3>
          <h2 className="font-bold text-3xl">Mon expérience</h2>
        </div>
        <div className="exp-container flex flex-wrap justify-around text-white">
          <div className="exp-container-left mb-6 md:mr-4 lg:mb-0  bg-[#040320] py-6 px-10 rounded-3xl h-full">
            <h3 className="text-bold text-xl leading-6 text-white mb-4 text-center">
              Front-End développement
            </h3>
            <div className="grid grid-cols-2 gap-x-24 gap-y-4 pb-4 ">
              {techDataL.map((tech) => (
                <ExpTech
                  key={tech.title}
                  icon={tech.icon}
                  title={tech.title}
                  experience={tech.experience}
                />
              ))}
            </div>
          </div>
          <div className="exp-container-right mb-6 md:mr-4 lg:mb-0  bg-[#040320] py-6 px-10 rounded-3xl h-full">
            <h3 className="text-bold text-xl leading-6 text-white mb-4 text-center">
              Outils de design & développement
            </h3>
            <div className="grid grid-cols-2 gap-x-24 gap-y-4 pb-4 ">
              {techDataR.map((tech) => (
                <ExpTech
                  key={tech.title}
                  icon={tech.icon}
                  title={tech.title}
                  experience={tech.experience}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
