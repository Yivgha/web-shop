import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Home = () => {

    return (
        <div className="container">
            <h1>DASHBOARD</h1>
            <Navbar />
            <Outlet/>
        </div>
    )
}

export default Home;