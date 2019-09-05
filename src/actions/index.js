import weeatApi from '../api/weeatApi';
import { FETCH_RESTAURANTS_FAILURE, FETCH_RESTAURANTS_SUCCESS, FETCH_RESTAURANTS_STARTED } from './types';

export const fetchRestaurants = params => async dispatch => {
    var response = {};
    dispatch({ type: FETCH_RESTAURANTS_STARTED, payload: response });

    try {
        response = await weeatApi.get('/restaurants', { params });
        dispatch({ type: FETCH_RESTAURANTS_SUCCESS, payload: response.data });
    } catch(e) {
        dispatch({ type: FETCH_RESTAURANTS_FAILURE, payload: e });
    }
};