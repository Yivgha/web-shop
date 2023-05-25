import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { auth, fs } from '../../config';
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider } from "firebase/auth";

import { useStateValue } from '../../context/StateProvider';
import { actionType } from '../../context/reducer';

const Signup = () => {
  const navigate = useNavigate();

 const [fullName, setFullname]=useState('');
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

    const [errorMsg, setErrorMsg]=useState('');
  const [successMsg, setSuccessMsg] = useState('');
  
  const provider = new GoogleAuthProvider();
    const [dispatch] = useStateValue();

  const login = async () => {
    const res = await auth.signInWithPopup(provider).then((credentials) => {
      fs.collection("users").doc(credentials.user.uid).set({
     displayName: credentials.user.uid,
      }).then(() => {
        setSuccessMsg("Login Successful. You will now automatically get redirected to Home Page");
        setFullname("");
      setEmail("");
      setPassword("");
   setErrorMsg("");
  navigate("/");
   }).catch((error) => { setErrorMsg(error.message) });
    }).catch((error) => {
      setErrorMsg(error.message);
    })
     dispatch({
       type: actionType.LOGIN,
    });
  }

  const handleSignup = async(e) => {
    e.preventDefault();
    const res = await auth.createUserWithEmailAndPassword(email, password).then((credentials) => {
      console.log(credentials);
      fs.collection("users").doc(credentials.user.uid).set({
        displayName: fullName,
        Email: email,
        Password: password,
      }).then(() => {
        setSuccessMsg("Signup Successful. You will now automatically get redirected to Home Page");
        setFullname("");
        setEmail("");
        setPassword("");
        setErrorMsg("");
        setTimeout(() => {
          setSuccessMsg("");
          navigate("/")
        }, 5000);
      }).catch((error) => { setErrorMsg(error.message) });
    }).catch((error) => {
      setErrorMsg(error.message);
    });
     dispatch({
       type: actionType.LOGIN,
    });
  };

  return (
      <div className='container signup-container'>
          <h1 className='signup-title'>Sign Up</h1>
      <hr></hr>
      {successMsg && <><div className="success-msg">{successMsg}</div></>}
            <form className='form-group' autoComplete="off" onSubmit={handleSignup}>
                <label className='signup-label'>Full Name</label>
                <input type="text" className='form-control signup-input' required placeholder='Set your name'
                onChange={(e)=>setFullname(e.target.value)} value={fullName}></input>
                
                <label className='signup-label'>Email</label>
                <input type="email" className='form-control signup-input' required placeholder='Set your email'
                 onChange={(e)=>setEmail(e.target.value)} value={email}></input>
                
                <label className='signup-label'>Password</label>
                <input type="password" className='form-control signup-input' required placeholder='Set your password'
                 onChange={(e)=>setPassword(e.target.value)} value={password}></input>
                
                <div className='btn-box signup-btn-box'>
                    <span className='signup-bottom-text'>Already have an account? Login
            <Link to="/login" className='link'> HERE </Link>
            or login with <button className='btn btn-primary btn-md' onClick={login}>Google</button>
                  </span>
                    <button type="submit" className='btn btn-success btn-md signup-btn'>SIGN UP</button>
                </div>
      </form>
      {errorMsg && <><div className="error-msg">{errorMsg}</div></>}
          <Outlet />
      </div>
  )
}

export default Signup;
