import React, {
  useState, useRef
  , useEffect
} from 'react';
import { HiPlus, HiOutlineMinus } from "react-icons/hi";
import { actionType } from '../context/reducer';
import { useStateValue } from "../context/StateProvider";
import { ToastContainer, toast } from 'react-toastify';
import { firestore } from '../config/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';


const Cart = () => {
  const [{ user, cart }, dispatch] = useStateValue();
  const [cartAddress, setCartAddress] = useState("");
  const [cartEmail, setCartEmail] = useState("");
  const [cartPhone, setCartPhone] = useState("");
    const [cartName, setCartName] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [itemsToSumbit, setItemsToSubmit] = useState(cart);

  const handleCartSubmit = (e) => {
    e.preventDefault();
    if (user) {
      fireAddUserCart();
      dispatch({
        type: actionType.SET_CART,
        cart: cart,
        total: totalPrice
      });
      setCartAddress("");
      setCartEmail("");
      setCartPhone("");
      setCartName("");
      handleClearCart();
      setItemsToSubmit("");
      setBtnDisabled(true);
      toast.success("Submitted")
    } else {
      toast.error("Your data wasn't send")
    }
  };

  const fireAddUserCart = async () => {
  const addToCartCol = collection(firestore, "users", `${user.uid}`, "cart");
    await addDoc(addToCartCol, {
      date: `${new Date().toLocaleString("ua")}`,
      name: cartName,
      address: cartAddress,
      email: cartEmail,
      phone: cartPhone,
      items: itemsToSumbit,
      totalPrice: totalPrice
    })
      .then(() => console.log("Cart added"))
      .catch((err) => console.log(err.message));
}

     const [counter, setCounter] = useState(1);
     const inputRef = useRef(counter);
  const [totalPrice, setTotalPrice] = useState(0);


    useEffect(() => {
      handleTotalPrice();
      handleFormCheck();
        // eslint-disable-next-line
    }, [counter, dispatch]);

  const handleTotalPrice = () => {
    if (cart?.length > 0) {
      let calcTotalPrice = cart.reduce(function (accumulator, item) {
        return accumulator + (parseInt(item.count) * parseFloat(item.price))
      }, 0);
      setTotalPrice(calcTotalPrice);
      dispatch({ type: actionType.SET_TOTAL_PRICE, cart: cart, total: totalPrice });
    }
    
  };

  const handleClearCart = () => {
    setTotalPrice(0);
    dispatch({ type: actionType.SET_CART, cart: [] });
    dispatch({ type: actionType.SET_TOTAL_PRICE, total: totalPrice });
  };

  const handleFormCheck = () => {
    if (cartAddress.trim().length < 1 || cartEmail.trim().length < 1 || cartName.trim().length < 1 || cartPhone.trim().length < 1) {
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
    }
  };

  return (
    <div className='container-fluid cart-container'>
      <div className="cart-left">
          <form id="cart-form" className='form-group' autoComplete="off">

          <label className='cart-label'>Address:</label>
          <input 
            id="cart-address"
            className='form-control cart-input' required aria-required="true"
                      placeholder='Write your address' type="address"
            onChange={(e) => {
              setCartAddress(e.target.value);
            }}
            value={cartAddress}
         >
            
            </input>
          

          <label  className='cart-label'>Email:</label>
                  <input id="cart-email" className='form-control cart-input' required aria-required="true"
                      placeholder='Write your email' type="email"
                      onChange={(e) => setCartEmail(e.target.value)} value={cartEmail}></input>
          <label  className='cart-label'>Phone:</label>
                  <input id="cart-phone" className='form-control cart-input' required aria-required="true"
                      placeholder='Write your phone' type="tel"
                      onChange={(e) => setCartPhone(e.target.value)} value={cartPhone}></input>
          <label  className='cart-label'>Name:</label>
                  <input  id="cart-name"className='form-control cart-input' required aria-required="true"
                      placeholder='Write your name' type="text"
                      onChange={(e) => setCartName(e.target.value)} value={cartName}></input>
          </form>

      </div>
      <div className="cart-right">
<ToastContainer />
        <ul className='cart-products'>
          {!cart && (<><p>Please wait...</p></>)}
          {cart?.length === 0 && (<><p>You haven't add any items to cart</p></>)}
          
          {cart?.length > 0 && (
            cart?.map(cartItem => (
              <li className='cart-product-container' id={cartItem.id} key={cartItem.id} >
          <div className='cart-img-block'>
              <img className='cart-img' src={cartItem.url} alt={cartItem.name} />
          </div>
          <div className='cart-description-block'>
              <div className='cart-description-info'>
                  <p>Name: {cartItem.name}</p>
                    <p>Price: {parseFloat(cartItem.price) * parseInt(cartItem.count)}</p>
                  
                  </div>
                  <button type="button" onClick={() => {
      let findIndex = cart.findIndex(item => item.id === cartItem.id);
      cart?.splice(findIndex, 1);
      handleTotalPrice();
      dispatch({ type: actionType.SET_CART, cart: [...cart] });
                  }}
                  className='btn btn-secondary remove-item-cart'>Remove item</button>
                  
              <div className='cart-counter'>
                    <input type="number" className="counter-input" inputRef={inputRef} value={cartItem.count} disabled
                      onChange={(e)=>{
                          let findItem = cart?.find(item => item.id === cartItem.id);
                          if (findItem) {
                            cartItem.count = e.target.value;
                            setCounter(e.target.value);
                            dispatch({ type: actionType.SET_CART, cart: [...cart] });
                          }
                    }} />
                   
                  <div className='cart-counter-btns'>
                      <button type="button" onClick={() => {
                        const productExist = cart?.find(item => item.id === cartItem.id);
                        if (productExist) {
                          productExist.count = productExist.count + 1
                          const insideEl = cart?.map(el => el.id === cartItem.id ? { ...productExist, count: productExist.count + 1 } : el);
                          setCounter(insideEl);
                          handleTotalPrice();
                         dispatch({type: actionType.SET_CART, cart: [...cart]})
                        };
                       
                        
                      }} className='btn btn-outline-secondary btn-number cart-counter-btn'>
                          <HiPlus className='cart-counter-icon' size={20}/>
                  </button>
                      <button type="button" onClick={() => {
                        const productExist = cart?.find(item => item.id === cartItem.id);
                        if (productExist && productExist.count >= 2) {
                          productExist.count = productExist.count - 1
                          setCounter(productExist.count - 1);
                           handleTotalPrice();
                        dispatch({type: actionType.SET_CART, cart: [...cart]})
                        };
                        if (productExist.count === 1) {
                          setCounter(1);
                        }
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
                      
            <button type="submit" disabled={btnDisabled}
              className="btn btn-primary cart-btn"              
              onClick={handleCartSubmit}
            >Submit
            {<div className='hide'>Fill all the form's fields to submit</div>}
            </button>
          </div>
        </div>
        
      </div>
    </div>
  )
}
export default Cart;