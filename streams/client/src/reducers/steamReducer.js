import _ from 'lodash';
import {
    CREATE_STREAM,
    FETCH_STEAMS,
    FETCH_STEAM,
    DELETE_STREAM,
    EDIT_STREAM
} from '../actions/types';
import streams from '../apis/streams';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_STEAMS:
            return { ...state, ..._.mapKeys(action.payload, 'id') };
        case FETCH_STEAM:
        case CREATE_STREAM:
        case EDIT_STREAM:
            return { ...streams, [action.payload.id]: action.payload };
        case DELETE_STREAM:
            return _.omit(state, action.payload); 
        default:
            return state
    }
}
