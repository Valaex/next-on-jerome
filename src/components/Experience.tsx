import React from "react";
import Image from "next/image";
import imgValid from "../public/valid.svg";
import { ComponentProps } from "react";
import Reveal from "./MotionReveal/Reveal";

type Props = {};

type ExpTechProps = {
  icon: ComponentProps<typeof Image>["src"];
  title: string;
};

function Experience({}: Props) {
  function ExpTech({ icon, title }: ExpTechProps) {
    return (
      <div className="exp-tech flex items-start">
        <Image className="mt-1 mr-2" src={icon} alt="icon valide" />
        <div>
          <h3 className="uppercase text-sm font-bold md:text-base">{title}</h3>
        </div>
      </div>
    );
  }
  const techDataL = [
    { icon: imgValid, title: "React" },
    { icon: imgValid, title: "TYPESCRIPT" },
    { icon: imgValid, title: "NEXT JS" },
    { icon: imgValid, title: "HTML" },
    { icon: imgValid, title: "TAILWIND" },
    { icon: imgValid, title: "CSS" },
  ];

  const techDataR = [
    { icon: imgValid, title: "FIGMA" },
    { icon: imgValid, title: "GIT" },
    { icon: imgValid, title: "PHOTOSHOP" },
    { icon: imgValid, title: "GITHUB" },
    { icon: imgValid, title: "SKETCH" },
    { icon: imgValid, title: "GPT-4" },
  ];

  return (
    <section
      id="experience"
      className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 pt-10 mb-20"
    >
      <div>
        <div className="text-center mb-16">
          <Reveal>
            <h3 className="font-normal text-base tracking-tighter">
              Mes compétences
            </h3>
          </Reveal>
          <Reveal>
            <h2 className="font-bold text-3xl">Mon expérience</h2>
          </Reveal>
        </div>
        <div className="exp-container flex flex-wrap justify-around text-white">
          <Reveal>
            <div className="exp-container-left mb-6 md:mr-4 lg:mb-0  bg-[#040320] py-6 px-6 md:px-10 rounded-3xl h-full">
              <Reveal>
                <h3 className="text-bold text-xl leading-6 text-white mb-4 text-center">
                  Front-End développement
                </h3>
              </Reveal>
              <Reveal>
                <div className="grid grid-cols-2 gap-x-20 md:gap-x-24 gap-y-4 pb-4 pr-1 md:pr-2 ">
                  {techDataL.map((tech) => (
                    <ExpTech
                      key={tech.title}
                      icon={tech.icon}
                      title={tech.title}
                    />
                  ))}
                </div>
              </Reveal>
            </div>
          </Reveal>
          <Reveal>
            <div className="exp-container-left mb-6 md:mr-4 lg:mb-0  bg-[#040320] py-6 px-6 md:px-10 rounded-3xl  h-full">
              <Reveal>
                <h3 className="text-bold text-lg md:text-xl leading-6 text-white mb-3 text-center ">
                  Outils de design & développement
                </h3>
              </Reveal>
              <Reveal>
                <div className="grid grid-cols-2  gap-x-20 md:gap-x-24 gap-y-4 pb-4">
                  {techDataR.map((tech) => (
                    <ExpTech
                      key={tech.title}
                      icon={tech.icon}
                      title={tech.title}
                    />
                  ))}
                </div>
              </Reveal>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Experience;
