import React from "react";
import { RiFacebookFill } from "react-icons/ri";
import { MdWhatsapp } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IconContext } from "react-icons";
import "./footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-links">
                <div className="social-media">
                    <h3>Social Media</h3>
                    <div className="links">
                        <span className="link">
                            <IconContext.Provider
                                value={{
                                    style: {
                                        fontSize: "30px",
                                        color: "#2f2f2f",
                                    },
                                }}
                            >
                                <div>
                                    <RiFacebookFill />
                                </div>
                            </IconContext.Provider>
                        </span>
                        <span className="link">
                            <IconContext.Provider
                                value={{
                                    style: {
                                        fontSize: "30px",
                                        color: "#2f2f2f",
                                    },
                                }}
                            >
                                <div>
                                    <MdWhatsapp />
                                </div>
                            </IconContext.Provider>
                        </span>
                        <span className="link">
                            <IconContext.Provider
                                value={{
                                    style: {
                                        fontSize: "30px",
                                        color: "#2f2f2f",
                                    },
                                }}
                            >
                                <div>
                                    <FaTwitter />
                                </div>
                            </IconContext.Provider>
                        </span>
                        <span className="link">
                            <IconContext.Provider
                                value={{
                                    style: {
                                        fontSize: "30px",
                                        color: "#2f2f2f",
                                    },
                                }}
                            >
                                <div>
                                    <FaInstagram />
                                </div>
                            </IconContext.Provider>
                        </span>
                    </div>
                </div>
                <div className="quick-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li>
                            <a href="#">About us</a>{" "}
                        </li>
                        <li>
                            <a href="#">Privacy policy </a>{" "}
                        </li>
                        <li>
                            <a href="#">Terms and conditions </a>{" "}
                        </li>
                    </ul>
                </div>
                <div className="get-app">
                    <h3>Get App</h3>
                    <ul>
                        <li>
                            <a href="#">Download Android</a>
                        </li>
                        <li>
                            <a href="#">Download iOS</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="copyright">
                <p>(c) foodies eatery 2022</p>
            </div>
        </div>
    );
};

export default Footer;
