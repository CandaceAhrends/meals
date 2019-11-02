export const LOGIN_ATTEMPT = "LOGIN_ATTEMPT";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT_ATTEMPT = "LOGOUT_ATTEMPT";
export const LOGOUT_SUCCESSFUL = "LOGOUT_SUCCESSFUL";
export const LOGGEDIN = "LOGGEDIN";

export const authenticated = (res)=>( { type: LOGIN_SUCCESS, payload: res});
export const authenticationFailed = (res) => ( {type: LOGIN_FAIL, payload: res}); 
export const attemptLogin = (user) => ( {type: LOGIN_ATTEMPT, user});
export const attemptLogout = () => {  
    return {type: LOGOUT_ATTEMPT }
};
export const loggedOut = (user)=> ( {type: LOGOUT_SUCCESSFUL, payload: user});
export const loggedIn  = () => ({type: LOGGEDIN});