import weeatApi from '../api/weeatApi';
import {
    FETCH_RESTAURANTS_FAILURE,
    FETCH_RESTAURANTS_SUCCESS,
    FETCH_RESTAURANTS_STARTED,
    ADD_RESTAURANT_SUCCESS,
    ADD_RESTAURANT_FAILURE,
    ADD_RESTAURANT_STARTED
} from './types';

export const fetchRestaurants = params => async (dispatch, getState) => {
    var response = {};
    var filters = { ...(getState()).restaurants.filters, ...params };

    dispatch({ type: FETCH_RESTAURANTS_STARTED, payload: response });
    
    try {
        response = await weeatApi.get('/restaurants', { params: filters });
        dispatch({ type: FETCH_RESTAURANTS_SUCCESS, payload: { data: response.data, filters } });
    } catch(e) {
        dispatch({ type: FETCH_RESTAURANTS_FAILURE, payload: e });
    }
};

export const addRestaurant = formValues => async dispatch => {
    var response = {};
    dispatch({ type: ADD_RESTAURANT_STARTED, payload: response });

    try {
        response = await weeatApi.post('/restaurants', formValues);
        dispatch({ type: ADD_RESTAURANT_SUCCESS, payload: response.data });
    } catch(e) {
        dispatch({ type: ADD_RESTAURANT_FAILURE, payload: e });
    }
};