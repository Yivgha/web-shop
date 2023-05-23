import React from 'react';
import ShopProduct from "../Products/ShopProduct";

const Shop = () => {
  return (
    <div className='container-fluid shop-container'>     
      <div className='left-side'>
        <h2 className='shop-title'>Shops:</h2>
        <ul>
          <li className='shop-list-item'>
            <button type="button" className="btn btn-success">
              <a href="/" className='shop-item-name'>
                McDonald's
              </a>
            </button>
          </li>
          <li className='shop-list-item'>
            <button type="button" className="btn btn-success">
              <a href="/" className='shop-item-name'>
                McDonald's
              </a>
            </button>
          </li>
          <li className='shop-list-item'>
            <button type="button" className="btn btn-success">
              <a href="/" className='shop-item-name'>
                McDonald's
              </a>
            </button>
          </li>
        </ul>
      </div>


      <div className='right-side'>
        <ShopProduct />
        </div>
     
    </div>
  )
}

export default Shop;