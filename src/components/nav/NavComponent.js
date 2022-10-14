import React, {useState} from 'react';
import './NavStyle.css';
import Logo from '../../assets/logo.png';

import {RiCloseLine, RiMenu3Line} from 'react-icons/ri';
import NavMenu from "./NavMenu";
import Router from "./Router";
import {Link} from "react-router-dom";
import Login from "../pages/Login";

const NavComponent = () =>  {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div>
            <nav>
                <div className="container">
                    <div className="links">
                        <div className="links-logo">
                            <img src={Logo} alt="sss" srcSet=""></img>
                        </div>
                        <div className="links-wrapper">
                            <NavMenu/>
                        </div>
                        <div className="nav-button">
                            <Link to="login">
                            <button onClick={Login} type="button">
                                <p>
                                    Login
                                </p>
                            </button>
                            </Link>
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
                                                <button type="button">
                                                    <p>
                                                        <Link to="login">Login</Link>
                                                    </p>

                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>

                </div>
            </nav>
            <div>
                <Router/>
            </div>
            {/* <AuthVerify logOut={logOut}/> */}
        </div>
    );
}
export default NavComponent;
