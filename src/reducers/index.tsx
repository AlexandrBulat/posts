import { combineReducers } from 'redux'
import user, * as fromUser from './user'
import posts, * as fromPosts from './posts'
import { reducer as formReducer } from 'redux-form'

import {
    User,
    State,
    Posts,
} from '../types';

const reducers = combineReducers<State>({
    user,
    posts,
    form: formReducer
})

//User
export const getUser = (state: State): User => fromUser.getUser(state)

export const getPosts = (state: State): Posts[] => fromPosts.getPosts(state)
export const getPostById = (state: State, postId: string): Posts => fromPosts.getPostById(state, postId)

export default reducers