
import {
    REGISTER_ATTEMPT,registered, registrationFailed
} from './registerActions';
import { Observable } from 'rxjs';
import { ofType } from 'redux-observable';
import { switchMap, catchError, mergeMap, map } from 'rxjs/operators';
 
import { registerApi } from '../../api/loginApi';

 

 
export const registrationAttemptEpic = (action$, store) => action$.pipe(
    ofType(REGISTER_ATTEMPT),
    switchMap(action => {
        console.log(" REGISTER_ATTEMPT EPIC ", action);
        return Observable.create(async observer => {
            const res = await registerApi(action.user);
            if (res && res.data.error) {
                console.log(" REGISTER_ATTEMPT IN USE ", res);
                observer.next(registrationFailed(res.data.msg));
                observer.complete();
            }
            else {

                observer.next(registered({ registered: true }));

            }

        })

    }
    ), catchError(err => {
        console.log("Epic error", err);
        return Promise.resolve(registrationFailed('server err'))
    }));
        //.catch(payload => Observable.of({type: 'API_ERROR', payload}))
