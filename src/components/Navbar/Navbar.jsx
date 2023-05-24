import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo64.png";

const Navbar = () => {

    return (
        <div className="container flex-nav">
            <div className="container nav-side-right">
                <Link to="/">
                    <img src={logo} alt="main logo" className="main-logo" />
                    </Link>
            <Link to="/">Shop</Link>
            <span className="slash">|</span>
            <Link to="/cart">Shopping Cart</Link>
            </div>
            <div className="container nav-side-left">
                <Link to="/signup" >SIGN UP</Link>
                <span className="slash">|</span>
                <Link to="/login" >LOG IN</Link>
            </div>
        </div>
    )
}

export default Navbar;