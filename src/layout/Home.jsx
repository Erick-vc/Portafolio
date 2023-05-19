import Contacto from "../components/Contacto";
import Inicio from "../components/Inicio";
import Proyectos from "../components/Proyectos";
import Habilidades from "../components/Habilidades";

import AppContext from "../context/AppContext";
import { useContext } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
  const { menu } = useContext(AppContext);

  return (
    <>
      <Header />
        <main className={`mx-auto max-w-screen-xl px-10 ${ menu && "isActive blur-md md:blur-0"}`}>
          <Inicio />
          <Habilidades />
          <Proyectos />
          <Contacto />
        </main>
      <Footer />
    </>
  );
};

export default Home;
