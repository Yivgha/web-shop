import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { auth} from '../../config';
import { GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useStateValue } from '../../context/StateProvider';
import { actionType } from '../../context/reducer';
// import jwtDecode from 'jwt-decode';

// const { REACT_APP_CLIENT_ID } = process.env;

const Login = () => {
  const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  


    const provider = new GoogleAuthProvider();
    const [user, dispatch] = useStateValue();

  const login = async () => {
    const res = await auth.signInWithPopup(provider).then(() => {
      setSuccessMsg("Login Successful. You will now automatically get redirected to Home Page");
      setEmail("");
      setPassword("");
      setErrorMsg("");
    
      navigate("/");
      setSuccessMsg("");
    }).catch((error) => { setErrorMsg(error.message) });
  
     dispatch(
      {
         type: actionType.LOGIN,
       user: res
      }
    );
  }

 

  const handleLogin = async(e) => {
    e.preventDefault();
   
    const res = await auth.signInWithEmailAndPassword(email, password).then(() => {
      setSuccessMsg("Login Successful. You will now automatically get redirected to Home Page");
      setEmail("");
      setPassword("");
      setErrorMsg("");

      setTimeout(() => {
        setSuccessMsg("");
        navigate("/")
      }, 3000);
    
    }).catch((error) => { setErrorMsg(error.message) });
    
   dispatch({
     type: actionType.LOGIN,
   });
    
  };

  
 
  return (
    <div className='container login-container'>
      <h1 className='login-title'>Login</h1>
      <hr></hr>
      {successMsg && <><div className="success-msg">{successMsg}</div></>}
<form className='form-group' autoComplete="off"
              onSubmit={handleLogin}>
              <label className='login-label'>Email</label>
              <input type="email" className='form-control login-input' required
                  onChange={(e) => setEmail(e.target.value)} value={email} placeholder='Set email'></input>
              
              <label className='login-label'>Password</label>
              <input type="password" className='form-control login-input' required onChange={(e) => setPassword(e.target.value)} value={password}
              placeholder='Set password'></input>

              <div className='btn-box login-btn-box'>
                  <span className='login-bottom-text'>Don't have an accont? Sign in 
            <Link to="/signup" className='link'> HERE </Link>
            or login with 
            <button className='btn btn-primary btn-md' onClick={login}> Google</button>
          </span>
  
                  <button type="submit" className='btn btn-success btn-md login-btn'>LOGIN</button>
              </div>
      </form>
       {errorMsg && <><div className="error-msg">{errorMsg}</div></>}
          <Outlet />
    </div>
  )
}


export default Login;