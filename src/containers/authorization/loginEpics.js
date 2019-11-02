
import {
    LOGIN_ATTEMPT, LOGOUT_ATTEMPT, loggedIn, LOGIN_SUCCESS,
    loggedOut,
    authenticationFailed, authenticated, LOGGEDIN
} from './loginActions';
import { Observable, of, throwError } from 'rxjs';
import { ofType } from 'redux-observable';
import { switchMap, catchError, mergeMap, map } from 'rxjs/operators';
import { localStorage } from '../../utils/LocalStorage';
import { loginApi } from '../../api/loginApi';

export const logoutAttemptEpic = (action$, store) => action$.pipe(

    ofType(LOGOUT_ATTEMPT),
    map(() => {
        const {user, authenticated} = store.value.loginReducer;
        localStorage.saveUser( { user, authenticated});
    }),
    mergeMap(() => {

        return Observable.create(async observer => {
            observer.next(loggedOut());
        })
    })
);


export const loggedInEpic = (action$, store) => action$.pipe(

    ofType(LOGIN_SUCCESS),
    map((action) => {

        localStorage.saveUser(action.payload)
    }),
    mergeMap(() => {

        return Observable.create(async observer => {
            observer.next(loggedIn());
        })
    })
);
export const loginAttemptEpic = (action$, store) => action$.pipe(
    ofType(LOGIN_ATTEMPT),
    switchMap(action => {
        console.log("EPIC ", action);
        return Observable.create(async observer => {
            const res = await loginApi(action.user);
            if (res && res.data.error) {

                observer.next(authenticationFailed(res.data.msg));
                observer.complete();
            }
            else {

                observer.next(authenticated({ authenticated: true, user: action.user.user, token: res.data.token }));

            }

        })

    }
    ), catchError(err => {
        console.log("Epic error", err);
        return Promise.resolve(authenticationFailed('server err'))
    }));
        //.catch(payload => Observable.of({type: 'API_ERROR', payload}))
