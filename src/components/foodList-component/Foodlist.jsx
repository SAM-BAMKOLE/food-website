import React from "react";
import "./Foodlist.css";
// import { food } from "../../data/Data";
import { AiFillPlusCircle } from "react-icons/ai";
import { IconContext } from "react-icons";
import image1 from "../../images/chickenrice1.jpg";
import image2 from "../../images/chickenrice2.jpg";
import image3 from "../../images/chickenrice3.jpg";

const Foodlist = () => {
    return (
        <div className="foodlist">
            {/* {food.map((list, key) => (
                <div className="list" key={key}>
                    <div className="image-box">
                        <img src={image1} alt="" className="image" />
                    </div>
                    <div className="list-content">
                        <h3 className="h3">{list.name}</h3>
                        <p className="description">{list.description}</p>
                        <div className="price-box">
                            <span className="price">N{list.price}</span>
                            <button className="add-price">
                                <IconContext.Provider
                                    value={{
                                        style: {
                                            fontSize: "40px",
                                            color: "#DF2519",
                                        },
                                    }}
                                >
                                    <div>
                                        <AiFillPlusCircle />
                                    </div>
                                </IconContext.Provider>
                            </button>
                        </div>
                    </div>
                </div>
            ))} */}
            <div className="list">
                <div className="image-box">
                    <img src={image1} alt="" className="image" />
                </div>
                <div className="list-content">
                    <h3 className="h3">White Rice</h3>
                    <p className="description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Incidunt, hic!
                    </p>
                    <div className="price-box">
                        <span className="price">N1,500</span>
                        <button className="add-price">
                            <IconContext.Provider
                                value={{
                                    style: {
                                        fontSize: "40px",
                                        color: "#DF2519",
                                    },
                                }}
                            >
                                <div>
                                    <AiFillPlusCircle />
                                </div>
                            </IconContext.Provider>
                        </button>
                    </div>
                </div>
            </div>
            <div className="list">
                <div className="image-box">
                    <img src={image2} alt="" className="image" />
                </div>
                <div className="list-content">
                    <h3 className="h3">Nigerian Jollof Rice</h3>
                    <p className="description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Incidunt, hic!
                    </p>
                    <div className="price-box">
                        <span className="price">N2,500</span>
                        <button className="add-price">
                            <IconContext.Provider
                                value={{
                                    style: {
                                        fontSize: "40px",
                                        color: "#DF2519",
                                    },
                                }}
                            >
                                <div>
                                    <AiFillPlusCircle />
                                </div>
                            </IconContext.Provider>
                        </button>
                    </div>
                </div>
            </div>
            <div className="list">
                <div className="image-box">
                    <img src={image3} alt="" className="image" />
                </div>
                <div className="list-content">
                    <h3 className="h3">Fried Rice</h3>
                    <p className="description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Incidunt, hic!
                    </p>
                    <div className="price-box">
                        <span className="price">N4,500</span>
                        <button className="add-price">
                            <IconContext.Provider
                                value={{
                                    style: {
                                        fontSize: "40px",
                                        color: "#DF2519",
                                    },
                                }}
                            >
                                <div>
                                    <AiFillPlusCircle />
                                </div>
                            </IconContext.Provider>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Foodlist;
