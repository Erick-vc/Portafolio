import React, { useContext, useEffect, useState } from "react";
import Perfil from "../assets/perfil.webp";
import AppContext from "../context/AppContext";
// import links from "../data/HeaderLink/linkheader";
import initialState from "../data/links";
import hamburguer from '../svg/hamburguer.svg'


const Header = () => {

  const [stateLink] = useState(initialState);
  const {linkHeader} = stateLink;

  const { menu, setMenu, toggleMenu } = useContext(AppContext);
  const closeMenu = () => {
    setMenu(false);
  };



  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const elementId = entry.target.getAttribute("id");
          const menuLink = document.querySelector(
            `.menu a[href^="#${elementId}"]`
          );
          if (entry.isIntersecting) {
            menuLink?.classList.add("menu-link_selected");
          } else {
            menuLink?.classList.remove("menu-link_selected");
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    const menuLinks = document.querySelectorAll('.menu a[href^="#"]');
    menuLinks.forEach((menuLink) => {
      const atrribute = menuLink.getAttribute("href");
      const target = atrribute && document.querySelector(atrribute);
      target && observer.observe(target);
    });
  }, []);

  return (
    <header className="mx-auto fixed w-full py-4 top-0 rounded-b-lg z-50 bg-secundary">
      <div className=" flex flex-wrap justify-between items-center px-[5%]">
        <a title="Image" href="#home" className="photo" alt="photoImage">
          <img src={Perfil} alt="logo" />
        </a>

        <h1 className="Cabecera-h1 text-2xl text-white no-underline font-semibold cursor-default opacity-0 ">
          <a
            title="title"
            href="home"
            alt="titlePortafolio"
            className="Cabecera-a text-colorTitle uppercase text-xl md:text-2xl cursor-pointer hover:text-primary font-bold hover:scale-90 transition-all duration-300 ease-out block">
            Portafolio
          </a>
        </h1>

        <button
          title="btnHamburguer"
          className="flex md:hidden w-10 h-10 cursor-pointer items-center justify-center text-center"
          onClick={toggleMenu}
          type="button">
          <img src={hamburguer} alt="menu_svg" className="text-white w-8 h-10" />
        </button>

        <div className={`Cabecera-nav ${menu ? "isActive" : ""}`}>
          <ul className="menu active flex flex-col md:flex-row flex-nowrap justify-center items-center gap-8">
            {linkHeader.map((link) => (
              <li key={link.id} className="nav-item my-2 mx-0 lg:my-0 lg:mx-2">
                <a
                  title="linkHeader"
                  href={link.href}
                  onClick={closeMenu}
                  alt="Link del Header"
                  className="hover:text-yellow-400 cursor-pointer inline-block text-xl text-colorTitle no-underline font-bold hover:scale-90 transition-all duration-100 ease">
                  {link.txt}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
