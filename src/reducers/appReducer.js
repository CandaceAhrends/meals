import { PAGE_CHANGE } from '../actions/appActions';

const appReducer = (state = {}, action) => {
    
    switch(action.type){
        case 'PAGE_CHANGE':
            return { ...state, page: action.payload};
     
        default:
        return {...state};
    }
}

export default appReducer;