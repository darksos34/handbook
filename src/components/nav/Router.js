import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Bestel from "../pages/Bestel";
import React from "react";

export default function (){
    return (
        <Routes>
            <Route path="home" element={<Home></Home>}/>
            <Route path="bestel" element={<Bestel></Bestel>}/>
        </Routes>
    )
}
