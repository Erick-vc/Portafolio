import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import useForm from "../hooks/useForm";
import github from "../svg/socialmedia/github.svg";
import linkedin from "../svg/socialmedia/linkedin.svg";

const Contacto = () => {
  const refForm = useRef();

  const [formValues, handleInputChange, reset] = useForm({
    name: "",
    user_name: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceId = "service_8x4r9o6";
    const templateId = "template_q9y5lhk";
    const apikey = "reCUeNCLlGsufuEgT";
    emailjs
      .sendForm(serviceId, templateId, refForm.current, apikey)
      .then((result) => console.log(result.text))
      .catch((error) => console.error(error.text));
    reset();
  };

  return (
    <section id="contacto" className="pt-16 md:pt-16">
      <h3 className="font-bold text-colorTitle text-3xl md:text-4xl py-5 border-b border-gray-500 pb-3 mb-8">
        Contacto
      </h3>

      <div className="gap-5 max-w-7xl my-5 flex justify-between flex-col md:flex-row">
        <div className="w-full flex flex-col gap-8 lg:gap-20">
          <div className="flex text-center flex-col gap-4">
            <span className="text-lg text-justify md:text-left leading-8">
              Gracias por llegar hasta aquí. Espero que este portafolio
              realizado en Reat con mucho esfuerzo y cariño haya sido de tu
              agrado.
            </span>
            <span className="text-lg text-justify md:text-left leading-8">
              Contactate conmigo a través de mis redes sociales, correo
              electrónico o te dejo un formulario para que lo rellenes. Hasta
              pronto!
            </span>
            <span className="text-amber-500 md:mt-6 overflow-ellipsis whitespace-nowrap overflow-hidden font-bold text-xl text-left">
              villalobose143@gmail.com
            </span>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              title="iconLinkedIn"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 text-secondary-color hover:opacity-50  hover:transition-colors hover:duration-500 hover:ease-linear"
              href="https://www.linkedin.com/in/erick-villalobos-989a5023b"
              target="_blank"
              alt="icon-LinkedIn">
              <img
                src={linkedin}
                className="w-7 h-7"
                alt="icon"
              />
              <span className="text-primary">LinkedIn</span>
            </a>

            <a
              title="iconGithub"
              className="flex items-center justify-center gap-2 text-secondary-color hover:opacity-50  hover:transition-colors hover:duration-500 hover:ease-linear"
              href="https://github.com/Erick-vc"
              target="_blank"
              rel="noreferrer"
              alt="icon-github">
              <img
                src={github}
                className="w-7 h-7 bg-white border-[1px] rounded-full"
                alt="icon"
              />
              <span className="text-primary">Github</span>
            </a>
          </div>
        </div>

        <div className="md:w-[1px] bg-gray-300 rounded-xl"></div>

        <form
          ref={refForm}
          action=""
          className="w-full flex flex-col items-center gap-4"
          onSubmit={handleSubmit}>
          <div className="w-full flex flex-col gap-4">
            <h1 className="text-center text-2xl font-bold text-colorTitle">
              ¡Mándame un correo!
            </h1>
            <label className="text-xl">Nombre</label>
            <input
              name="name"
              type="text"
              value={formValues.name}
              onChange={handleInputChange}
              required
              className="w-full h-12 outline-none pl-3 bg-colorInput"
              placeholder="Ej: Edwin Convocatoria"
            />
          </div>
          <div className="w-full flex flex-col gap-4">
            <label className="text-xl">Correo</label>
            <input
              name="user_name"
              value={formValues.user_name}
              type="email"
              onChange={handleInputChange}
              required
              className="w-full h-12 outline-none pl-3 bg-colorInput"
              placeholder="Ej: Convocatoria@gmail.com"
            />
          </div>
          <div className="w-full flex flex-col gap-4">
            <label className="text-xl">Mensaje</label>
            <textarea
              name="message"
              onChange={handleInputChange}
              value={formValues.message}
              className="w-full bg-colorInput p-3 resize-none h-36 outline-none dark:border-[#1D1F21] focus:outline-none dark:text-white"
              placeholder="Mensaje..."
            />
          </div>
          <button
            title="btnEnviar"
            className="bg-white w-full hover:bg-gray-100 text-gray-800 font-semibold py-3 mt-3 px-4 borderborder-gray-400 
            rounded shadow"
            type="submit">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacto;
