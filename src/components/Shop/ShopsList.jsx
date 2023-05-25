import React, {useState} from 'react';
import { fs } from '../../config';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import OneShop from './OneShop';

const ShopsList = ({ shops, path}) => {

const [products, setProducts] = useState([])
 
  const chosenProducts = fs.collection(path);
  const [chosenShop, loading, error] = useCollectionData(chosenProducts);
  
  const handleShopClick = (e) => {
    e.preventDefault();
    setProducts();
  }

    
  return (
    <>
      {loading && <p className="shop-product-msg">Loading...</p>}
      {error && <p className="shop-product-msg">{error.message}</p>}

      {shops.length > 0 && (
            shops?.map((el) => (
              <div className='shop-list-item' key={Math.random()} value={el.name}>
              <a href="/" className='shop-item-name'>
                  <button type="button" className="btn btn-success" onClick={handleShopClick}  >
            <p className='shop-btn-text' > {el.name}</p>
              </button>
              </a>
            </div>
            ))) 
      }
    {products > 0 && <OneShop chosenShop={chosenShop} />}
      
      </>
  )
}

export default ShopsList;