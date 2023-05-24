import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Home = () => {

    return (
        <div className="container home-container">
            <Navbar />
            <Outlet/>
        </div>
    )
}

export default Home;