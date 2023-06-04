import React, { useEffect }  from 'react';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import {
    auth,
    firestore
} from "../../config/firebaseConfig";
import { actionType } from '../../context/reducer';
import { useStateValue } from "../../context/StateProvider";
import { collection, getDocs, doc, setDoc } from "firebase/firestore";

const GoogleBtn = () => {
const navigate = useNavigate();
    const provider = new GoogleAuthProvider();
      const [
    // eslint-disable-next-line
    { user },
    dispatch] = useStateValue();
  

     const handleGoogleLogin = async () => {
       const { user: {
         // eslint-disable-next-line
         refreshToken,
         providerData } } = await signInWithPopup(auth, provider);
         
         dispatch({
                     type: actionType.SET_USER,
                     user: providerData[0]
         });
       localStorage.setItem("user", JSON.stringify(user));
       const userDoc = doc(firestore, "users", `${user.uid}`);
       setDoc(userDoc, user, { merge: true });
       
       navigate("/shop");   
       
  }

  const getUser = async () => {
    const updUser = collection(firestore, "users");
    const getDoc = await getDocs(updUser);
    getDoc.forEach(element => {
      const newUser = element.data();
        dispatch({ type: actionType.SET_USER, user: newUser });
    });
  };
    
    
    useEffect(() => { getUser() },
        // eslint-disable-next-line
        []);
  
  return (
      <div>
        <button className='btn btn-primary btn-md' onClick={handleGoogleLogin}>Login with Google</button>
      </div>
  )
}

export default GoogleBtn;