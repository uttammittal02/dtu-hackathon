import React from "react";
import { Link } from "react-router-dom";

import './css/Header.css';

const Header = () => {
    return (
        <div className="Header">
            <div className="Header__logo">
                <Link to="/">

                <img src="logo.png" alt="" />
                </Link>
            </div>
            <div className="Header__options">
                <NavbarOption name={"Home"} link={"/"} />
                <NavbarOption name={"About"} link={"/about"} />
                <NavbarOption name={"Results"} link={"/results"} />
                <NavbarOption name={"Predict"} link={"/predict"} />
            </div>

            <div className="Header__buttons">
                <button></button>
            </div>
        </div>
    );
};

export default Header;

const NavbarOption = ({ name, link }) => {
    return (
        <div className="Header__option">
            <Link to={link} className="Header__link">{name}</Link>
        </div>
    );
};
