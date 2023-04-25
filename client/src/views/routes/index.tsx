import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Error404 from "../pages/errors/Error404";
import Logement from "../pages/logement/Logement";


const AppRoutes: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/logements/:id" element={<Logement />} />
            <Route path="*" element={<Error404 />} />
        </Routes>
    );
};

export default AppRoutes;