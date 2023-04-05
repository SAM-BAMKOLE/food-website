import React from "react";
import Headings from "../headings-component/headings";
import "./features.css";
import { features } from "../../data/Data";

const Features = () => {
    return (
        <div className="features">
            <Headings heading="Our Features" />
            <div className="features-list">
                {features.map((feature, key) => (
                    <div className="feature" key={key}>
                        <div className="icon">
                            <div className="circle"></div>
                            <div className="line"></div>
                        </div>
                        <h3>{feature.heading}</h3>
                        <div className="content">
                            <p>{feature.comment}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Features;
