import React from "react";
import Image from "next/image";
import barberImg from "../public/projetbarber.jpg";
import { SocialIcon } from "react-social-icons";

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
              className="container md:pl-16 md:pt-20 md:pr-16"
              style={{
                width: "800px",
                height: "428px",

                backgroundImage: `url(${barberImg.src})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            >
              <h3 className="">Site Vitrine</h3>
              <h2 className="">GC Barbershop</h2>
              <p className="">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repellendus alias fugiat reiciendis at hic magni velit minus
                eveniet ratione nesciunt?
              </p>
              <span className="">React</span>
              <span className="">Next JS</span>
              <span className="">TailWind Css</span>
              <span className="">Figma</span>
              <div>
                <SocialIcon
                  url="https://github.com/Valaex"
                  fgColor="#FFFFFF"
                  bgColor="transparent"
                />
                <SocialIcon
                  url="https://www.jeromeknops.com/"
                  fgColor="#FFFFFF"
                  bgColor="transparent"
                />
              </div>
            </div>
          </li>

          <li className=" flex justify-center lg:static text-white">
            <div
              className="container md:pl-16 md:pt-20 md:pr-16"
              style={{
                width: "800px",
                height: "428px",
                backgroundImage: `url(${barberImg.src})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            >
              <h3 className="">Site Vitrine</h3>
              <h2 className="">GC Barbershop</h2>
              <p className="">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repellendus alias fugiat reiciendis at hic magni velit minus
                eveniet ratione nesciunt?
              </p>
              <span className="">React</span>
              <span className="">Next JS</span>
              <span className="">TailWind Css</span>
              <span className="">Figma</span>
              <div>
                <SocialIcon
                  url="https://github.com/Valaex"
                  fgColor="#FFFFFF"
                  bgColor="transparent"
                />
                <SocialIcon
                  url="https://www.jeromeknops.com/"
                  fgColor="#FFFFFF"
                  bgColor="transparent"
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Portfolio;
