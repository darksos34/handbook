import React from 'react';
import {Link} from "react-router-dom";

const NavMenu = () => (

    <>
        <p>
            <Link to="/home">Home</Link>
        </p>
        <p>
            <Link to="/bestel">Bestel</Link>
        </p>
        <p>
            <Link to="/contact">Contact</Link>
        </p>
        <p>
            <Link to="/service">Service</Link>
        </p>
        <p>
            <Link to="/portfolio">portfolio</Link>
        </p>
        <p>
            <Link to="/login">Login</Link>
        </p>
    </>
)

export default NavMenu;