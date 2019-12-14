import { TypeKeys } from "../constants/TypeKeys";
import { Action } from "redux";
import { Posts, NormalizedObjects } from "../types";

export interface PostsAction extends Action {
    type: TypeKeys.POSTS;
}

export interface PostsFulfilledAction extends Action {
    type: TypeKeys.POSTS_FULFILLED;
    posts: NormalizedObjects<Posts>;
}

export interface SetPinnedAction extends Action {
    type: TypeKeys.SET_PINNED;
    id: number,
    pinned: boolean;
    post: Posts
}


//Login
export const posts = (): PostsAction => ({
    type: TypeKeys.POSTS,
});

export const postsFulfilled = (posts: NormalizedObjects<Posts>): PostsFulfilledAction => ({
    type: TypeKeys.POSTS_FULFILLED,
    posts
});

export const setPinned = (id: number, pinned: boolean, post: Posts): SetPinnedAction => ({
    type: TypeKeys.SET_PINNED,
    id,
    pinned,
    post
});

