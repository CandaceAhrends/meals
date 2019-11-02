import { REGISTER_ATTEMPT, REGISTER_FAILED, REGISTER_SUCCESS } from './registerActions';

const registrationReducer = (state = {}, action) => {

    switch (action.type) {
        case REGISTER_ATTEMPT:

            return { ...state }
        case REGISTER_SUCCESS:

            return {
                ...state,
                msg: 'Registration Successful - Please log in',
                registered: true
            }
       
        case REGISTER_FAILED:
            console.log("REGISTER FAILED", action.payload);
            return { ...state, msg: action.payload, registered: false }

        default:
            return { ...state };
    }
}

export default registrationReducer;