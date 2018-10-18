import { combineReducers } from 'redux';
import phonesReducer from './phones/phonesReducers';
import uiReducers from './user-interactions/uiReducers';
import cartReducers from './cart/cartReducers';

export default combineReducers({
    phones: phonesReducer,
    ui: uiReducers,
    cart: cartReducers
});