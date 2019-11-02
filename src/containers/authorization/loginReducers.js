import { LOGIN_FAIL, LOGIN_ATTEMPT, LOGIN_SUCCESS, LOGOUT_ATTEMPT } from './loginActions';

const loginReducer = (state = {}, action) => {

    switch (action.type) {
        case LOGIN_ATTEMPT:

            return { ...state }
        case LOGIN_SUCCESS:

            return {
                ...state,
                user: action.payload.user,
                authenticated: action.payload.token ? true : false,
                token: action.payload.token
            }
        case LOGOUT_ATTEMPT:

            return { ...state, user: null, authenticated: false }
        case LOGIN_FAIL:

            return { ...state, msg: action.payload }

        default:
            return { ...state };
    }
}

export default loginReducer;