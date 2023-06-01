
export const fetchUser = () => {
    const userInfo = localStorage.getItem("user") !== "undefined"
        ? JSON.parse(localStorage.getItem("user"))
        : localStorage.setItem("user", []);
    
    return userInfo;
}

export const fetchCart = () => {
    const cartInfo = localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [];
    return cartInfo ? cartInfo : [];
}