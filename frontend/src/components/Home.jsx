import { Button } from "@mui/material";
import React from "react";
import Lottie from "react-lottie-player";
import storeAnimation from "../assets/storeanimation.json";
import analysisAnimation from "../assets/analysisanimation.json";
import thinkingAnimation from '../assets/thinkinganimation.json';
import developerAnimation from '../assets/webdevelopment.json';
import "./css/Home.css";
import { Link } from "react-router-dom";


const logos = [
    {
        img : "https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png"
    },
    {
        img : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
    },
    {
        img : "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
    },
    {
        img : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
    },
    {
        img : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2048px-Python-logo-notext.svg.png"
    },
    {
        img : "https://user-images.githubusercontent.com/67586773/105040771-43887300-5a88-11eb-9f01-bee100b9ef22.png"
    },
    {
        img : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQsAAAC9CAMAAACTb6i8AAAAwFBMVEX///8TB1QAAEcAAEwAAEm9u8zFw9IAAE8AAEsJAFESBVQNAFL/ygDLydYAAETt7PEAAEFNSHfnBIg4M2eQjaaxsL8nIV719PkAAD9CO3GEgZ59e5VtaY4hF12qqLtWUX397PXc2uWcmbH/00b/zzHvfLRgXYT/78v/++nqMZjxjL/w7/Tj4ukAADuZlq87NG0dEV4yK2V0cZJOSXcwKGbU0t5oYoz/zRvzl8fmAH/2tdUAADYAAC5HQXQoHmMUAFoOlZrsAAAKYElEQVR4nO2dDXfiuBVAQTbItopwdiEGh9gD3bJtIUA8YdrtbJL//6/Wlp78LNmZBGa6acO75+yZNTzL1tW3DKTXIwiCIAiCIAiCIAiCIM5huzJs3/tW3p3BXaC5G773rbw7A9bXMHJBLpDLcrE8Asuudy/LxTyWivi6693LcnEV6syGP3e9Sy4QcoGQC4RcIOQCIRcIuUDIBUIuEHKBkAuEXCDkAiEXyMd2cXzMNVcjdey4yPK1Jt9Uhx/bxTDmGjlQx46LCYO32bg6/OAu6tyBCy9UcHDh6Xej4AJdfNnPFftcHV60CwdygZALhFwg5AK5aBe/1qjDi3bxy1+Af6nDi3bxV+PiF3VILsiFOiYX5KKCXCDkAiEXCM0vENfF32vUYTpjmrsLdOGwHRnU4UW7cCAXCLlAyAVyWS72d7FidtsVfVkunGdF//6H4VN1eNEu/vnbT5rfPlWH5ELxqTokF+RCHZILcqGOyQW5qKAxFXnFxX/+ZvhUHV60CwdygZALhFwg5AK5aBejHfzGwy6pDi/axSSGH3mIL/CZgOvikp8V7e9miruDOnRdfNXfdpdfL8GFg+MiWRqSP/c2/xROc/GxIRcIuUDIBUIuEHKBkAuEXCDkAiEXCLlAyAVCLhBygbzmQnoK2Nf62LziYpBONOlH3LBwOO1zfB8bcoGQC2QohYZclC70712E5IIgCIIgCIIgiP8fPP0Jnt8/4kd0TuVW6MX+6L1v5H8AcoGQC4RcIOQCIRcIuUDIBUIukHd3kQBwNLh5PIjb9eTFefBmmj5Gz7fr3dJOoDO53mhSBj/lk87sbbOb/fPzQ7GCpF5wMZysb8Xh8cY8Y3AuoTlO8gOPZ/z+Znr+Q+unWfVLHXeL6v/HRcy8UAjBPclXXdHjxczXEYF8zqpXNvqnPr5mOoDr5L6ogx2TJrnn1tOSZR6rpEIexIfsRRcrj3m8TCP0mExVNtfq10VmD42gTMgyKOr3o9Dz4/vsTBdz9f0Ovu5Vv33lRX2D8EW7MNOY9xsRvKw9Y32OP9UR16JObij8RnLx2k5qMWsmxW6PnS6G3Bd1VOTFaeVCnRjO66BkLjGoesuPJ2c9xdcuwsde8uD3LcRsZ4cm80bmdAaL3laf5bjIq28QWTfY9xeNpMaHwL5YGK86XExmdhqRXxp4DG0XSZ/3HcTsO1yIh95tK8V+bLeTvdeKkMVYdrgIr3q7uBU7rVPaiNbFonh177qYyNYFvfveg7BdPEJaZWvjoU6iLNrvcPGUVymGAZOSeXVhzJqtPK9VNML8Be9wIeYjWVWhiJfNuC4sUSd1zxtJMRbwKtg00NpFVuuMuM+Yry7o5de2i6kWJpi4KorPhxkrEwucGn2Si1Jq+Z/cr47L5SgNTQUW/qYOXJlCEnJehQ1TXsmBXNkuoutD+W8ovfXNgjNjg5k+rajTl/e74XGU5bJRT4yLrTQt0vOL6eg4TFUHZIp+bmVAcBj5klEhgzOHZXBRpR7WA+kkhtvw6kaemE6MY59a1HfruOhH5T/sUQcOhTnzs45ZmtT5rUlqm5uPbaCLHPxEMjUXzLAnNS7GuvL4zdxPvp73AajaRXjbSGBgchmbvxWeQlnyh0ZYVstwXFTtv66nW2h0gutT15BJjkNBmX4tA1wcY6MC+5netm5yxsVInRdxK1NnfhbMuGg2hyqXcGselEkCNyFC6zork4OWi2YOJuBRqknVlmmB4sm6kYXpjsAFdETYshRLY99x4f+Iv+9uXPjOBOVK34rp8MwXSd1PmNSnOy6CtBG0Zc2glTFjN+rENCXtIoGulOf2BY1X4+KouzHT/r4L03cK5/UR3L88qsMC1Lh/NXlgZbN24ST3pF8NlG/49m457nbnUrswn/tiRzsqgTmOcZFAU+L83NkmAi681H0jbN6/yaM3caJMaTounOQg+2qoSyBhtyKW40bTBZhxGlKvbjv1OGK+GC2C+OrlZdSbABft71BDD+cVKsv8pTVk3jW/6PuDriBlaAsFyVot/Lp5Dbg8L9yoqW+7GOCkrlyzxPnUPeHtgAvZurOdLhi1tChn2rpmxhs3DD7g7bhw1C4aLqDyi0Ors4fsaxemKrVqPjRenHfm1nSYs/MbC7iIW3eWaRe6WUPvF7HW+dATvt0F9DDivpVU0XTxc2ili0BTaqzNHuy1QbmqXLonvQ3jolXgGdRF9fsEZiSQrfOzH+ci9d7iYhO7Lnq5swwU8Xn9xottxNQLNVjVbaRVfU6uF6aNtDpFu15AG2n1sB31ovQrGG8uoaPZWTXD9J1H9w3oCLiahW/gUrIVVpzaX0BeIt6qiXnTBXQe7VVWq79QDNZSBugjbNe6NwAugtY21t4abA8vDIQm7O0uNsFLWp+b4wg4bs+hoCI6LkqW2UIys8aT56zOwEXrmmNoFTA6QplxZ3eqbjxvd2F6gtZU5WjNL2DoNGsY5LMzv7AYrWGEbaX+FswkOnY6DBhS+/D9HyiNSDo7q9DfneICSly4P4ZcmAWIcmGmIW5NNK93u6hWlbrQ8u63v4lx4ZycBPYOkVlQ8YUVZqrFKS6GUP6+3SzrVRfM5+5hcRDZ92sWuS+5MNuh5+xs1Wt2afVSc1NIZkyDtVpfWuV0b84+wYVZnURWf508maTAxQq2Xz2rWdY7SjjvdDKk+/z2fPUN4F5OjE0smUPVx1IxpdncBE329XbUKS7MQl80NmA213VS4MJM+/t+QwbuotZ7Ob9f2Z2wrhdn7fKhi76/1zlIVn7dHeNU57N5jc3hZldB+dLpbaTXuzXLqbjYmiuGdVJmzVPvjXgHKPvjI+5+GRcDn8fzKXawsP3ZHqVOcFHlIWRsfXOzjwMzjfManci23rcMmb++WTyoMMFPHkfK3j6udzLjpzRNH+NqnA3DyHKBO8SCsUWaFlxW9+rZLqrOO/TjfDc8LrfLaQ4zsYfeGZj9i0c1UFQb11hRQtEc0AZ1DjBM8EHX85FXXPR2uNkvPM/Tj6vuYaZbuxjj7mZ5QdhRl5n9TECP0BGvtualNBX6vEk4uPAHu7g5i1V3J+wBNHOm/VWBLDufj7zmopd2XGwDs3PcF1iy0ImKyk5t33xWlHx1E1JJnNNzoousN20+IKy6+bk7zRlKO8J/2va2QcczxFddlF6tbAo235jZdWOPZBvZj9d4nJmVinExkYFbQiK2B/4zXPS2n+P6MVEYyI6eeJw3InxWRYx99Z3sGFwcAnU4s118YepV1tjtWu5lvXwI9Z7DcabPbU6fi1l9QeHFedXVrtUVgz1EJJOA8YYO4QfnbufMm+vBZcol8wOfzR5W3fvqxyJQEXK21xHJjQYyMEk19jpxBUHWTY4WUl+sHAfUC+NCBRXWudvU01HSu9k2E2tMsoeFiFlQlULA4qfz9z3nztp4OcxW2ehbn2FYjrLV4PhDvo5eJTUdtRasblR1S8Nvr8LHw9UkvUmz0fc8G3BdXDLkAiEXCLlAyAVCLhBygZALhFwg5AIhF8g9Uz9pPyMXvV6m/9jB7pz9QYIgCIIgCIIgCIIgCOK/wR8m/eVIxxIQ5QAAAABJRU5ErkJggg=="
    },
    {
        img : "https://matplotlib.org/stable/_static/logo2.svg"
    },
    {
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/1200px-Scikit_learn_logo_small.svg.png"
    }
]

export const Home = () => {
    return (
        <div className="home-root">
            <div className="home-head">
                <div className="home-head-title-content anim-popout">
                    <h1 className="home-head-title">Hacked The Grocers Gap</h1>
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
            <div className="home-problem">
                <div className="home-titles problem-title">
                    Problem at hand
                </div>
                <div className="problem-content">
                    <div className="home-text problem-text anim-popout">
                    An always goto stop for all the needs - Supermarkets!<br/><br/>
Although supermarkets house a lot of products coming from different product markets, the sales of all categories are not the same.
                    </div>
                    <Lottie
                        className="problem-anim"
                        animationData={thinkingAnimation}
                        loop
                        play
                    />
                    <div className="home-text problem-text anim-popout">
                    How to know these categories?<br/><br/>
Do these categories need to be replaced?<br/><br/>
Is there any solution to improving sales and maximising profit?<br/><br/>

This is where we will come in!

                    </div>
                </div>
            </div>
            <div className="home-approach">
                <Lottie
                    className="approach-anim"
                    animationData={developerAnimation}
                    loop
                    play
                    />
                <div className="approach-content">
                    <div className="home-titles approach-title">
                        Approach towards the problem
                    </div>
                    <div className="home-text approach-text">
                    Our app provides some key insights of the supermarket identifying those product segments with less sales. On the basis of previous records, we analyse and recommend the items to be retained or replaced in the supermarket to get the maximum profit considering quantity and margins. We have used the following tools for the successful implementation of our project.
                    </div>
                    <div className="approach-tech">
                        {
                            logos.map((img,i)=>{
                                return <img src={img.img} alt="" className="tech"/>
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="home-analysis">
                <div className="home-analysis-section analysis1">
                    <div className="analysis1-content">
                        <h1 className="home-analysis-title home-titles">
                            Analysis of the data
                        </h1>
                        <div className="home-text analysis1-text">
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
                                className="home-head-button analytics-button"
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
