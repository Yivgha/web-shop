import React, { useState } from 'react';
import CartProduct from '../components/Cart/CartProduct';

const Cart = () => {

  const [cartAddress, setCartAddress] = useState("");
  const [cartEmail, setCartEmail] = useState("");
  const [cartPhone, setCartPhone] = useState("");
  const [cartName, setCartName] = useState("");
  
  const handleCartSubmit = (e) => {
    e.preventDefault();
      console.log(cartAddress, cartEmail, cartName, cartPhone);
      setCartAddress("");
      setCartEmail("");
      setCartPhone("");
      setCartName("");
  }


  return (
    <div className='container-fluid cart-container'>
      <div className="cart-left">
        <div className='cart-map'>MAP HERE</div>

        <form className='form-group' autoComplete="off">
          <label className='cart-label'>Address:</label>
                  <input className='form-control cart-input' required
                      placeholder='Write your address' type="address"
                onChange={(e)=>setCartAddress(e.target.value)} value={cartAddress}></input>
          <label className='cart-label'>Email:</label>
                  <input className='form-control cart-input' required
                      placeholder='Write your email' type="email"
                      onChange={(e) => setCartEmail(e.target.value)} value={cartEmail}></input>
          <label className='cart-label'>Phone:</label>
                  <input className='form-control cart-input' required
                      placeholder='Write your phone' type="tel"
                      onChange={(e) => setCartPhone(e.target.value)} value={cartPhone}></input>
          <label className='cart-label'>Name:</label>
                  <input className='form-control cart-input' required
                      placeholder='Write your name' type="text"
                      onChange={(e) => setCartName(e.target.value)} value={cartName}></input>
        </form>
      </div>
      <div className="cart-right">
        <div className='cart-products'>
          <CartProduct />
        </div>
              
        <div className='cart-sum'>
            <div className='total-price'>Total Price: 0</div>
                  
          <div className='cart-submit'>
            <div className='captcha'>CAPTCHA</div>
                      <button type="submit" className="btn btn-primary cart-btn" onClick={handleCartSubmit}>Submit</button>
          </div>
        </div>
        
      </div>
    </div>
  )
}
export default Cart;