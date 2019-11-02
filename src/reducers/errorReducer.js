import { SERVER_ERROR } from '../actions/errorActions';

const errorReducer = (state = {}, action) => {
    
    switch(action.type){
        case 'USER':
            return { ...state};
        case SERVER_ERROR:
        console.log("faile server ddd ", action);
            return {...state, errorMessage: action.payload}
        default:
        return {...state};
    }
}

export default errorReducer;