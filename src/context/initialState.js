import { fetchUser, fetchCart } from "../utils/fetchUserData";

const userInfo = fetchUser();
const cartInfo = fetchCart();

export const initialState = {
    user: userInfo,
    isAuthenticated: false,
    loading: false,
    cartShow: false,
  cartItems: cartInfo,
}