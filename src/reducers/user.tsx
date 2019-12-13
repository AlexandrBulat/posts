
import { TypeKeys } from "../constants/TypeKeys";
import { ActionTypes } from "../actions";
import { User, State } from "../types";

const user = (state: User = null!, action: ActionTypes): User => {
  switch (action.type) {
    case TypeKeys.LOGIN_FULFILLED:
      const { profile } = action
      return {
        id: profile.id,
        email: profile.email,
        date: profile.date,
        gender: profile.gender,
        phone: profile.phone,
        name: profile.name
      }
    default:
      return state
  }
}


export const getUser = (state: State): User => state.user

export default user
