import React, {useState, useEffect} from 'react';
import { firestore } from '../config';
import OneShop from '../components/Shop/OneShop';
import SelectedShop from '../components/Shop/SelectedShop';
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection,  getDocs } from 'firebase/firestore';
import { Link, Outlet } from 'react-router-dom';

const Shop = () => {

  const shopsQ = collection(firestore, "shops");
  const [shops, setShops] = useState([]); 
  const [loading, error] = useCollectionData(shopsQ);
  const [showAll, setShowAll] = useState(true);
  const [selectedShop, setSelectedShop] = useState("");
  const [shopBtnClicked, setShopBtnClicked] = useState(false);

// console.log("clicked:", selectedShop);

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

  const handleAll = () => {
    setShowAll(false);
    setShopBtnClicked(false);
    if (showAll === false) {
      setShowAll(true);
      setShopBtnClicked(false);
    };
}
 
  return (
    <div className='container-fluid shop-container'>     
      <div className='left-side'>

        {shops.length < 1 && (<><p>Please wait...</p></>)}

        {shops.length > 0 && (<>
          <h2 className='shop-title'>Shops:</h2>
          {shops.length > 0 && (
            shops?.map((el) => (
              <div className='shop-list-item' key={Math.random()} value={el.name}>
                <Link to={`${el.name}`} className='shop-item-name' >
                  <button type="button" className="btn btn-success" onClick={() => {
                    setSelectedShop(el.name);
                    setShowAll(false);
                    setShopBtnClicked(true);
                  }} >
            <p className='shop-btn-text'> {el.name}</p>
              </button>
              </Link>
              </div>
            )))}
        </>)}

       
 <Link to="/shop">
         <button type="button" onClick={handleAll} className="btn btn-primary" style={{margin: "20px 0"}}>
          {showAll === true ? "Hide all products" : "Show all products"}
          </button>
          </Link>
      </div>


      <div className='right-side'>
        <h3 className='right-side-title'>Products:</h3>
        {loading === true && <p>Loading...</p>} {error && <p>{error.message}</p>}

          {showAll === true && shops?.map((market) => (
            <OneShop key={Math.random()}
              path={`shops/${market.name}/children`}  />
          ))}
        
        {showAll === false && shopBtnClicked === true && shops?.filter((market) => market.id === selectedShop).map(item => (
           <SelectedShop key={Math.random()} selectedShop={selectedShop} />
        ))}
        
      <Outlet />
      </div>
      
    </div>
  )
}

export default Shop;