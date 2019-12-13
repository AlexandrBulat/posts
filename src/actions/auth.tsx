import { TypeKeys } from "../constants/TypeKeys";
import { Action } from "redux";

import {
    User
} from "../types";

export interface LoginAction extends Action {
    type: TypeKeys.LOGIN;
    email: string;
    password: string
}

export interface LoginFulfilledAction extends Action {
    type: TypeKeys.LOGIN_FULFILLED;
    profile: User;
}

export interface LogoutFulfilledAction extends Action {
    type: TypeKeys.LOG_OUT_FULFILLED;
}

//Login
export const login = (email: string, password: string): LoginAction => ({
    type: TypeKeys.LOGIN,
    email,
    password
});

export const loginFulfilled = (profile: User): LoginFulfilledAction => ({
        type: TypeKeys.LOGIN_FULFILLED,
        profile
    });

