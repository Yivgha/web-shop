export const actionType = {
    LOGOUT: "LOGOUT",
    SET_USER: "LOGIN",
     SET_CART_SHOW: "SET_CART_SHOW",
  SET_CARTITEMS: "SET_CARTITEMS",
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
        
         case actionType.SET_CART_SHOW:
      return {
        ...state,
        cartShow: action.cartShow,
      };

    case actionType.SET_CARTITEMS:
      return {
        ...state,
        cartItems: action.cartItems,
      };
      
        default:
            return state
    }
}

export default reducer;