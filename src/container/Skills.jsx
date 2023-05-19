import React, { useState } from "react";
import initialStateFront from "../data/Habilidades/skills";
import SkillContent from "./SkillContent";

const Skills = ({ state, screen }) => {
  
  const [stateFront] = useState(initialStateFront);
  const { habilidadesFront, descriptionFront, habilidadesBack, descriptionBack, tools, descriptionTools } = stateFront;

  return (
    <>
      {state === "front" && (
        <SkillContent
          habilidades={habilidadesFront}
          description={descriptionFront}
          screen={screen}
        />
      )}
      {state === "back" && (
        <SkillContent
          habilidades={habilidadesBack}
          description={descriptionBack}
          screen={screen}
        />
      )}
      {state === "tools" && (
        <SkillContent
          habilidades={tools}
          description={descriptionTools}
          screen={screen}
        />
      )}
    </>
  );
};

export default Skills;
