import { Button } from "@mui/material";
import React from "react";
import Lottie from "react-lottie-player";
import storeAnimation from "../assets/storeanimation.json";
import analysisAnimation from "../assets/analysisanimation.json";

import "./css/Home.css";
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <div className="home-root">
            <div className="home-head">
                <div className="home-head-title-content">
                    <h1 className="home-head-title">Hacked the Grocers Gap</h1>
                    <div className="home-head-desc">
                        A comprehensive web app for supermarket sales prediction
                    </div>
                    <Link to="/predict">
                        <Button
                            title="Begin Prediction"
                            className="home-head-button"
                            variant="contained"
                            size="large"
                        >
                            Begin Prediction
                        </Button>
                    </Link>
                </div>
                <Lottie
                    className="lottie-anim"
                    animationData={storeAnimation}
                    loop
                    play
                />
            </div>
            <div className="home-problem"></div>
            <div className="home-approach"></div>
            <div className="home-analysis">
                <div className="home-analysis-section analysis1">
                    <div className="analysis1-content">
                        <h1 className="home-analysis-title home-head-title">
                            Analysis of the data
                        </h1>
                        <div className="analysis1-text">
                            We performed data analysis over the dataset of the
                            products bought by a consumer and after skimming
                            through the dataset, we have brought out the
                            following information regarding the trends in the
                            purchase of products of different categories in the
                            three different cities.
                        </div>
                        <Link to="/results">
                            <Button
                                title="Get analytics"
                                className="home-head-button"
                                variant="contained"
                                size="large"
                            >
                                Get Analytics
                            </Button>
                        </Link>
                    </div>

                    <Lottie
                        className="lottie-anim analysis-anim"
                        animationData={analysisAnimation}
                        loop
                        play
                    />
                </div>
            </div>
        </div>
    );
};
