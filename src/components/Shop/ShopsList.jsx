import React from 'react';


const ShopsList = ({shops}) => {
  
  const handleShopClick = (e) => {
    e.preventDefault();
  //  console.log(shops);
  }

    
  return (
      <>
      {shops.length > 0 && (
            shops.map((el) => (
              <div className='shop-list-item' key={el.ID} id={el.ID} >
              <a href="/" className='shop-item-name'>
                  <button type="button" className="btn btn-success" onClick={handleShopClick}  >
            <p className='shop-btn-text'> {el.name}</p>
              </button>
              </a>
            </div>
            ))        
      )}
      
      
      </>
  )
}

export default ShopsList;