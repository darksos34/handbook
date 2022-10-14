import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Bestel from "../pages/Bestel";
import React from "react";
import Service from "../pages/Service";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import ModeratorBoard from "../common/ModeratorBoard";
import AdminBoard from "../common/AdminBoard";
import UserBoard from "../common/UserBoard";
import Register from "../pages/Register";


export default function Router(){
    return (

        <Routes>
            <Route exact path="home" element={<Home></Home>}/>
            <Route exact path="bestel" element={<Bestel></Bestel>}/>
            <Route exact path="service" element={<Service></Service>}/>
            <Route exact path="portfolio" element={<Portfolio></Portfolio>}/>
            <Route exact path="contact" element={<Contact></Contact>}/>
            <Route exact path="login" element={<Login></Login>}/>
            <Route exact path="register" element={<Register></Register>}/>
            <Route path="/user" element={<UserBoard></UserBoard>}/>
            <Route path="/mod" element={<ModeratorBoard></ModeratorBoard>}/>
            <Route path="/admin" element={<AdminBoard></AdminBoard>}/>
        </Routes>

    )
}
