import { combineReducers } from 'redux';
import phonesReducer from './phones/phonesReducers';
import uiReducers from './user-interactions/uiReducers';

export default combineReducers({
    phones: phonesReducer,
    ui_loaded: uiReducers
});