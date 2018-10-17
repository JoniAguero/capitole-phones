import { FETCH_UI_REQUEST, FETCH_UI_SUCCESS } from './types';

export const fetchUIRequest = () => dispatch => {
    dispatch({
        type: FETCH_UI_REQUEST,
        loaded: false
    })
}

export const fetchUISuccess = () => dispatch => {
    dispatch({
        type: FETCH_UI_SUCCESS,
        loaded: true
    })
}