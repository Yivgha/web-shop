import React from 'react';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import {
    auth,
    // firestore
} from "../../config/firebaseConfig";
import { actionType } from '../../context/reducer';
import { useStateValue } from "../../context/StateProvider";
// import { setDoc, doc, getDoc } from 'firebase/firestore';

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
       
         navigate("/");    
 }
//   const userDoc = doc(firestore, "users", `${user.uid}`);
//          setDoc( userDoc, user, { merge: true });
//          getDoc(userDoc);

  return (
      <div>
        <button className='btn btn-primary btn-md' onClick={handleGoogleLogin}>Login with Google</button>
      </div>
  )
}

export default GoogleBtn;