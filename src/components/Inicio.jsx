import React from "react";
import Perfil from "../assets/perfil.webp";
import { useTypewriter, Cursor } from "react-simple-typewriter";

import InitailLinks from "../data/SocialMedia/links";

const Inicio = () => {
  const [text] = useTypewriter({
    words: [
      "Practicante de Desarrollo Web",
      "Estudiante de Ingeniería de Sistemas",
    ],
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 1000,
    loop: true,
  });

  return (
    <section id="home" className="w-full pt-20">
      <div className="w-full h-full mt-8 mb-0 flex flex-col gap-8">
        <div className="flex justify-between mx-auto">
          <div className="flex flex-col gap-8">
            <div className="lg:mr-10">
              <h1 className="text-3xl sm:text-5xl font-bold mb-3">Hola, soy</h1>
              <h2 className="text-4xl sm:text-6xl font-bold text-indigo-400">
                Erick Villalobos
              </h2>
              <h3 className="text-3xl sm:text-4xl font-bold mt-2">
                <span className="text-primary">{text}</span>
                <Cursor cursorStyle="|" cursorColor="#3A98B9" />
              </h3>

              <p className="text-lg sm:text-xl sm:leading-8  text-justify sm:text-left mt-5">
                Actualmente cursando el 9no ciclo en la{" "}
                <span className="font-bold text-indigo-400">
                  Universidad Nacional Mayor de San Marcos
                </span>
                , mi objetivo es convertirme en un desarrollador
                <span className="font-bold text-indigo-400"> FULL STACK. </span>
                Cuento con mayor experiencia realizando proyectos
                <span className="font-bold text-indigo-400"> FrontEnd</span>,
                sin embargo, también he trabajado con el
                <span className="font-bold text-indigo-400"> stack PERN </span>
                (Postgres, Express, React y Node).
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              {InitailLinks.map((link) => (
                <a
                  title="linkHeader"
                  rel="noreferrer"
                  className="inline-flex justify-center items-center px-4 gap-2 text-primary border-primary w-auto h-10 bg-transparent border-2 rounded-full no-underline transition-all duration-300 ease-linear hover:bg-primary font-bold hover:text-black shadow-lg hover:shadow-primary"
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  alt="Link del Header">
                  <img src={link.icon} className={link.className} alt="icon" />
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="Imagen justify-center items-center w-full hidden lg:flex">
            <img
              className="w-80 h-100 mt-10"
              style={{ border: "3px solid #454545", borderRadius: "70%" }}
              src={Perfil}
              alt="logo"
            />
          </div>
        </div>

        <div>
          <a
            title="linkPdf"
            href="/CV_VillalobosCasanatanErick.pdf"
            className="inline-block py-3 px-7 rounded-lg text-xl text-zinc-900 font-bold no-underline transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300 bg-primary hover:bg-slate-700hover:text-primary hover:shadow-primary"
            target="_blank"
            alt="btn_CV">
            Descargar CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Inicio;
