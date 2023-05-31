// import React, { useState, useEffect, useRef } from 'react';
// import { HiPlus, HiOutlineMinus } from "react-icons/hi";
// import { actionType } from '../../context/reducer';
// import { useStateValue } from "../../context/StateProvider";


// let cartItems = [];

// const CartProduct = ({ itemId, name, url, price }) => {

//     const [counter, setCounter] = useState(0);
//      const inputRef = useRef(counter);
//   const [itemPrice, setItemPrice] = useState(parseInt(counter) * parseFloat(price));

//     const [{ cart }, dispatch] = useStateValue();

//     useEffect(() => {
//         setItemPrice(parseInt(counter) * parseFloat(price));
//         cartItems = cart;
//         // eslint-disable-next-line
//     }, [counter]);
    

    
//     const handleIncrement = () => {
//         setCounter((prevCounter) => prevCounter + 1);
//         // dispatch({
//         //     type: actionType.SET_CART,
//         //     cart: cartItems
//         // })
//     };

//     const handleDecrement = (id) => {
//         setCounter((prevCounter) => prevCounter - 1);
//         if (counter === 0) {
//             setCounter(0);
//             cartItems.pop(id);
//         dispatch({
//           type: actionType.SET_CART,
//           cart: cartItems,
//         });
//         }
//     };

// function handleInputChange(e) {
//     setCounter(parseInt(inputRef.current.value));
//     if (isNaN(counter) || isNaN(e.target.value) || isNaN(parseInt(inputRef.current.value))) {
//         setCounter(0);
//     }
//     };
    
// // console.log(cart);
//   return (
//       <div className='cart-product-container' id={itemId}>
//           <div className='cart-img-block'>IMG
//               <img className='cart-img' src={url} alt={name} />
//           </div>
//           <div className='cart-description-block'>
//               <div className='cart-description-info'>
//                   <p>Name: {name}</p>
//                   <p>Price: {itemPrice}</p>
//               </div>
//               <div className='cart-counter'>
                  
//                   <input className="counter-input" ref={inputRef} value={counter} onChange={handleInputChange} />

//                   <div className='cart-counter-btns'>
//                       <button type="button" onClick={handleIncrement} className='btn btn-outline-secondary btn-number cart-counter-btn'>
//                           <HiPlus className='cart-counter-icon' size={20}/>
//                   </button>
//                       <button type="button" onClick={handleDecrement} className='btn btn-outline-secondary btn-number cart-counter-btn'>
//                           <HiOutlineMinus className='cart-counter-icon' />
//                       </button>
//                       </div>
//               </div>
//           </div>
//       </div>
//   )
// }

// export default CartProduct;