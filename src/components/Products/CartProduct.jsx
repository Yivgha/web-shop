import React from 'react';

 const CartProduct = () => {
  return (
      <div className='cart-product-container'>
          <div className='cart-img-block'>IMG</div>
          <div className='cart-description-block'>
              <div className='cart-description-info'>
                  <p>Name</p>
                  <p>Price: 800</p>
              </div>
              <div className='cart-counter'>Counter</div>
          </div>
      </div>
  )
}

export default CartProduct;