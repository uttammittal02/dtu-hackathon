import React from "react";
import Lottie from "react-lottie-player";
import storeAnimation from '../assets/storeanimation.json';
import './css/Home.css';

export const Home = ()=>{
    return (
        <div className="home-root">
            <div className="home-head">
                <h1 className="home-head-title">
                    Hacked the Grocers Gap
                </h1>
                <Lottie 
                    className="lottie-anim"
                    animationData={storeAnimation}
                    loop
                    play />
            </div>
        </div>
    )
}