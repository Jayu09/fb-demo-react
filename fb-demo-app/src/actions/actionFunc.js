import {
  ADD_USER,
  LOGIN_USER,
  LOG_OUT,
  POST,
  UPDATE_POST,
  POST_COMPLETED,
  NEW_POST
} from "./index";

export const signOut = () => ({ type: LOG_OUT });
export const viewPosts = () => ({ type: POST });
export const completePost = id => ({ type: POST_COMPLETED, id });
export const addPost = payload => ({ type: NEW_POST, payload });
export const loginUser = payload => ({ type: LOGIN_USER, payload });
export const addUser = payload => ({ type: ADD_USER, payload });
