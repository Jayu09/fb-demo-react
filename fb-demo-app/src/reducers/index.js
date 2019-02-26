import { combineReducers } from "redux";
import postRed from "./PostRed";
import UserRed from "./UserRed";

export default combineReducers({
  posts: postRed,
  users: UserRed
});
