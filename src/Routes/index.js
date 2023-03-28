import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FindGymPage from "../Compoents/FindGymPage";
import GymPage from "../Compoents/GymPage";
import LandingPage from "../Compoents/LandingPage";
const NavRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<LandingPage/>} />
        <Route path="/findGymPage/:lati/:long" element={<FindGymPage/>} />
        <Route path="/gympage/:user_id" element={<GymPage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default NavRoutes;