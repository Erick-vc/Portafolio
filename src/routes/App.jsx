import React from "react";
import Home from "../layout/Home";
import Pdf from "../container/Pdf";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";
import NotFound from "../components/NotFound";

const App = () => {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="/" element={<NotFound />} /> */}
          <Route path="/CV_VillalobosCasanatanErick.pdf" element={<Pdf />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
