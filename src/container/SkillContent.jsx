import React from "react";
import SkillsItems from "./SkillsItems";

const SkillContent = ({ habilidades, description, screen }) => {
  return (
    <>
      {description.map((description) => (
        <div className="flex flex-col gap-4" key={description.id}>

          {screen === "phone" ? (
            <>
              <span className="leading-7 text-lg text-justify">
                {description.description}
              </span>
              <div className="flex flex-wrap gap-4 sm:gap-y-3 items-center sm:gap-3 md:gap-5">
                {habilidades.map((skill) => (
                  <SkillsItems key={skill.id} skill={skill} />
                ))}
              </div>
            </>
          ) : (
            <>
              <h1 className="text-yellow-400 font-black tracking-widest text-xl">
                {description.title}
              </h1>
              <span className="leading-8">{description.description}</span>
              <div className="flex flex-wrap gap-4">
                {habilidades.map((skill) => (
                  <SkillsItems key={skill.id} skill={skill} />
                ))}
              </div>
            </>
          )}
        </div>
      ))}
    </>
  );
};

export default SkillContent;
