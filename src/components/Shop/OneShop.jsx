import React from 'react';
import { fs } from '../../config';
import { useCollectionData } from 'react-firebase-hooks/firestore';


const OneShop = ({path }) => {
    
     const query = fs.collection(path);
    const [docs, loading, error] = useCollectionData(query);
    
    return (
        <div className='container-fluid'>
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
                              <button type="button" className="btn btn-dark add-to-cart-btn">Add to Cart</button>
                          
                      </div>
                  </li>
                )}
            </ul>
        </div>
  )
}

export default OneShop;