import React, { useState } from "react";
import Skills from "../container/Skills";
import HabilidadesContent from "./HabilidadesContent";

const Habilidades = () => {
  const [stateSkills, setStateSkills] = useState("front");
  const [menuFront, setMenuFront] = useState(true);
  const [menuBack, setMenuBack] = useState(false);
  const [menuTools, setMenuTools] = useState(false);

  const toggleMenuFront = () => {
    setMenuFront(!menuFront);
    setMenuBack(false);
    setMenuTools(false);
    setStateSkills("front");
  };

  const toggleMenuBack = () => {
    setMenuBack(!menuBack);
    setMenuFront(false);
    setMenuTools(false);
    setStateSkills("back");
  };

  const toggleMenuTools = () => {
    setMenuTools(!menuTools);
    setMenuFront(false);
    setMenuBack(false);
    setStateSkills("tools");
  };

  return (
      <section id="habilidades" className="pt-16">
        <h1 className="text-colorTitle font-bold text-3xl md:text-4xl py-5 border-b border-gray-500 pb-3 mb-8">
          Habilidades
        </h1>

        <div className="flex flex-col md:flex-row justify-between gap-14">
          <div className="h-full flex flex-col gap-3 md:gap-0">
            <HabilidadesContent
              title="FrontEnd"
              to="front"
              toggleMenu={toggleMenuFront}
              state={stateSkills}
              menu={menuFront}
            />
            <HabilidadesContent
              title="Backend"
              to="back"
              toggleMenu={toggleMenuBack}
              state={stateSkills}
              menu={menuBack}
            />
            <HabilidadesContent
              title="Tools"
              to="tools"
              toggleMenu={toggleMenuTools}
              state={stateSkills}
              menu={menuTools}
            />
          </div>
          <div className="w-full md:w-3/4">
            <div className={`hidden bg-secundary md:flex px-10 py-5 gap-4`}>
              <Skills state={stateSkills} screen="desk" />
            </div>
          </div>
        </div>
      </section>
  );
};

export default Habilidades;
