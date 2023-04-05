import React from "react";
import Foodlist from "../foodList-component/Foodlist";
import Headings from "../headings-component/headings";
import "./Order.css";

const Order = () => {
    return (
        <div className="place-order">
            <Headings heading="Make Your Order" />
            <Foodlist />
        </div>
    );
};

export default Order;
