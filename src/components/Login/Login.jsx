import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth} from '../../config/firebaseConfig';
import { useStateValue } from "../../context/StateProvider";
import { actionType } from "../../context/reducer";
import GoogleBtn from '../GoogleBtn/GoogleBtn';

const Login = () => {
  const navigate = useNavigate();

  const [
    // eslint-disable-next-line
    { user },
    dispatch] = useStateValue();
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

 

  const handleLogin = async (e) => {
    e.preventDefault();

    await signInWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        setSuccessMsg("Login Successful. You will now automatically get redirected to Home Page");
        setEmail("");
        setPassword("");
        setErrorMsg("");
    
        dispatch({
          type: actionType.SET_USER,
          user: cred.user
        });

        setTimeout(() => {
          setSuccessMsg("");
          navigate("/shop")
        }, 2000);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMsg(errorMessage);
        console.log(errorCode, errorMessage);
      });
   localStorage.setItem("user", JSON.stringify(user));
  };

  
 
  return (
    <div className='container login-container'>
      <h1 className='login-title'>Login</h1>
      <hr></hr>
      {successMsg && <><div className="success-msg">{successMsg}</div></>}
<form className='form-group' autoComplete="off"
        onSubmit={handleLogin}
      >
              <label className='login-label'>Email</label>
              <input type="email" className='form-control login-input' required
                  onChange={(e) => setEmail(e.target.value)} value={email} placeholder='Set email'></input>
              
              <label className='login-label'>Password</label>
              <input type="password" className='form-control login-input' required onChange={(e) => setPassword(e.target.value)} value={password}
              placeholder='Set password'></input>

              <div className='btn-box login-btn-box'>
                  <span className='login-bottom-text'>Don't have an accont? Sign in 
            <Link to="/signup" className='link'> HERE </Link>
          </span>
  <button type="submit" className='btn btn-success btn-md login-btn'>LOGIN</button>
              </div>
      </form>
      <GoogleBtn />
       {errorMsg && <><div className="error-msg">{errorMsg}</div></>}
          <Outlet />
    </div>
  )
}


export default Login;