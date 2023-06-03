import React from 'react';
import none from "../../assets/error-not-found.jpg"


const NotFound = () => {
  return (
    <div className='container-fluid error-pg-box'>
      <img src={none} alt="page was not found" className='error-img' />
        <p className='error-info'>Error 404! Not Found</p>
    </div>
  )
}

export default NotFound;
