import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {

    return (
        <div>
            <Link to="signup">SIGN UP</Link>
            <Link to="login">LOG IN</Link>
        </div>
    )
}

export default Navbar;