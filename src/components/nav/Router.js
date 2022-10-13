import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Bestel from "../pages/Bestel";
import React from "react";
import Service from "../pages/Service";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import Login from "../pages/Login";

export default function Router(){
    return (

        <Routes>
            <Route path="home" element={<Home></Home>}/>
            <Route path="bestel" element={<Bestel></Bestel>}/>
            <Route path="service" element={<Service></Service>}/>
            <Route path="portfolio" element={<Portfolio></Portfolio>}/>
            <Route path="contact" element={<Contact></Contact>}/>
            <Route path="login" element={<Login></Login>}/>
        </Routes>

    )
}
