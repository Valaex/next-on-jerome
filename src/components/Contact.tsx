import React, { ChangeEvent, FormEvent, useState } from "react";
import emailjs from "emailjs-com";
import { FaLinkedinIn } from "react-icons/fa";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { Montserrat } from "next/font/google";
import Reveal from "./MotionReveal/Reveal";

type ContactProps = {};
const montserrat = Montserrat({
  subsets: ["latin"],
});

const Contact: React.FC<ContactProps> = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [alertMessage, setAlertMessage] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      setAlertMessage("Veuillez remplir tous les champs.");
      return;
    }

    emailjs
      .send(
        "service_2k7kx6o", // Remplacez par l'ID de votre service EmailJS
        "template_rc1kdrm", // Remplacez par l'ID de votre modèle EmailJS
        {
          name,
          email,
          message,
        },
        "JVCPjxJh3kLD7ipBc" // Remplacez par votre ID utilisateur EmailJS
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setAlertMessage("Message envoyé avec succès !");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.error("FAILED...", error);
          setAlertMessage("Votre message n'a pas été envoyé !");
        }
      );
  };

  const handleChange = (
    setter: React.Dispatch<React.SetStateAction<string>>
  ): ((event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void) => {
    return (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setter(event.target.value);
    };
  };

  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16"
    >
      <div className="contact-container pt-10">
        <div className="text-center">
          <Reveal>
            <h3 className="font-normal text-base tracking-tighter">
              Travaillons ensemble
            </h3>
          </Reveal>
          <Reveal>
            <h2 className="font-bold text-3xl">Contactez-moi</h2>
          </Reveal>
        </div>

        <div className="contact-child flex flex-col md:flex-row items-center md:items-start   justify-center md:justify-ev pt-10">
          <div className="contact-left text-white flex flex-col items-center justify-center md:mr-20 ">
            <Reveal>
              <div className="container-mail  bg-[#040320] w-[280px] p-4 rounded-2xl flex flex-col items-center justify-center text-center mb-4">
                <a href="mailto:contact@jeromeknops.com">
                  <Reveal>
                    <EnvelopeIcon className="w-5 inline-block" />
                  </Reveal>
                  <Reveal>
                    <h3 className="mb-1 font-bold text-xl">Email</h3>
                  </Reveal>
                  <Reveal>
                    <p className="mb-1">contact@jeromeknops.com</p>
                  </Reveal>
                  <Reveal>
                    <p>Envoyer un message</p>
                  </Reveal>
                </a>
              </div>
            </Reveal>

            <Reveal>
              <div className="container-phone  bg-[#040320] w-[280px] p-4 rounded-2xl flex flex-col items-center justify-center text-center mb-4">
                <a href="tel:+32486672822">
                  <Reveal>
                    <PhoneIcon className="w-5 inline-block" />
                  </Reveal>
                  <Reveal>
                    <h3 className="mb-1 font-bold text-xl">Téléphone</h3>
                  </Reveal>
                  <Reveal>
                    <p className="mb-1">+32 486 67 28 22</p>
                  </Reveal>
                  <Reveal>
                    <p>Appeler</p>
                  </Reveal>
                </a>
              </div>
            </Reveal>

            <Reveal>
              <div className="container-linkedin bg-[#040320] w-[280px] md:max-w-[280px] p-4 rounded-2xl flex flex-col items-center justify-center text-center mb-4">
                <a
                  href="https://www.linkedin.com/in/jeromeknops/"
                  className="no-underline text-current"
                >
                  <Reveal>
                    <FaLinkedinIn className=" mb-1 inline-block" />
                  </Reveal>
                  <Reveal>
                    <h3 className="mb-1 font-bold text-xl">Linkedin</h3>
                  </Reveal>
                  <Reveal>
                    <p className="mb-1">Jérôme Knops</p>
                  </Reveal>
                  <Reveal>
                    <p>Envoyer un message</p>
                  </Reveal>
                </a>
              </div>
            </Reveal>
          </div>

          <div className="container-right w-full  pt-10 md:pt-0 mx-14 md:mx-0 ">
            {alertMessage && (
              <div className="alert-message text-center  text-xl font-medium ">
                <p>{alertMessage}</p>
              </div>
            )}
            <form
              className="flex flex-col space-y-4 md:space-y-12 w-full  text-[#040320] mb-10 mt-1 "
              onSubmit={handleSubmit}
            >
              <Reveal>
                <input
                  value={name}
                  onChange={handleChange(setName)}
                  placeholder="Nom Prénom"
                  className="outline-none bg-transparent rounded-2xl border-2 px-6 py-4  border-[#040320] text-[#040320] placeholder-[#040320] transition-all focus:border-[#00D1FF]/40  hover:border-[#00D1FF]/40 w-full font-normal md:text-2xl"
                  type="text"
                />
              </Reveal>

              <Reveal>
                <input
                  value={email}
                  onChange={handleChange(setEmail)}
                  placeholder="Email"
                  className="outline-none bg-transparent rounded-2xl border-2 px-6 py-4 border-[#040320] text-[#040320] placeholder-[#040320] transition-all focus:border-[#00D1FF]/40  hover:border-[#00D1FF]/40 w-full font-normal md:text-2xl"
                  type="text"
                />
              </Reveal>

              <Reveal>
                <textarea
                  value={message}
                  onChange={handleChange(setMessage)}
                  placeholder="Message....."
                  className="outline-none bg-transparent rounded-2xl border-2 px-6 py-4 border-[#040320] text-[#040320] placeholder-[#040320] transition-all focus:border-[#00D1FF]/40  hover:border-[#00D1FF]/40 w-full font-normal md:text-2xl"
                ></textarea>
              </Reveal>

              <Reveal>
                <button
                  className={`${montserrat.className} cursor-pointer hover:bg-slate-200 hover:text-[#040320] hover:transition-all hover:duration-300 duration-300 hover:shadow-xl hover:shadow-[#040320] flex flex-row justify-center items-center p-4 gap-2 w-48 h-12 left-24  bg-[#040320]  rounded-full text-white font-bold text-lg  tracking-widest`}
                  type="submit"
                >
                  Envoyer
                </button>
              </Reveal>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
