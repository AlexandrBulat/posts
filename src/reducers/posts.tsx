import { TypeKeys } from "../constants/TypeKeys";
import { ActionTypes } from "../actions";
import { State, NormalizedObjects, Posts } from "../types";
import { combineReducers } from "redux";
import mapValues from 'lodash/mapValues';

const ids = (state: string[] = [], action: ActionTypes): string[] => {
    switch (action.type) {
        case TypeKeys.SET_PINNED:
            const newState = state.find(id => id == action.id.toString())
            return newState != undefined ? [...state] : [...state, action.id.toString()]

        case TypeKeys.POSTS_FULFILLED:
            const { posts } = action
            return posts.ids
        default:
            return state
    }
}

const byIds = (state: { [id: string]: Posts } = {}, action: ActionTypes): { [id: string]: Posts } => {
    switch (action.type) {
        case TypeKeys.RESET:
              const newArray = mapValues(state, (oldItem, id) => (
                oldItem.pinned  ? { ...oldItem, pinned: false} : oldItem
              ));
                return { 
                    ...state,
                    ...newArray
                }
        case TypeKeys.SET_PINNED:
            return {
                ...state,
                [action.id]: { ...action.post, pinned: action.pinned }
            }
        case TypeKeys.POSTS_FULFILLED:
            const { posts } = action
            return posts.byIds
        default:
            return state
    }
}

export default combineReducers<NormalizedObjects<Posts>>({
    byIds, ids
})

export const getPosts = (state: State): Posts[] => {
    return state.posts.ids.map(id => state.posts.byIds[id])
}

export const getPostById = (state: State, staffId: string): Posts => {
    return state.posts.byIds[staffId]
}