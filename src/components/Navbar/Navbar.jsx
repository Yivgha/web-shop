import React, {useEffect} from "react";
import { Link,useNavigate} from "react-router-dom";
import logo from "../../assets/logo64.png";
import { GiShoppingCart } from "react-icons/gi";
import { auth, firestore} from "../../config/firebaseConfig";
import { signOut } from "firebase/auth";
import { useStateValue } from "../../context/StateProvider";
import { actionType, initialState } from "../../context/reducer";
import { collection, getDocs } from "firebase/firestore";

const Navbar = () => {
  
  const [
    // eslint-disable-next-line
    { user, cart, isAuthenticated},
    dispatch] = useStateValue();
    const navigate = useNavigate();
    
    const handleLogout = () => {
        signOut(auth).then(() => {
            dispatch({
                type: actionType.LOGOUT,
                user: initialState.user,
            });
            localStorage.clear();
            if (isAuthenticated === false) {
                navigate("/login");
            }
            
        })
    };
    
   
    const getUser = async () => {
        const thisUser = auth.currentUser;
        const updUser = collection(firestore, "users");
    const getDoc = await getDocs(updUser);
    getDoc.forEach(element => {
        const newUser = element.data();
        if (thisUser?.uid === newUser?.uid) {
          dispatch({ type: actionType.SET_USER, user: newUser });
        };       
    });
    }

    useEffect(() => { getUser() },
        // eslint-disable-next-line
        []);

    return (
        <div className="container-fluid flex-nav">
            <div className="container nav-side-left">
                <Link to="/shop">
                    <img src={logo} alt="main logo" className="main-logo" />
                    </Link>
                <Link to="/shop" className="nav-text">
                   Shop</Link>
            <span className="slash">|</span>
                <Link to="/cart" className="nav-text">Shopping Cart</Link>

            </div>
            <div className="container nav-side-right">
                {!user && <>
                <Link to="/signup" className="nav-text">SIGN UP</Link>
                <span className="slash">|</span>
                    <Link to="/login" className="nav-text">LOG IN</Link></>}
                
                {user && isAuthenticated === true && (<>
                    <div className="user-box">
                        <div className="user-info">
                            <p className="user-text">Hello, {user.displayName === null ? user.email : user.displayName}</p>
                        </div>
                        
                        <div className="cart-menu-btn">
                            <Link to="/cart">
                                < GiShoppingCart className="shopping-cart-icon" />
                            </Link>
                            <div className={`${!cart || cart.length === 0 ? "noCartItem" : "cart-indicator"}`}>
                                {cart ? cart?.length : ""}
                            </div>
                        </div>
                        
                        <button type="button" className="btn btn-dark logout-btn" onClick={handleLogout}>Log out</button>
                    </div>
                </>)}
            </div>
        </div>
    )
}

export default Navbar;