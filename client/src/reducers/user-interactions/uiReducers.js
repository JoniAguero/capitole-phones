import { FETCH_UI_REQUEST, FETCH_UI_SUCCESS } from './../../actions/user-interactions/types';

const initialState = {
    loaded: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_UI_REQUEST:
            return {
                loaded: action.loaded
            }
        case FETCH_UI_SUCCESS:
            return {
                loaded: action.loaded
            }
        default:
            return state;
    }
}