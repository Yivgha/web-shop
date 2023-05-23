import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Products from "../Products/Products";

const Home = () => {

    return (
        <div>
            DASHBOARD

            <Navbar />
            <Products />
            <Outlet />
        </div>
    )
}

export default Home ;