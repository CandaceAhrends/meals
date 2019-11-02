import { Observable, of, throwError} from 'rxjs'; 
import  { ofType } from 'redux-observable'; 
import { switchMap ,catchError, map} from 'rxjs/operators'; 
const loginEpic = (action$) => action$.pipe(
 ofType(ACTION),
 switchMap(  action => {
 }) );