import loginReducer from '../containers/authorization/loginReducers';
import errorReducer from './errorReducer';
import registerReducer from '../containers/registration/registerReducers';
import appReducer from './appReducer';
import {combineReducers } from 'redux';

const rootReducer = combineReducers({
    loginReducer,
    errorReducer,
    registerReducer,
    appReducer
});

export default rootReducer;

