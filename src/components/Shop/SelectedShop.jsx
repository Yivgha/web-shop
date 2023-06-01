import React
, { useState }
  from 'react';
import { firestore } from '../../config';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection } from 'firebase/firestore';
import { useStateValue } from '../../context/StateProvider';
import { actionType } from '../../context/reducer';

const SelectedShop = ({ selectedShop}) => {

  const [{ user, cart },
    // eslint-disable-next-line
    dispatch] = useStateValue();
  const oneSQ = collection(firestore, `shops/${selectedShop}/children`);
  const [docs, loading, error] = useCollectionData(oneSQ);

  const [myCart, setMyCart] = useState([]);

  // console.log(cart);
  // const handleAddToCart = (e, doc) => {
  //   e.preventDefault();
  //   const productExist = myCart.find(item => item.id === doc.uid);
  //   if (productExist) {
  //      setMyCart(
  //       myCart.map(item =>
  //         item.id === doc.uid
  //           ? { ...productExist, count: productExist.count + 1 }
  //           : item
  //       )
  //     );
  //   } else {
  //     setMyCart([...myCart, { ...doc, count: 1 }]);
  //   };
  //   dispatch({type: actionType.SET_CART, cart: myCart });
  // };

// const handleAddProduct = (doc) => {
//     const productExist = myCart.find(item => item.id === doc.uid);
//     if (productExist) {
//       setMyCart(
//         myCart.map(item =>
//           item.id === doc.uid
//             ? { ...productExist, count: productExist.count + 1 }
//             : item
//         )
//       );
//     } else {
//       setMyCart([...myCart, { 
//         ...doc, 
//         count: 1  // <-- Change here
//       }]);
//   };
//   dispatch({type: actionType.SET_CART, cart: myCart });
//   };

console.log(cart);
  

  return (
   <div className='container-fluid'>
   
{loading && <p className="shop-product-msg">Loading...</p>}
 {error && <p className="shop-product-msg">{error.message}</p>}
      
            <ul className='shop-product-list'>
                
                
                {user && docs?.map((doc) => 
                  <li key={doc.uid} id={doc.uid}>
                      <div className='shop-block'>
                          <img src={doc.url} alt={doc.name} className='shop-img rounded' />
                          
                              <div className='shop-description-info'>
                                  <h3 className='shop-title'>{doc.name}</h3>
                                  <h4 className='shop-description'>Price: {doc.price}</h4>
                          </div>
                      <button type="button" className="btn btn-dark add-to-cart-btn"
                        // onClick={handleAddToCart}
                        onClick={(e) => {
                          e.preventDefault();
                       const productExist = myCart.find(item => item.id === doc.uid);
    if (productExist) {
      setMyCart(
        myCart.map(item =>
          item.id === doc.uid
            ? { ...productExist, count: productExist.count + 1 }
            : item
        )
      );
    } else {
      setMyCart([...myCart, { 
        ...doc, 
        count: 1
      }]);
  };
  dispatch({type: actionType.SET_CART, cart: [...cart, ...myCart] });
}}
                      >Add to Cart</button>
                          
                      </div>
                  </li>
                )}
            </ul>
  
      </div>
  )
}
export default SelectedShop;