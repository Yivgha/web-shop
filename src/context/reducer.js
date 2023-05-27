export const actionType = {
    LOGOUT: "LOGOUT",
    SET_USER: "LOGIN",
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
      
        default:
            return state
    }
}

export default reducer;