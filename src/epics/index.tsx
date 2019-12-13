import { combineEpics } from 'redux-observable';
import {
  login
} from './auth';
import { posts } from './posts';

export default combineEpics(
  login,
  posts
);