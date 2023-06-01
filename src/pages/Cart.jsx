import React, {
  useState, useRef
  // , useEffect
} from 'react';
// import CartProduct from '../components/Cart/CartProduct';
// import ReCAPTCHA from 'react-google-recaptcha';
import { HiPlus, HiOutlineMinus } from "react-icons/hi";
import { actionType } from '../context/reducer';
import { useStateValue } from "../context/StateProvider";


// let cartItems = [];

const Cart = () => {

  const [cartAddress, setCartAddress] = useState("");
  const [cartEmail, setCartEmail] = useState("");
  const [cartPhone, setCartPhone] = useState("");
    const [cartName, setCartName] = useState("");
    // const captchaRef = useRef(null);
  
  const handleCartSubmit = (e) => {
    e.preventDefault();
    console.log(cartAddress, cartEmail, cartName, cartPhone);
    dispatch({
            type: actionType.SET_CART,
      cart: cart, 
            total: total
        })
      setCartAddress("");
      setCartEmail("");
      setCartPhone("");
      setCartName("");
      // captchaRef.current.getValue();
      //   captchaRef.current.reset();
  }

     const [counter, setCounter] = useState(1);
     const inputRef = useRef(counter);
    // const [itemPrice, setItemPrice] = useState(parseInt(counter) * parseFloat(price));
  const [totalPrice, setTotalPrice] = useState(0);

    const [{ cart, total }, dispatch] = useStateValue();


    // useEffect(() => {
    //     // setItemPrice(parseInt(counter) * parseFloat(itemPrice));
    //   // handleTotalPrice()
    //     // eslint-disable-next-line
    // }, [counter]);

  const handleTotalPrice = () => {

    //  parseFloat(cartItem.price.replace('$', '')
    if (cart.length > 0) {
      let calcTotalPrice = cart.reduce(function (accumulator, item) {
        console.log(item.counter);
        return accumulator + (parseInt(item.counter) * parseFloat(item.price))
      }, 0);

      setTotalPrice(calcTotalPrice);
      dispatch({ type: actionType.SET_TOTAL, total: totalPrice });
    }
  }

    
    const handleIncrement = () => {
      setCounter((prevCounter) => prevCounter + 1);
      handleTotalPrice();
    };

    const handleDecrement = () => {
        setCounter((prevCounter) => prevCounter - 1);
        if (counter === 1) {
          setCounter(1);
      }
      // handleTotalPrice();
    };

function handleInputChange(e) {
  //   setCounter(parseInt(inputRef.current.value));
  //   if (isNaN(counter) || isNaN(e.target.value) || isNaN(parseInt(inputRef.current.value))) {
  //       setCounter(1);
  // }
  handleTotalPrice();
    };

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
        {/* <div className='cart-products'>
          <CartProduct />
        </div> */}

        <div className='cart-products'>
          {!cart && (<><p>Please wait...</p></>)}
          
          {cart?.length > 0 && (
            cart.map(cartItem => (
              <div className='cart-product-container' id={cartItem.id} key={Math.random()} >
          <div className='cart-img-block'>
              <img className='cart-img' src={cartItem.url} alt={cartItem.name} />
          </div>
          <div className='cart-description-block'>
              <div className='cart-description-info'>
                  <p>Name: {cartItem.name}</p>
                    <p>Price: {parseFloat(cartItem.price) * parseInt(counter)}</p>
                  </div>
                  
                  
              <div className='cart-counter'>
                    <input className="counter-input" ref={inputRef} value={counter} onChange={handleInputChange} />

                  <div className='cart-counter-btns'>
                      <button type="button" onClick={handleIncrement} className='btn btn-outline-secondary btn-number cart-counter-btn'>
                          <HiPlus className='cart-counter-icon' size={20}/>
                  </button>
                      <button type="button" onClick={() => {
                        handleDecrement();
      //                   if (counter === 0) {
      //                     setCounter(0);
      //                     cart.pop(cartItem.id);
      //                     dispatch({type: actionType.SET_CART, cart: cart})
      // }
                      }} className='btn btn-outline-secondary btn-number cart-counter-btn'>
                          <HiOutlineMinus className='cart-counter-icon' />
                      </button>
                      </div>
              </div>
          </div>
      </div>
            ))
          )}
          
        </div>



              
        <div className='cart-sum'>
          <div className='total-price'>Total Price: {totalPrice}</div>
                  
          <div className='cart-submit'>
                      <div className='captcha'>
                          {/* <ReCAPTCHA sitekey={process.env.REACT_APP_SITE_KEY} ref={captchaRef} /> */}
                          
                      </div>
                      
                      <button type="submit" className="btn btn-primary cart-btn" onClick={handleCartSubmit}>Submit</button>
          </div>
        </div>
        
      </div>
    </div>
  )
}
export default Cart;