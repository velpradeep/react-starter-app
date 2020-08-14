import { put, call } from 'redux-saga/effects';
import * as types from '../constants/actionTypes';
import { logIn } from "../apis/authApi";

// Responsible for authentication, making calls to the API
// and instructing the redux-saga middle ware on the next line of action,
// for success or failure operation.
export function* authSaga({ payload, history }) {
    try {
        const logInData = yield call(logIn, payload);
        yield [
            put({ type: types.LOG_IN_SUCCESS, payload: { authenticated: true } })
        ];
        history.push('/');
    } catch (error) {
        yield put({ type: 'LOG_IN_FAILURE', payload: { authenticated: true } });
        history.push('/');
    }
}
