import { fetchUser } from "../utils/fetchUserData";

const userInfo = fetchUser();

export const initialState = {
    user: userInfo,
    isAuthenticated: false,
    loading: false,
}