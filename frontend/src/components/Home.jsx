import { Button } from "@mui/material";
import React from "react";
import Lottie from "react-lottie-player";
import storeAnimation from '../assets/storeanimation.json';
import analysisAnimation from '../assets/analysisanimation.json'
import categoryIncome from '../assets/categoryincome.png'
import categorySales from '../assets/categorysales.png'
import cityCategory from '../assets/citycategory.png'
import paymentGateway from '../assets/paymentgateway.png'
import './css/Home.css';

export const Home = ()=>{
    return (
        <div className="home-root">
            <div className="home-head">
                <div className="home-head-title-content">
                    <h1 className="home-head-title">
                        Hacked the Grocers Gap
                    </h1>
                    <div className="home-head-desc">
                        A comprehensive web app for supermarket sales prediction
                    </div>
                    <Button
                        title="Begin Prediction"
                        className="home-head-button"
                        variant="contained"
                        size="large"
                        >
                        Begin Prediction
                    </Button>
                </div>
                <Lottie 
                    className="lottie-anim"
                    animationData={storeAnimation}
                    loop
                    play />
            </div>
            <div className="home-problem">

            </div>
            <div className="home-approach">
                
            </div>
            <div className="home-analysis">
                
                <div className="home-analysis-section analysis1">
                    <div className="analysis1-content">
                        <h1 className="home-analysis-title home-head-title">
                        Analysis of the data
                        </h1>
                        <div className="analysis1-text">
                            We performed data analysis over the dataset of the products bought by a consumer and after skimming through the dataset, we have brought out the following information regarding the trends in the purchase of products of different categories in the three different cities.
                        </div>
                    </div>
                    
                    <Lottie 
                        className="lottie-anim analysis-anim"
                        animationData={analysisAnimation}
                        loop
                        play />
                </div>
                <img src={categoryIncome} className="analysis-img" alt=""/>
                <img src={categorySales} className="analysis-img" alt=""/>
                <img src={cityCategory} className="analysis-img" alt=""/>
                <img src={paymentGateway}className="analysis-img"  alt=""/>
            </div>
        </div>
    )
}