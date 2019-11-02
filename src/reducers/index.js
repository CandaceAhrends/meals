import loginReducer from '../containers/authorization/loginReducers';
import errorReducer from './errorReducer';
import registerReducer from '../containers/registration/registerReducers';

import {combineReducers } from 'redux';

const rootReducer = combineReducers({
    loginReducer,
    errorReducer,
    registerReducer
});

export default rootReducer;

