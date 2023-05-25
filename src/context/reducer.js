export const actionType = {
    LOGIN: "LOGIN",
    LOGOUT: "LOGOUT",
}

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case actionType.LOGIN:
      return {
        ...state,
        isAuthenticated: true,
          user: action.payload,
         loading: false,
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