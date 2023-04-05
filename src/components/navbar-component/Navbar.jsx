import React from "react";
import "./Navbar.css";
import logoCircle from "../../images/logo-img.png";
import { nav } from "../../data/Data";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useState } from "react";

const links = document.querySelector(".links");
const btn = document.querySelector(".menu");

const Navbar = () => {
    const [navState, setNavState] = useState(false);

    return (
        <div className="navbar">
            <div className="logo">
                <span>Foodies</span>
                <img className="logo-img" src={logoCircle} />
            </div>
            <div className={navState ? "links no-slide" : "links slide"}>
                <ul className="nav-links">
                    {nav.map((link, index) => (
                        <li key={index}>
                            <a href="#">{link.text}</a>
                        </li>
                    ))}
                    <a href="#" className="download-sm">
                        Download App
                    </a>
                </ul>
                <a href="#" className="download">
                    Download App
                </a>
            </div>
            <div className="menu" onClick={() => setNavState(!navState)}>
                {!navState ? (
                    <IconContext.Provider
                        value={{
                            style: {
                                fontSize: "30px",
                                color: "#2f2f2f",
                            },
                        }}
                    >
                        <div>
                            <GiHamburgerMenu />
                        </div>
                    </IconContext.Provider>
                ) : (
                    <IconContext.Provider
                        value={{
                            style: {
                                fontSize: "30px",
                                color: "#2f2f2f",
                            },
                        }}
                    >
                        <div>
                            <FaTimes />
                        </div>
                    </IconContext.Provider>
                )}
            </div>
        </div>
    );
};

export default Navbar;
