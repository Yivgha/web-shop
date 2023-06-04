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
        <div className='container-fluid one-shop-box'>
            <ToastContainer position="bottom-right" autoClose={3000} newestOnTop={true}/>
            <ul className='shop-product-list'>
                {loading && <p className="shop-product-msg">Loading...</p>}
                {error && <p className="shop-product-msg">{error.message}</p>}
                
                {docs?.map((doc) => 
                  <li key={doc.id} id={doc.id}>
                      <div className='shop-block'>
                          <img src={doc.url} alt={doc.name} className='shop-img rounded' />
                          
                              <div className='shop-description-info'>
                                  <h3 className='shop-title'>{doc.name}</h3>
                                  <h4 className='shop-description'>Price: {doc.price}</h4>
                          </div>
                            <button type="button" className="btn btn-dark add-to-cart-btn" onClick={async() => {
                          const productExist = myCart?.find(item => item.id === doc.id);
                          if (productExist) {
                            await setMyCart(myCart?.map(item => item.id === doc.id
                              ? { ...productExist, count: productExist.count + 1 }
                              : item));
                            dispatch({ type: actionType.SET_CART, cart: [...cart, ...myCart] });
                            toast.info("this product already in your cart");
                          } else {
                            await setMyCart([...myCart, { ...doc, count: 1 }]);                             
                            dispatch({ type: actionType.SET_CART, cart: [...cart, ...myCart] });
                            toast.success('Added to your cart');
                        };
                      }}
                      >Add to Cart
                      {<div className='hide'>Click to add in cart</div>}
                      </button>
                          
                      </div>
                  </li>
                )}
            </ul>
        </div>
  )
}

export default OneShop;