import React, {useState, useEffect} from 'react';
import { fs } from '../../config';
import ShopsList from './ShopsList';
import OneShop from './OneShop';
import { useCollectionData } from "react-firebase-hooks/firestore";
// import ChildrenList from './ChildrenList';

const Shop = () => {

  const shopsQ = fs.collection("shops");

  const [shops, setShops] = useState([]); 

  const [markets, loading, error] = useCollectionData(shopsQ);


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
  }, []);


  
  return (
    <div className='container-fluid shop-container'>     
      <div className='left-side'>
        {shops.length > 0 && (<>
          <h2 className='shop-title'>Shops:</h2>
          <ShopsList shops={shops} path={`shops/${shops.name}/children`} setShops={setShops} />
        </>)}
        {shops.length < 1 && (<><p>Please wait...</p></>)}


      </div>


      <div className='right-side'>
        <h3 className='right-side-title'>Products:</h3>
        {loading && <p>Loading...</p>}
        {error && <p>{error.message}</p>}

          {markets?.map((market) => (
            <OneShop key={Math.random()}
              path={`shops/${market.name}/children`}  />
          ))}
     
      </div>
    </div>
  )
}

export default Shop;