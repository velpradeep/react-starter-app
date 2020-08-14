import { combineReducers } from 'redux';
import auth from './authReducer';

// Combines all reducers to a single reducer function
const rootReducer = combineReducers({
    auth,
});

export default rootReducer;
