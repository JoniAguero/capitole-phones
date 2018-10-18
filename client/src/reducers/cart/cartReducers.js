import { ADD_CART, GET_ITEMS_CART } from './../../actions/cart/types';

const initialState = {
    items: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case ADD_CART:
            return {
                ...state,
                items: [ ...state.items, action.payload ]
            }
        case GET_ITEMS_CART:
            return {
                ...state
            };
        default:
            return state;
    }
}