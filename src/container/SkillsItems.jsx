import React from "react";

const SkillsItems = ({ skill }) => {
  return (
    <div
      className="w-16 sm:w-20 h-20 gap-2 flex flex-col items-center ">
        <img
          className="w-16 h-12 object-contain"
          src={skill.image}
          alt={skill.title}
        />
      <h2 className="font-black text-sm text-center">{skill.title}</h2>
    </div>
  );
};

export default SkillsItems;
