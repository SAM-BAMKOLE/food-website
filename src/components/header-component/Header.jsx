import React from "react";
import "./Header.css";
import { Button } from "../button-component/button";
import avatar1 from "../../images/Avatar-1.png";
import avatar2 from "../../images/Avatar-2.png";
import avatar3 from "../../images/Avatar-3.png";

const Header = () => {
    return (
        <div className="header">
            <div className="hero-text">
                <h1>
                    Authentic
                    <br />
                    Food Dishes
                </h1>
                <p>
                    We delivered healthy food, we focus mainly on giving you a
                    completely different taste of rice, the best taste you will
                    never forget
                </p>
                <Button text="Place Order" />

                <div className="avatars-section">
                    <div className="avatar-collection">
                        <div className="avatar">
                            <img src={avatar1} alt="avatar" />
                        </div>
                        <div className="avatar">
                            <img src={avatar2} alt="avatar" />
                        </div>
                        <div className="avatar">
                            <img src={avatar3} alt="avatar" />
                        </div>
                    </div>
                    <div className="v-line"></div>
                    <div className="happy-customers">
                        <span className="customer">Happy Customers</span>
                        <span className="amount">3.5k</span>
                    </div>
                </div>
            </div>
            <div className="hero-image">
                <h1>
                    Authentic
                    <br />
                    Food Dishes
                </h1>
            </div>
        </div>
    );
};

export default Header;
