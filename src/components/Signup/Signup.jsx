import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const Signup = () => {
     
 const [fullName, setFullname]=useState('');
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

    // const [errorMsg, setErrorMsg]=useState('');
    // const [successMsg, setSuccessMsg]=useState('');

    const handleSignup=(e)=>{
        e.preventDefault();
        console.log(fullName, email, password);
    }

  return (
      <div className='container signup-container'>
          <h1 className='signup-title'>Sign Up</h1>
          <hr></hr>
            <form className='form-group' autoComplete="off" onSubmit={handleSignup}>
                <label className='signup-label'>Full Name</label>
                <input type="text" className='form-control signup-input' required
                onChange={(e)=>setFullname(e.target.value)} value={fullName}></input>
                
                <label className='signup-label'>Email</label>
                <input type="email" className='form-control signup-input' required
                 onChange={(e)=>setEmail(e.target.value)} value={email}></input>
                
                <label className='signup-label'>Password</label>
                <input type="password" className='form-control signup-input' required
                 onChange={(e)=>setPassword(e.target.value)} value={password}></input>
                
                <div className='btn-box signup-btn-box'>
                    <span className='signup-bottom-text'>Already have an account? Login
                      <Link to="/login" className='link'> HERE</Link>
                  </span>
                    <button type="submit" className='btn btn-success btn-md signup-btn'>SIGN UP</button>
                </div>
          </form>
          <Outlet />
      </div>
  )
}

export default Signup;
