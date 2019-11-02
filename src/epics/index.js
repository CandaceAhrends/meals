import { loginAttemptEpic, logoutAttemptEpic, loggedInEpic } from '../containers/authorization/loginEpics';
import { registrationAttemptEpic } from '../containers/registration/registerEpics';
import { combineEpics } from 'redux-observable';


 export default combineEpics( loginAttemptEpic, 
                            logoutAttemptEpic, 
                            loggedInEpic,
                            registrationAttemptEpic );