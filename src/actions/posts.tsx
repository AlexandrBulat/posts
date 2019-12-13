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

//Login
export const posts = (): PostsAction => ({
    type: TypeKeys.POSTS,
});

export const postsFulfilled = (posts: NormalizedObjects<Posts>): PostsFulfilledAction => ({
        type: TypeKeys.POSTS_FULFILLED,
        posts
    });

