import React, {useState, useEffect} from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import {
    auth,
    // firestore
} from '../../config/firebaseConfig';
// import { getDoc, doc } from "firebase/firestore";
    
const Home = () => {

    const [currentUser, setCurrentUser] = useState("");
    

    async function getUser() {
        const user = auth.currentUser;
        // if (user !== undefined) {
        //     const userDoc = doc(firestore, "users", `${user.uid}`);
        //      const docSnap = await getDoc(userDoc).then(snap => {
//                 setCurrentUser(snap.data());
//             });
        //}
        setCurrentUser(user);
        return user;       
}

    useEffect(() => {
        getUser();
    },
         // eslint-disable-next-line
         []);

    return (
        <div className="container-fluid">
            <Navbar currentuser={currentUser} />
           
            <Outlet/>
        </div>
    )
}

export default Home;