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
      <div className='container'>
         <h1>Login</h1>
<hr></hr>
<form className='form-group' autoComplete="off"
              onSubmit={handleLogin}>
              <label>Email</label>
              <input type="email" className='form-control' required
                  onChange={(e) => setEmail(e.target.value)} value={email} placeholder='Set email'></input>
              
              <label>Password</label>
              <input type="password" className='form-control' required onChange={(e) => setPassword(e.target.value)} value={password}
              placeholder='Set password'></input>

              <div className='btn-box'>
                  <span>Don't have an accont? Sign in 
                      <Link to="/signup" className='link'>HERE</Link>
                  </span>
                  <button type="submit" className='btn btn-success btn-md'>LOGIN</button>
              </div>
            </form>
          <Outlet />
    </div>
  )
}


export default Login;