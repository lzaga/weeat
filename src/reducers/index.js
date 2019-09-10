import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import restaurantsReducer from './restaurantReducer';

export default combineReducers({
  restaurants: restaurantsReducer,
  form: formReducer,
});
