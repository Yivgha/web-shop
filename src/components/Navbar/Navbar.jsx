import React from "react";
import { Link,useNavigate} from "react-router-dom";
import logo from "../../assets/logo64.png";
import { GiShoppingCart } from "react-icons/gi";
import { auth } from "../../config";
import { useStateValue } from "../../context/StateProvider";
// import { initialState } from "../../context/initialState";
// 
const Navbar = ({currentuser}) => {
    const navigate = useNavigate();
    const [ { user }, dispatch ] = useStateValue();
    
    const handleLogout = () => {
        console.log("logout");
        auth.signOut().then(() => {
            navigate("/login"); 
            dispatch({
                type: 'LOGOUT',
            })
        })
    }

    return (
        <div className="container-fluid flex-nav">
            <div className="container nav-side-left">
                <Link to="/">
                    <img src={logo} alt="main logo" className="main-logo" />
                    </Link>
            <Link to="/">Shop</Link>
            <span className="slash">|</span>
            <Link to="/cart">Shopping Cart</Link>
            </div>
            <div className="container nav-side-right">
                {!currentuser && <>
                <Link to="/signup" >SIGN UP</Link>
                <span className="slash">|</span>
                    <Link to="/login" >LOG IN</Link></>}
                
                {currentuser && <>
                    <div className="user-box">
                        <div  className="user-info"><Link to="/">
                            <p className="user-text">Hello, {currentuser}</p>
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