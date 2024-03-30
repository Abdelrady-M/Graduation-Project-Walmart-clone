import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

export const isAuthenticated = () => {
    const token = Cookies.get('userToken');
    if (token) {
        const decoded = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        return decoded.exp > currentTime;
    }

    return false;
};