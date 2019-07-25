import _ from "lodash";
import api from "../services/api";

/* ------------- Action Types ----------- */
export const FETCH_RESTAURANTS_REQUEST = "FETCH_RESTAURANTS_REQUEST";
export const FETCH_RESTAURANTS_SUCCESS = "FETCH_RESTAURANTS_SUCCESS";
export const FETCH_RESTAURANTS_FAILURE = "FETCH_RESTAURANTS_FAILURE";

/* ------------- Action Creators ------------- */
export default {
  fetchRestaurants: () => {
    return async (dispatch, getState) => {
      dispatch({
        type: FETCH_RESTAURANTS_REQUEST
      });

      try {
        let response = await api.lunch.fetchRestaurants();
        if (response.status == 200 && response?.data?.restaurants) {
          return dispatch({
            type: FETCH_RESTAURANTS_SUCCESS,
            payload: {
              data: response.data.restaurants,
            }
          });
        } else {
          return dispatch({
            type: FETCH_RESTAURANTS_FAILURE
          });
        }
      } catch (e) {
        return dispatch({
          type: FETCH_RESTAURANTS_FAILURE
        });
      }
    };
  },
};

/* ------------- Action Handlers ------------- */
const ACTION_HANDLERS = {
  [FETCH_RESTAURANTS_REQUEST]: (state, { payload }) => ({
    ...state,
    isLoading: false
  }),

  [FETCH_RESTAURANTS_SUCCESS]: (state, { payload }) => ({
    ...state,
    restaurants: payload.data,
    isLoading: false
  }),

  [FETCH_RESTAURANTS_FAILURE]: (state, { payload }) => ({
    ...state,
    isLoading: false
  })
};

/* ------------- Reducer ------------- */
const INITIAL_STATE = {
  restaurants: [],
  isLoading: false,
};

export function reducer(state = INITIAL_STATE, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
