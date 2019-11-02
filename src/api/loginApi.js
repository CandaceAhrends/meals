import {getAxios} from './interceptors';

const axios = getAxios();
const url = 'http://localhost:3200/';
const createPostRequestMethod = ( path ) => data => axios.post( `${url}${path}`, data );
 
export const loginApi = createPostRequestMethod( 'authenticate');
export const registerApi = createPostRequestMethod( 'register');
 