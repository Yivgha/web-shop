export const initialState = {
    user: null,
    isAuthenticated: false,
    cart: [],
}

export const actionType = {
    LOGOUT: "LOGOUT",
    SET_USER: "LOGIN",
  SET_CART: "SET_CART",
    SET_TOTAL_PRICE: "SET_TOTAL_PRICE"
}

const reducer = (state, action) => {
    // console.log(action);

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
          cart: []
            };
        
      case actionType.SET_CART:
        return {
          ...state,
          cart: action.cart,
        };
      
      case actionType.SET_TOTAL_PRICE:
        return {
          ...state,
          cart: action.cart,
          total: action.total
        }
      
        default:
            return state
    }
}

export default reducer;