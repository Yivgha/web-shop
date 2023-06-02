import React, { useState } from 'react';
import { firestore } from '../../config';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection } from 'firebase/firestore';
import { actionType } from '../../context/reducer';
import { useStateValue } from '../../context/StateProvider';
import { ToastContainer, toast } from "react-toastify";
  import 'react-toastify/dist/ReactToastify.css';

const OneShop = ({path}) => {
    const [{ cart }, dispatch] = useStateValue();
     const query = collection(firestore, path);
    const [docs, loading, error] = useCollectionData(query);
    const [myCart, setMyCart] = useState([]);
    
    return (
        <div className='container-fluid'>
            <ToastContainer position="bottom-right" autoClose={3000} newestOnTop={true}/>
            <ul className='shop-product-list'>
                {loading && <p className="shop-product-msg">Loading...</p>}
                {error && <p className="shop-product-msg">{error.message}</p>}
                
                {docs?.map((doc) => 
                  <li key={doc.id}>
                      <div className='shop-block'>
                          <img src={doc.url} alt={doc.name} className='shop-img rounded' />
                          
                              <div className='shop-description-info'>
                                  <h3 className='shop-title'>{doc.name}</h3>
                                  <h4 className='shop-description'>Price: {doc.price}</h4>
                          </div>
                            <button type="button" className="btn btn-dark add-to-cart-btn" onClick={(e) => {
                          e.preventDefault();
                          const productExist = myCart?.find(item => item.id === doc.id);
                          if (productExist) {
                            setMyCart(myCart.map(item => item.id === doc.id
                              ? { ...productExist, count: productExist.count + 1 }
                                : item));
                              toast.info("this product already in your cart")
                              
                                dispatch({type: actionType.SET_CART, cart: [...cart, ...myCart]})  
                          } else {
                              setMyCart([...myCart, { ...doc, count: 1 }]);
                              toast.success('Added to your cart');
                              
                                dispatch({type: actionType.SET_CART, cart: [...cart, ...myCart]})  
                                };
                              
}}
                            >Add to Cart</button>
                          
                      </div>
                  </li>
                )}
            </ul>
        </div>
  )
}

export default OneShop;