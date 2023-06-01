import React, {
  useState, useRef
  , useEffect
} from 'react';
// import CartProduct from '../components/Cart/CartProduct';
// import ReCAPTCHA from 'react-google-recaptcha';
import { HiPlus, HiOutlineMinus } from "react-icons/hi";
import { actionType } from '../context/reducer';
import { useStateValue } from "../context/StateProvider";


// let cartItems = [];

const Cart = () => {
  const [{ cart}, dispatch] = useStateValue();
  
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
            total: totalPrice
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
  const [totalPrice, setTotalPrice] = useState(0);


    useEffect(() => {
      handleTotalPrice();
        // eslint-disable-next-line
    }, [counter, dispatch]);

  const handleTotalPrice = () => {
    if (cart.length > 0) {
      let calcTotalPrice = cart.reduce(function (accumulator, item) {
        return accumulator + (parseInt(item.count) * parseFloat(item.price))
      }, 0);
      setTotalPrice(calcTotalPrice);
      dispatch({ type: actionType.SET_TOTAL_PRICE, cart: cart, total: totalPrice });
    }
    
  };

  const handleRemoveItem = (doc) => {
    if (cart.length > 0) {
      let findIndex = cart.findIndex(item => item.id === doc.id);
      // cart.slice(0, findIndex);
      cart.pop(findIndex);
      handleTotalPrice();
      
    }
    dispatch({ type: actionType.SET_CART, cart: [...cart] });
  };
  
  const handleClearCart = (e) => {
    e.preventDefault();
    setTotalPrice(0);
    dispatch({ type: actionType.SET_CART, cart: [], total: totalPrice });
  }

  function handleInputChange() {
    setCounter(parseInt(inputRef.current.value));
    // setCounter(e.current.value);
    //   if (isNaN(counter) || isNaN(e.target.value) || isNaN(parseInt(inputRef.current.value))) {
    //       setCounter(1);
    // }
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

        <ul className='cart-products'>
          {!cart && (<><p>Please wait...</p></>)}
          {cart?.length === 0 && (<><p>You haven't add any items to cart</p></>)}
          
          {cart?.length > 0 && (
            cart.map(cartItem => (
              <li className='cart-product-container' id={cartItem.id} key={cartItem.id} >
          <div className='cart-img-block'>
              <img className='cart-img' src={cartItem.url} alt={cartItem.name} />
          </div>
          <div className='cart-description-block'>
              <div className='cart-description-info'>
                  <p>Name: {cartItem.name}</p>
                    <p>Price: {parseFloat(cartItem.price) * parseInt(cartItem.count)}</p>
                  </div>
                  <button type="button" onClick={handleRemoveItem}>Remove item</button>
                  
              <div className='cart-counter'>
                    <input className="counter-input" value={cartItem.count} onChange={handleInputChange} />
                    {/* <p>{cartItem.count }</p> */}
                  <div className='cart-counter-btns'>
                      <button type="button" onClick={(e) => {
                        e.preventDefault();
                        const productExist = cart.find(item => item.id === cartItem.id);
                        if (productExist) {
                          productExist.count = productExist.count + 1
                          const insideEl = cart.map(el => el.id === cartItem.id ? { ...productExist, count: productExist.count + 1 } : el);
                          setCounter(insideEl);
                          handleTotalPrice();
                         dispatch({type: actionType.SET_CART, cart: [...cart]})
                        };
                       
                        
                      }} className='btn btn-outline-secondary btn-number cart-counter-btn'>
                          <HiPlus className='cart-counter-icon' size={20}/>
                  </button>
                      <button type="button" onClick={(e) => {
                        e.preventDefault();
                        const productExist = cart.find(item => item.id === cartItem.id);
                        if (productExist) {
                          productExist.count = productExist.count - 1
                          setCounter(productExist.count - 1);
                           handleTotalPrice();
                        dispatch({type: actionType.SET_CART, cart: [...cart]})
                        };
                        
                      }} className='btn btn-outline-secondary btn-number cart-counter-btn'>
                          <HiOutlineMinus className='cart-counter-icon' />
                      </button>
                      </div>
              </div>
          </div>
      </li>
            ))
          )}
          
        </ul>



              
        <div className='cart-sum'>
          <div className='cart-clear-and-total'> 
            <button type="button" className="btn btn-danger clear-cart-btn" onClick={handleClearCart}>Clear cart</button>
             <div className='total-price'>
            Total Price: {totalPrice}
          </div>
          </div>
         
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