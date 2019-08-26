import weeatApi from '../api/weeatApi';
import { FETCH_RESTAURANTS } from './types';

export const fetchRestaurants = () => async dispatch => {
    const response = await weeatApi.get('/restaurants');

    dispatch({ type: FETCH_RESTAURANTS, payload: response.data });
};