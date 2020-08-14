import * as types from '../constants/actionTypes';

const initialState = {
    authenticated: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case types.LOG_IN_SUCCESS:
            return { ...state, ...action.payload };
        case types.LOG_IN_FAILURE:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}
