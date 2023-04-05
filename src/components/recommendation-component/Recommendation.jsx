import React from "react";
import "./recommendation.css";
import customer from "../../images/beautiful-woman.png";

const Recommendation = () => {
    return (
        <div className="recommendation">
            <div className="recommendation-text">
                <p className="span">Satisfied customer review</p>
                <h2 className="recommendation-head">
                    Look what they recommended for you
                </h2>
                <div className="comment">
                    <div className="customer-image">
                        <img src={customer} />
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Ut atque quaerat quibusdam, voluptates quia,
                        maxime delectus ad explicabo neque magnam est at.
                        Eligendi blanditiis natus animi similique perferendis
                        unde, reprehenderit illum quisquam, optio labore non ea
                        veritatis numquam minima nulla perspiciatis dicta beatae
                        accusamus qui eum obcaecati. Dolor aliquid porro minima,
                        beatae quia omnis saepe!
                    </p>
                </div>
            </div>
            <div className="recommendation-image"></div>
        </div>
    );
};

export default Recommendation;
