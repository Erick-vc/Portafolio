import { useState } from "react";

const useInitialState = () => {

  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };
  return {
    menu,
    setMenu,
    toggleMenu,
  }

};

export default useInitialState;