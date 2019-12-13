import {
    LoginAction, LoginFulfilledAction
} from "./auth";
import { PostsAction, PostsFulfilledAction } from "./posts";

export * from "./auth";

export type ActionTypes =
    | LoginAction
    | LoginFulfilledAction
    | PostsAction
    | PostsFulfilledAction
