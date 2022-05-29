import React from "react";
import categoryIncome from "../assets/categoryincome.png";
import categorySales from "../assets/categorysales.png";
import cityCategory from "../assets/citycategory.png";
import paymentGateway from "../assets/paymentgateway.png";
import categoryNet from "../assets/categorynet.png";
import ratingPrice from "../assets/ratingprice.png";
import g1 from "../assets/g1.png";
import g2 from "../assets/g2.png";
import g3 from "../assets/g3.png";
import "./css/Results.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Results() {
    return (
        <div className="result">
            <h1>Graphical Analysis</h1>
            <Carousel autoPlay infiniteLoop  interval={4000}>
                <div className="carousal-item">
                    <img src={cityCategory} alt="" />
                </div>
                <div className="carousal-item">
                    <img src={paymentGateway} alt="" />
                </div>

                <div className="carousal-item">
                    <img src={ratingPrice} alt="" />
                    <p>
                        As the bar graph on the right signifies, lower the sale
                        price, higher is the rating. This might infer mostly the
                        products with higher selling price doesn't fit well as
                        value for money by the consumers. Also, the number of
                        buyers of products with the higher price decreases
                        drastically.
                    </p>
                </div>
            </Carousel>

            <Carousel autoPlay infiniteLoop interval={4000}>
                <div className="carousal-item">
                    <img src={categoryIncome} alt="" />
                </div>
                <div className="carousal-item">
                    <img src={categoryNet} alt="" />
                </div>
                <div className="carousal-item">
                    <img src={categorySales} alt="" />
                </div>
            </Carousel>
<div className="desc-carousal">

            <p className="">
                Although, the sales of fashion accessories is the maximum of all
                other product segments, it yields least gross income. So, gross
                margin percentage could be increased in this sector.
                <br />
                The net gross income from the Health and Beauty Sector is least,
                though its average gross income is high....So, the supermarket
                should focus on better advertisement and should try to improve
                the sales of this sector as it could yield good profit.
                <br />
                Electronic and Fashion sectors are yielding minimum gross income
                whereas Food and Sports and Travel Sector are showing marvelous
                gross incomes.
            </p>
</div>

            <div>
                <img src={g1} alt="" />
            </div>
            <div>
                <img src={g2} alt="" />
            </div>
            <div>
                <img src={g3} alt="" />
            </div>
        </div>
<div>
           <p>
                Females custommers are most frequent on Fashion accesoires and Sports & travel.
                Males customers are most frequent on Health and beauty.        
            </p>         
</div>
    );
}

export default Results;
