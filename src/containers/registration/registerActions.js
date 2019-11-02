export const REGISTER_ATTEMPT = "REGISTER_ATTEMPT";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILED = "REGISTER_FAILED";

export const attemptRegistration = (user) =>({ type: REGISTER_ATTEMPT, user});
export const registered = (res)=>( { type: REGISTER_SUCCESS, res});
export const registrationFailed = (err) => ( { type: REGISTER_FAILED, payload: err});