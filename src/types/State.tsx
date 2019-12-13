import { User } from "./User";
import { FormStateMap } from 'redux-form'
import { NormalizedObjects } from "./NormalizedObjects";
import { Posts } from "./Posts";

export interface State {
  readonly user: User,
  readonly posts: NormalizedObjects<Posts>
  form: FormStateMap
}