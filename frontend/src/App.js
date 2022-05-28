import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                {/* <Route index element={<Home />} /> */}
                {/* <Route path="about" element={<About />}></Route> */}
                <Route path=":any" element={<Error />}></Route>
            </Routes>
        </div>
    );
}

export default App;

export const Error = () => {
    return <div>Page doesnt exist</div>;
};