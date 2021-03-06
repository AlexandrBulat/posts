import {
    LoginAction, LoginFulfilledAction
} from "./auth";
import { PostsAction, PostsFulfilledAction, SetPinnedAction, ResetAction } from "./posts";

export * from "./auth";

export type ActionTypes =
    | LoginAction
    | LoginFulfilledAction
    | PostsAction
    | PostsFulfilledAction
    | SetPinnedAction
    | ResetAction
