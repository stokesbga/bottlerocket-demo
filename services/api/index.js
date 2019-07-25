import axios from "axios";

// Import any apis
import lunchApi from "./LunchApi";

// Export Axios
export const api = axios.create({
  baseURL: `http://sandbox.bottlerocketapps.com`,
  headers: {
    "Cache-Control": "no-cache"
  },
  timeout: 30000
});

let apiObj = {
  lunch: lunchApi(api)
};

export default apiObj;
