import './App.css';
import NavComponent from "./components/nav/NavComponent";

import React from "react";
import Router from "./components/nav/Router";


const App = () => {

    return (
        <>
            <NavComponent/>
            <Router/>
        </>
    );
}
export default App;