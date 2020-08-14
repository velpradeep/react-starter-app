import * as types from '../constants/actionTypes';

export const logInAction = (payload, history) => ({
    type: types.LOG_IN,
    payload,
    history
});
