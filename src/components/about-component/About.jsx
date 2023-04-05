import React from "react";
import "./About.css";
import jollof from "../../images/jollof.png";

const About = () => {
    return (
        <div className="about">
            <div className="about-content">
                <div className="about-left">
                    <h2 className="about-head">
                        People that feed well love our recipe
                    </h2>
                    <p className="about-comment">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nesciunt temporibus recusandae sunt totam mollitia
                        soluta at maxime tempore libero sapiente pariatur
                        aperiam excepturi, dolorum obcaecati aliquid esse
                        accusantium aliquam, cum voluptate cumque. Maiores
                        mollitia, harum sint necessitatibus expedita repellendus
                        doloribus!
                    </p>
                </div>
                <div className="about-image">
                    <img src={jollof} alt="jollof image" className="image" />
                </div>
            </div>
        </div>
    );
};

export default About;
