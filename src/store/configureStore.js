import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import { createEpicMiddleware } from 'redux-observable';
import  rootEpic from '../epics';
import {configureAxios } from '../api/interceptors';
import { localStorage } from '../utils/LocalStorage';

const epicMiddleware = createEpicMiddleware();

const initialState = { 
    loginReducer: {  user: null, authenticated: false, 
       msg: '', ...localStorage.getUser() },
    errorReducer:  { errorMessage: null },
    appReducer: {   page: 
          ''
     },
    registerReducer: { msg: '', registered: false }
};
const store = createStore( rootReducer, initialState, applyMiddleware(epicMiddleware));
epicMiddleware.run(rootEpic);

configureAxios(store);
       
const configureStore = (initialState) => {
    return store;
}
export default configureStore;