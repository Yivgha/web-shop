import React from 'react';

const Shop = () => {
  return (
    <div className='container-fluid shop-container'>     
      <div className='left-side'>
        <h2 className='shop-title'>Shops:</h2>
        <ul>
          <li className='shop-list-item'>
            <button type="button" class="btn btn-success">
              <a href="/" className='shop-item-name'>
                McDonald's
              </a>
            </button>
          </li>
          <li className='shop-list-item'>
            <button type="button" class="btn btn-success">
              <a href="/" className='shop-item-name'>
                McDonald's
              </a>
            </button>
          </li>
          <li className='shop-list-item'>
            <button type="button" class="btn btn-success">
              <a href="/" className='shop-item-name'>
                McDonald's
              </a>
            </button>
          </li>
        </ul>
      </div>


        <div className='right-side'>Products</div>
     
    </div>
  )
}

export default Shop;