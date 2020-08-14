import { takeLatest } from 'redux-saga/effects';
import { authSaga } from './authSaga';
import * as types from '../constants/actionTypes';

// Watches for LOG_IN action type asynchronously
export default function* watchAuth() {
    yield takeLatest(types.LOG_IN, authSaga);
}
