import React, {useState, useEffect} from 'react';
import { fs } from '../../config';
import ShopsList from './ShopsList';
import OneShop from './OneShop';

const Shop = () => {

  const [shops, setShops] = useState([]); 
  const [products, setProducts] = useState([]);

  const getShops = async () => {
    const shops = await fs.collection("shops").get();
    const shopsArray = [];
    for (let snap of shops.docs) {
      const data = snap.data();
      shopsArray.push({ ...data });

      if (shopsArray.length === shops.docs.length) {
        setShops(shopsArray)
      }
    }
  }

  useEffect(() => {
    getShops();

  }, [])


  
  return (
    <div className='container-fluid shop-container'>     
      <div className='left-side'>
        {shops.length > 0 && (<>
          <h2 className='shop-title'>Shops:</h2>
          <ShopsList shops={shops}
          />
        </>)}
        {shops.length < 1 && (<><p>Please wait...</p></>)}
      </div>


      <div className='right-side'>
        <OneShop products={products} setProducts={setProducts}  />

        {/* {products.map((elem)=>{
              return (
                  <div key={elem.id} className='w-full text-center' products={products} setProducts={setProducts}>
              <p>{elem.title}</p>
             <p>{elem.price}</p>
                  </div>
              )
 })}
            {products.length < 1 && <div ><p className="shop-product-msg">Please choose a shop to see products</p></div>}
         */}
        </div>
     
    </div>
  )
}

export default Shop;