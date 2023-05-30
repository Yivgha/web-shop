import React from "react";
import { Link,useNavigate} from "react-router-dom";
import logo from "../../assets/logo64.png";
import { GiShoppingCart } from "react-icons/gi";
import { auth } from "../../config/firebaseConfig";
import { signOut } from "firebase/auth";
import { useStateValue } from "../../context/StateProvider";
import { initialState } from "../../context/initialState";
import { actionType } from "../../context/reducer";

const Navbar = ({ currentuser }) => {
   
  const [
    // eslint-disable-next-line
    { user },
    dispatch] = useStateValue();
    const navigate = useNavigate();
    
    const handleLogout = () => {
        signOut(auth).then(() => {
             dispatch({
                 type: actionType.LOGOUT,
                 user: initialState.user,
    });
            navigate("/login"); 
        })
    }
//FIX USERNAME from DB!!!

    return (
        <div className="container-fluid flex-nav">
            <div className="container nav-side-left">
                <Link to="/shop">
                    <img src={logo} alt="main logo" className="main-logo" />
                    </Link>
            <Link to="/shop">Shop</Link>
            <span className="slash">|</span>
                <Link to="/cart">Shopping Cart</Link>
                <span className="slash">|</span>
               
                <Link to="/products">Products</Link>
            </div>
            <div className="container nav-side-right">
                {!currentuser && <>
                <Link to="/signup" >SIGN UP</Link>
                <span className="slash">|</span>
                    <Link to="/login" >LOG IN</Link></>}
                
                {currentuser && <>
                    <div className="user-box">
                        <div className="user-info"><Link to="/shop">
                           
                            <p className="user-text">Hello, {currentuser.displayName === null ? "Username" :currentuser.displayName}</p>
                        </Link></div>
                        
                      <div className="cart-menu-btn">
                            <Link to="/cart">
                                < GiShoppingCart size={30} />
                            </Link>
                            <span className="cart-indicator">
                                1
                                {/* {totalQty} */}
                            </span>
                        </div>
                        <button type="button" className="btn btn-dark logout-btn" onClick={handleLogout}>Log out</button>
                    </div>
                </>}
            </div>
        </div>
    )
}

export default Navbar;