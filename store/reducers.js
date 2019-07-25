import { combineReducers } from "redux";

import { reducer as LunchReducer } from "../modules/lunch";

export default {
  lunch: LunchReducer
};
