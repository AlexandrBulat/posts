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
} from 'rxjs/operators'
import { of, combineLatest } from 'rxjs'
import { Epic, ofType } from "redux-observable";
import { PostsAction, postsFulfilled } from '../actions/posts';
import Api from './Api';
import { Posts, NormalizedObjects } from '../types';

export const posts: Epic = (action$, store) => action$.pipe(
    ofType(TypeKeys.POSTS),
    mergeMap((action: PostsAction) => {
        return Api.getPosts().pipe(
            switchMap((result: NormalizedObjects<Posts>) => of(stopSubmit("Main")).pipe(
                startWith(postsFulfilled(result))
            )),
            catchError((error: Error) => of(stopSubmit("Main", error)))).pipe(
                startWith(startSubmit("Main"))
            )
    })

);
