import { combineReducers } from 'redux';
import phonesReducer from './phones/phonesReducers';

export default combineReducers({
     phones: phonesReducer
});