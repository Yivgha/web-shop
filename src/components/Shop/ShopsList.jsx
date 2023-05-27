import React, {useState} from 'react';
import { Link} from "react-router-dom";

const ShopsList = ({ shops}) => {

  const [selectedShop, setSelectedShop] = useState("");

console.log(selectedShop);
    
  return (
    <>
           {shops.length > 0 && (
            shops?.map((el) => (
              <div className='shop-list-item' key={Math.random()} value={el.name}>
                <Link className='shop-item-name' >
                  <button type="button" className="btn btn-success" onClick={(e) => {
                    e.preventDefault();
                    setSelectedShop(el.name);
                  }} >
            <p className='shop-btn-text'> {el.name}</p>
              </button>
              </Link>
            </div>
            ))) 
      }
      </>
  )
}

export default ShopsList;