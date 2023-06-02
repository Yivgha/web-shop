import React, {useState, useEffect} from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import {
    auth,
    // firestore
} from '../../config/firebaseConfig';
// import { getDoc, doc } from "firebase/firestore";
    
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
            <Navbar currentuser={currentUser} />
           
            <Outlet/>
        </div>
    )
}

export default Home;