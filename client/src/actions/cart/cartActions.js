import { ADD_CART, GET_ITEMS_CART } from './types';

export const addPhoneToCart = (payload) => dispatch => {
    dispatch({
        type: ADD_CART,
        payload
    })
}

export const getItemsFromCart = () => dispatch => {
    dispatch({
        type: GET_ITEMS_CART
    })
}