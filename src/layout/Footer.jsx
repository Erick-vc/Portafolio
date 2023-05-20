import React, {useState} from "react";
import subir from '../svg/subir.svg'

const Footer = () => {


  const [position, setPosition] = useState(false);

  let ubicacionPrincipal = window.pageYOffset; //0

  window.addEventListener("scroll", function () {
    let desplazamientoActual = window.pageYOffset; //100
    if (ubicacionPrincipal >= desplazamientoActual) {
      // 0 > 100
      // console.log('subiendo')
      setPosition(false);
    } else {
      // console.log('bajando')
      // console.log(menu);
      setPosition(true);
    }
    // ubicacionPrincipal = desplazamientoActual; //100
  });


  const tam = window.screen.width;

  return (
    <footer className="mx-auto max-w-screen-xl px-10 mb-5 flex items-center justify-center h-24">
      <div className="flex flex-col md:flex-row items-center gap-0 md:gap-4">
        <span className="text-sm md:text-xl text-colorTitle font-bold">Made by Erick Villalobos!</span>
        <span className="text-sm md:text-xl text-colorTitle font-bold">I love programming ♥</span>
      </div>
      <a
        title="Icon"
        href="#home"
        className="bottom-8 right-4 lg:bottom-8 lg:right-16 fixed "
        alt="icon-subir"
        >
        {
            position && ( <img src={subir} alt="subir_svg" className={`w-16 h-14 ${tam  < 280  && ("hidden")}`} />)
        }
      </a>
    </footer>
  );
};

export default Footer;
