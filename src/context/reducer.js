// import { fetchUser, fetchCart } from "../utils/fetchUserData";

// const userInfo = fetchUser();
// const cartInfo = fetchCart();

export const initialState = {
    user: null,
    isAuthenticated: false,
    loading: false,
    cart: null,
    total: null,
}

export const actionType = {
    LOGOUT: "LOGOUT",
    SET_USER: "LOGIN",
    SET_CART: "SET_CART",
    SET_TOTAL: "SET_TOTAL",
}

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case actionType.SET_USER:
            return {
                ...state,
                user: action.user,
                isAuthenticated: true,
                
            };
        
        case actionType.LOGOUT:
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
          user: null,
          loading: false,
            };
        
       case actionType.SET_CART:
      return {
        ...state,
        cart: action.cart,
      };

    case actionType.SET_TOTAL:
      return {
        ...state,
        total: action.total,
        };
      
        default:
            return state
    }
}

export default reducer;