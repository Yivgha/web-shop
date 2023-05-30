import React, { useState } from 'react';
import { HiPlus, HiOutlineMinus } from "react-icons/hi";
import { useRef } from "react";

const CartProduct = () => {
    const [counter, setCounter] = useState(0);
    const inputRef = useRef(counter);
    
    const handleIncrement = () => {
        setCounter((prevCounter) => prevCounter + 1);
    };

    const handleDecrement = () => {
        setCounter((prevCounter) => prevCounter - 1);
        if (counter === 0) {
            setCounter(0);
        }
    };
function handleClick(e) {
    setCounter(parseInt(inputRef.current.value));
    if (isNaN(counter) || isNaN(e.target.value) || isNaN(parseInt(inputRef.current.value))) {
        setCounter(0);
    }
    };
    

  return (
      <div className='cart-product-container'>
          <div className='cart-img-block'>IMG</div>
          <div className='cart-description-block'>
              <div className='cart-description-info'>
                  <p>Name</p>
                  <p>Price: 800</p>
              </div>
              <div className='cart-counter'>
                  
                  <input className="counter-input" ref={inputRef} value={counter} onChange={handleClick} />

                  <div className='cart-counter-btns'>
                      <button type="button" onClick={handleIncrement} className='btn btn-outline-secondary btn-number cart-counter-btn'>
                          <HiPlus className='cart-counter-icon' size={20}/>
                  </button>
                      <button type="button" onClick={handleDecrement} className='btn btn-outline-secondary btn-number cart-counter-btn'>
                          <HiOutlineMinus className='cart-counter-icon' />
                      </button>
                      </div>
              </div>
          </div>
      </div>
  )
}

export default CartProduct;