import weeatApi from '../api/weeatApi';
import {
  FETCH_RESTAURANTS_FAILURE,
  FETCH_RESTAURANTS_SUCCESS,
  FETCH_RESTAURANTS_STARTED,
  ADD_RESTAURANT_SUCCESS,
  ADD_RESTAURANT_FAILURE,
  ADD_RESTAURANT_STARTED,
} from './types';

export const fetchRestaurants = params => async (
  dispatch,
  getState,
) => {
  const filters = createFilters(params, getState);

  dispatch({
    type: FETCH_RESTAURANTS_STARTED,
    payload: {},
  });

  try {
    const response = await weeatApi.get('/restaurants', {
      params: filters,
    });
    dispatch({
      type: FETCH_RESTAURANTS_SUCCESS,
      payload: { data: response.data, filters },
    });
  } catch (e) {
    dispatch({ type: FETCH_RESTAURANTS_FAILURE, payload: e });
  }
};

export const addRestaurant = formValues => async dispatch => {
  dispatch({ type: ADD_RESTAURANT_STARTED, payload: {} });

  try {
    const response = await weeatApi.post('/restaurants', formValues);
    dispatch({
      type: ADD_RESTAURANT_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({ type: ADD_RESTAURANT_FAILURE, payload: e });
  }
};

function createFilters(params, getState) {
  const filters = params
    ? { ...getState().restaurants.filters, ...params }
    : {};

  for (let [key, value] of Object.entries(filters)) {
    if (value === '') delete filters[key];
  }

  return filters;
}
