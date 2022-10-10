import React, {useState} from 'react';
import './NavStyle.css';
import Logo from '../../assets/logo.png';

import {RiCloseLine, RiMenu3Line} from 'react-icons/ri';
import NavMenu from "./NavMenu";

const NavComponent = () =>  {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (

        <div className="container">
            <div className="links">
                <div className="links-logo">
                    <img src={Logo} alt="sss" srcSet=""></img>
                </div>
                <div className="links-wrapper">
                    <NavMenu/>
                </div>
                <div className="nav-button">
                    <button  type="button">Bestel mij</button>
                </div>
                <div className="nav-menu">
                    {toggleMenu ? (
                        <RiCloseLine
                            color="#3333"
                            size={27}
                            onClick={() => setToggleMenu(false)}
                        />
                    ) : (
                        <RiMenu3Line
                            color="#3333"
                            size={27}
                            onClick={() => setToggleMenu(true)}
                        />
                    )}
                    { toggleMenu &&
                        (
                            <div className="nav-menu-wrapper">
                                <div className="nav-menu-wrapper-links">
                                    <NavMenu/>
                                    <div className="nav-menu-wrapper-button">
                                        <button type="button">Bestel mij</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>


    );
}
export default NavComponent;
