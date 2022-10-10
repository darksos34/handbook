import './App.css';
import NavComponent from "./components/nav/NavComponent";

import React from "react";
import Router from "./components/nav/Router";

export default function App() {
    return (
        <>
            <NavComponent/>
            <Router/>
        </>
    );
}
