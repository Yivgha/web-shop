import React, {useState, useEffect} from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { auth, fs } from "../../config";


    
const Home = () => {
const [currentUser, setCurrentUser] = useState(null);
     useEffect(() => {
         auth.onAuthStateChanged((user) => {
             if (user) {
                 fs.collection("users").doc(user.uid).get().then(snapshot => {
                     setCurrentUser(snapshot.data().FullName);
                    })
             } else {
                 setCurrentUser("")
             }
            
             return user;
            })
        }, []);

    return (
        <div className="container-fluid">
            <Navbar user={currentUser} />
            <Outlet/>
        </div>
    )
}

export default Home;