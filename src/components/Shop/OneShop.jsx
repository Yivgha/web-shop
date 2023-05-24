import React from 'react';


const OneShop = ({products}) => {
  return (
      <>
          {products.map((elem)=>{
              return (
                  <div key={elem.id} className='w-full text-center' value={elem.title} >
              <p>{elem.title}</p>
             <p>{elem.price}</p>
                  </div>
              )
 })}
            {products.length < 1 && <div ><p className="shop-product-msg">Please choose a shop to see products</p></div>}
      </>
  )
}

export default OneShop;