import React from "react";
import categoryIncome from "../assets/categoryincome.png";
import categorySales from "../assets/categorysales.png";
import cityCategory from "../assets/citycategory.png";
import paymentGateway from "../assets/paymentgateway.png";
import categoryNet from '../assets/categorynet.png';
import ratingPrice from '../assets/ratingprice.png';
import g1 from '../assets/g1.png';
import g2 from '../assets/g2.png';
import g3 from '../assets/g3.png';
import './css/Results.css'

const graphs = [
    categoryIncome,
    categorySales,
    cityCategory,
    paymentGateway,
    categoryNet,
    ratingPrice,
    g1,
    g2,
    g3
]

function Results() {

    return (
        <div className="result">
            {
                graphs.map((graph,i)=>{
                    return <img src={graph} className={i<6 ? "analysis-img" : "smol-img"} alt="" />
                })
            }
        </div>
    );
}

export default Results;
