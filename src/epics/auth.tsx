import { TypeKeys } from '../constants/TypeKeys';
import {
    stopSubmit,
    startSubmit,
    change
} from 'redux-form';
import {
    mergeMap,
    switchMap,
    startWith,
    catchError,
    timeout
} from 'rxjs/operators'
import { of, combineLatest } from 'rxjs'
import { Epic, ofType } from "redux-observable";

export const login: Epic = (action$, store) => action$.pipe(
    ofType(TypeKeys.LOGIN)
);
