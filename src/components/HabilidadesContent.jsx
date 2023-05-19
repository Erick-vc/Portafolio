import React from "react";
import down from '../svg/down.svg'
import up from '../svg/up.svg'
import Skills from "../container/Skills";

const HabilidadesContent = ({ title, to, toggleMenu, state, menu }) => {
  return (
    <div
      className="bg-secundary md:bg-transparent px-5 py-4 md:p-0 w-full md:w-44 flex flex-wrap justify-between items-center z-auto"
      onClick={toggleMenu}>
      <button
        title="BtnFront"
        className={`md:w-44  text-yellow-300 md:text-white text-left tracking-widest md:tracking-normal text-base sm:text-xl md:text-base uppercase md:capitalize font-black md:border-l-4 md:border-gray-600 py-2 sm:px-2 md:p-3 
        ${
          state === to && "border-transparent md:border-primary md:bg-secundary"
        }
        `}
        type="button">
        {title}
      </button>
      <button
        title="BtnsmFront"
        className="flex md:hidden w-10 cursor-pointer h-10 items-center justify-center text-center transition ease-in-out delay-1000 "
        type="button">
        {menu ? (
          <img src={up} alt="up_svg" className="text-white w-3.5 h-4 " />
        ) : (
          <img src={down} alt="down_svg" className="text-yellow-200 w-5 h-5" />
        )}
      </button>
      <div
        className={` ${
          menu ? "h-full opacity-100" : "w-full opacity-0 h-0 overflow-hidden"
        } `}>
        <div className={`md:hidden sm:px-5 py-5 transition delay-1000`}>
          <Skills state={state} screen="phone" />
        </div>
      </div>
    </div>
  );
};

export default HabilidadesContent;
