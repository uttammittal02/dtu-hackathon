import React from "react";
import categoryIncome from "../assets/categoryincome.png";
import categorySales from "../assets/categorysales.png";
import cityCategory from "../assets/citycategory.png";
import paymentGateway from "../assets/paymentgateway.png";
function Results() {
    return (
        <div>
            <img src={categoryIncome} className="analysis-img" alt="" />
            <img src={categorySales} className="analysis-img" alt="" />
            <img src={cityCategory} className="analysis-img" alt="" />
            <img src={paymentGateway} className="analysis-img" alt="" />
        </div>
    );
}

export default Results;
