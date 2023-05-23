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
      <div className='container'>
          <h1>Sign Up</h1>
          <hr></hr>
            <form className='form-group' autoComplete="off" onSubmit={handleSignup}>
                <label>Full Name</label>
                <input type="text" className='form-control' required
                onChange={(e)=>setFullname(e.target.value)} value={fullName}></input>
                
                <label>Email</label>
                <input type="email" className='form-control' required
                 onChange={(e)=>setEmail(e.target.value)} value={email}></input>
                
                <label>Password</label>
                <input type="password" className='form-control' required
                 onChange={(e)=>setPassword(e.target.value)} value={password}></input>
                
                <div className='btn-box'>
                    <span>Already have an account Login
                    <Link to="/login" className='link'> Here</Link></span>
                    <button type="submit" className='btn btn-success btn-md'>SIGN UP</button>
                </div>
          </form>
          <Outlet />
      </div>
  )
}

export default Signup;
