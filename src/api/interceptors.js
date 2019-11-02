import axios from 'axios';
import {SERVER_ERROR} from '../actions/errorActions';

const setToken = (token) => {
    axios.defaults.headers.headers.post['Authorization'] = 'Bearer ' + token;
    
}


export const configureAxios = (store) =>{
  axios.interceptors.response.use((response) => { 
    return response;
  }, (error) => {
 
    console.log("axios intercept error", error);
    store.dispatch( {type: SERVER_ERROR, payload: 'Server Error'});
    return Promise.reject(error);
  });
};

export const getAxios = () => {
  return axios;
}
  
