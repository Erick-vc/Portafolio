import React, { useState } from "react";
import initialState from "../data/skillsProjects";


const Proyectos = () => {
  const [stateFront] = useState(initialState);

  const { projects } = stateFront;


  return (
    <section id="proyectos" className="pt-16">
      <h3 className="font-bold text-colorTitle text-3xl md:text-4xl py-5 border-b border-gray-500 pb-3 mb-8">
        Proyectos
      </h3>

      <div
        className="md:columns-2 lg:columns-3 xl:columns-4 gap-8 gap-y-6"
        // className="grid grid-cols-4 gap-8"
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-secundary w-68 border-2 mb-6 break-inside-avoid transition-all ease-in-out duration-200 hover:scale-105 hover:rotate-[.5deg] rounded-3xl px-5 py-4 flex-wrap justify-between items-center">
            <div className="justify-center lg:gap-4">
              <a
                title="linkWeb"
                href={project.linkp}
                target="_blank"
                rel="noreferrer"
                alt="linkWeb">
                <img
                  className="hidden lg:flex w-full h-44 object-fill rounded-2xl  cursor-pointer"
                  src={project.image}
                  alt="imagProget"
                />
              </a>

              <div className="flex flex-col gap-3 pt-4">
                <div className="font-bold text-primary text-2xl border-b-2 pb-2">
                  {project.title}
                </div>
                <div className="w-full text-md text-left leading-6 flex flex-col gap-1.5">
                  <p className="text-left text-lime-500 text-sm font-bold leading-6">
                    {project.info}
                  </p>
                  <p>{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-4 items-center">
                  {project.habilidades.map((skill) => (
                    <div key={skill.id}>
                      <img
                        className="w-7 h-7 object-contain"
                        src={skill.subSkill}
                        alt="ImageSkill"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-x-5 gap-y-2">
                  {project.sitio.map((hola) => (
                    <div
                      key={hola.id}
                      className="flex items-center justify-center gap-x-3 cursor-pointer">
                      <img
                        src={hola.icon}
                        alt="icon_svg"
                        className="w-7 h-7 bg-white border-[1px] rounded-full"
                      />
                      <a
                        title="linkWeb"
                        href={hola.link}
                        rel="noreferrer"
                        className="inline-flex justify-center items-center gap-2
                            text-primary border-primary w-auto h-8 bg-transparent
                            transition-all 
                            duration-300 ease-linear font-bold
                            hover:text-yellow-500"
                        target="_blank"
                        alt="Link de sitio web">
                        {hola.txt}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Proyectos;
