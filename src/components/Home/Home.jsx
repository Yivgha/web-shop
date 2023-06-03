import React, {useState, useEffect} from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet, Link} from "react-router-dom";
import {
    auth
} from '../../config/firebaseConfig';
import foodDel from "../../assets/food-delivery.jpg"
    
const Home = () => {
const user = auth.currentUser;
    const [currentUser, setCurrentUser] = useState(user);
    

    async function getUser() {
         const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser);
            setCurrentUser(foundUser);
        } else {
            setCurrentUser(user);
        }
        return user;       
}

    useEffect(() => {
        getUser();
    }, // eslint-disable-next-line
        []);
    
    return (
        <div className="container-fluid">
            {user ? (<Navbar currentuser={currentUser} />) : (
                <div className="home-welcome-box">
                <p className="home-text">Welcome to our delivery app!</p>
                <img src={foodDel} alt="food delivery to home" className="home-main-img"/>
                <p className="home-info">Please <Link to="/login">LOG IN</Link> or <Link to="/signup">SIGN UP</Link> to order food</p>
           </div>)}
            <Outlet/>
        </div>
    )
}

export default Home;