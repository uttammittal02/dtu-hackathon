import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import { Home } from "./components/Home";
import AboutUs from "./components/AboutUs";
import Results from "./components/Results";
import Predict from "./components/Predict";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route index element={<Home />} />
                <Route path="about" element={<AboutUs />}></Route>
                <Route path="results" element={<Results />}></Route>
                <Route path="predict" element={<Predict />}></Route>
                <Route path=":any" element={<Error />}></Route>
            </Routes>
        </div>
    );
}

export default App;

export const Error = () => {
    return (
        <div
            className=""
            style={{
                height: "100vh",
                display: "grid",
                placeItems: "center",
                width: "100vw",
                overflow: "hidden",
                marginTop: "-100px"
            }}
        >
            Page doesnt exist
        </div>
    );
};
