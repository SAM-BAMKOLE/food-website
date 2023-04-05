import React from "react";
import { Button } from "../button-component/button";
import "./locations.css";

const Locations = () => {
    return (
        <div className="locations">
            <h2 className="locations-head-sm">Our Locations in Lagos.</h2>
            <div className="locations-image"></div>
            <div className="locations-text">
                <div className="text-content">
                    <h2 className="locations-head">Our Locations in Lagos.</h2>
                    <div className="locations-container">
                        <p className="location">
                            No 29 Amiel Bridge, <br />
                            Kingstone estate <br />
                            Lagos state, Nigeria.
                        </p>
                        <p className="location">
                            No 13 Blancho, <br />
                            Evelyn Hall lane <br />
                            Lagos state, Nigeria.
                        </p>
                    </div>
                    <Button text="Check Locations" />
                </div>
            </div>
        </div>
    );
};

export default Locations;
