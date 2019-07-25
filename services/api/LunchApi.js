/**
 * Calls for Restaurant Feed
 * @param {Axios instance} api
 */

import axios from "axios";

export default LunchApi = api => ({
  fetchRestaurants: data => api.get("/BR_iOS_CodingExam_2015_Server/restaurants.json", data)
});