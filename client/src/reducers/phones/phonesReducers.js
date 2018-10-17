import { FETCH_PHONES_SUCCESS, FETCH_PHONEBYID_SUCCESS } from './../../actions/phones/types';

// cada reducer tiene su propio state

const initialState = {
    phones: [],
    phoneSelected: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_PHONES_SUCCESS:
            return {
                ...state,
                phones: action.payload
            }
        case FETCH_PHONEBYID_SUCCESS:
            return {
                ...state,
                phoneSelected: action.payload
            }
        default:
            return state;
    }
}