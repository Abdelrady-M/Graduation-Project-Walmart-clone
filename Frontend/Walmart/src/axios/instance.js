import axios from "axios";
import cookie from "js-cookie";

const currentLanguageCode = cookie.get("i18next") || "en";
const instance = axios.create({
  // baseURL: 'https://walmart-api-zl4b.onrender.com',
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
    params: { lng: currentLanguageCode },
  },
});

export default instance;
