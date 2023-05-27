import React, {useState, useEffect} from 'react';
import { firestore } from '../../config';
import ShopsList from './ShopsList';
import OneShop from './OneShop';
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection,  getDocs } from 'firebase/firestore';
import { Link, Outlet } from 'react-router-dom';

const Shop = ({selectedShop}) => {

  const shopsQ = collection(firestore, "shops");
  const [shops, setShops] = useState([]); 
  const [loading, error] = useCollectionData(shopsQ);
  const [showAll, setShowAll] = useState(false);

  const getShops = async () => {
    const shopsRef =  collection(firestore, "shops");
    const allShopsSnap = await getDocs(shopsRef);
    const shopsArray = [];
    allShopsSnap.forEach(doc => {
      const data = doc.data();
      shopsArray.push({ ...data });
      if (shopsArray.length > 0) {
        setShops(shopsArray)
      }
    });
  }

  

  useEffect(() => {
    getShops();
     // eslint-disable-next-line
  }, []);

  const handleAll = (e) => {
    e.preventDefault();
    setShowAll(true);
    if (showAll === true) {
      setShowAll(false)
    };
}
 
  return (
    <div className='container-fluid shop-container'>     
      <div className='left-side'>
        {shops.length > 0 && (<>
          <h2 className='shop-title'>Shops:</h2>
          <ShopsList shops={shops} path={`shops/${shops.name}/children`} setShops={setShops} />
        </>)}
        {shops.length < 1 && (<><p>Please wait...</p></>)}
         <button type="button" onClick={handleAll} className="btn btn-primary" style={{margin: "20px 0"}}>
          {showAll === true ? "Hide All" : "Show All"}
        </button>
      </div>


      <div className='right-side'>
        <h3 className='right-side-title'>Products:</h3>
        {loading === true && <p>Loading...</p>} {error && <p>{error.message}</p>}

          {showAll === true && shops?.map((market) => (
            <OneShop key={Math.random()}
              path={`shops/${market.name}/children`}  />
          ))}
        
        {selectedShop !== ("" || undefined) && <Link href={`/${selectedShop}`}></Link>}

      <Outlet />
      </div>
      
    </div>
  )
}

export default Shop;