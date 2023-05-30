import React from 'react';
// import { firestore } from '../../config';
// import { useCollectionData } from 'react-firebase-hooks/firestore';
// import { collection } from 'firebase/firestore';

const SelectedShop = ({ path, selectedShop }) => {

  // const query = collection(firestore, path);
  //   const [docs, loading, error] = useCollectionData(query);



    // const handleAddToCart = (e) => {
    //     e.preventDefault();
    // }

  return (
    <div>
      THIS IS A SELECTED SHOP: "{selectedShop}"

        {/* <div className='container-fluid'>
            <ul className='shop-product-list'>
                {loading && <p className="shop-product-msg">Loading...</p>}
                {error && <p className="shop-product-msg">{error.message}</p>}
                
                {docs?.map((doc) => 
                  <li key={Math.random()}>
                      <div className='shop-block'>
                          <img src={doc.url} alt={doc.name} className='shop-img rounded' />
                          
                              <div className='shop-description-info'>
                                  <h3 className='shop-title'>{doc.name}</h3>
                                  <h4 className='shop-description'>Price: {doc.price}</h4>
                          </div>
                              <button type="button" className="btn btn-dark add-to-cart-btn" onClick={handleAddToCart}>Add to Cart</button>
                          
                      </div>
                  </li>
                )}
            </ul>
        </div> */}
      </div>
  )
}
export default SelectedShop;