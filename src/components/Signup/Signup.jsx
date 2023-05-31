import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import {  auth, firestore } from '../../config/firebaseConfig';
import { useNavigate } from "react-router-dom";
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc, getDoc} from 'firebase/firestore';
import { useStateValue } from '../../context/StateProvider';
import { actionType } from '../../context/reducer';
import GoogleBtn from '../GoogleBtn/GoogleBtn';

const Signup = () => {
  const navigate = useNavigate();
  
  const [
    // eslint-disable-next-line
    { user },
    dispatch] = useStateValue();

  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  
  const handleSignup = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, email, password).then((credentials) => {
      const uid = credentials.user.uid;
      const data = {
        uid: uid,
        displayName: displayName,
        email: email,
        password: password
      };
      dispatch({ type: actionType.SET_USER, user: data });
    const usersRef = doc(firestore, "users", `${uid}`);
    setDoc(usersRef, data).catch((err) => console.log(err.message));
getDoc(usersRef);
   }).then(() => {
       setSuccessMsg("Signup Successful. You will now automatically get redirected to Home Page");
          setDisplayName("");
          setEmail("");
          setPassword("");
          setErrorMsg("");
          setTimeout(() => {
            setSuccessMsg("");
            navigate("/shop")
          }, 2000);
        }).catch((error) => {
          setErrorMsg(error.message)
        });
  }

  return (
      <div className='container signup-container'>
          <h1 className='signup-title'>Sign Up</h1>
      <hr></hr>
      {successMsg && <><div className="success-msg">{successMsg}</div></>}
      <form className='form-group' autoComplete="off"
        onSubmit={handleSignup}
      >
                <label className='signup-label'>Full Name</label>
                <input type="text" className='form-control signup-input' required placeholder='Set your name'
                onChange={(e)=>setDisplayName(e.target.value)} value={displayName}></input>
                
                <label className='signup-label'>Email</label>
                <input type="email" className='form-control signup-input' required placeholder='Set your email'
                 onChange={(e)=>setEmail(e.target.value)} value={email}></input>
                
                <label className='signup-label'>Password</label>
                <input type="password" className='form-control signup-input' required placeholder='Set your password'
                 onChange={(e)=>setPassword(e.target.value)} value={password}></input>
                
                <div className='btn-box signup-btn-box'>
                    <span className='signup-bottom-text'>Already have an account? Login
            <Link to="/login" className='link'> HERE </Link>
                  </span>
                    <button type="submit" className='btn btn-success btn-md signup-btn'>SIGN UP</button>
                </div>
      </form>
    <GoogleBtn />
      {errorMsg && <><div className="error-msg">{errorMsg}</div></>}
          <Outlet />
      </div>
  )
}

export default Signup;
