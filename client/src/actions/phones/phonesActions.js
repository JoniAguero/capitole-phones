import { FETCH_PHONES_REQUEST, FETCH_PHONES_SUCCESS, FETCH_PHONEBYID_REQUEST, FETCH_PHONEBYID_SUCCESS } from './types';

import axios from 'axios';

export const fetchPhones = () => async dispatch => {
    dispatch({
        type: FETCH_PHONES_REQUEST
    })
     const respuesta = await axios.get('http://localhost:1234/api/phones');
     dispatch({
          type: FETCH_PHONES_SUCCESS,
          payload: respuesta.data
     })
}

export const fetchPhoneById = (id) => async dispatch => {
    dispatch({
        type: FETCH_PHONEBYID_REQUEST
    })
    const respuesta = await axios.get(`http://localhost:1234/api/phones/${id}`);
    
    dispatch({
        type: FETCH_PHONEBYID_SUCCESS,
        payload: respuesta.data
    })
}