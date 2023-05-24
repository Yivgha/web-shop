import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // const [errorMsg, setErrorMsg] = useState("");
    // const [successMsg, setSuccessMsg] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(email.password);
    }


  return (
    <div className='container login-container'>
      <h1 className='login-title'>Login</h1>
  <hr></hr>
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
                      <Link to="/signup" className='link'> HERE</Link>
                  </span>
                  <button type="submit" className='btn btn-success btn-md login-btn'>LOGIN</button>
              </div>
            </form>
          <Outlet />
    </div>
  )
}


export default Login;