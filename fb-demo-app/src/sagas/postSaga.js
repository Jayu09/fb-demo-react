import * as effect from "redux-saga/effects";
import * as typ from "../actions";
import {addPosts , getPosts ,editPost ,remove} from "../api/apiPosts";

export function* addPost(action) {
  try {
    const api =yield effect.call(addPosts, action);
    yield effect.put({ type: typ.ADD_POST, payload: api });
  } catch (err) {
    alert("error" + err);
  }
}

export function* viewPosts() {
  try {
    const data = yield effect.call(getPosts);
    yield effect.put({ type: typ.VIEW_POST, payload: data });
  } catch (err) {
    alert("error" + err);
  }
}

export function* updatePost(action) {
  try {
    yield effect.call(editPost, action);
    yield effect.put({ type: typ.POST });
  } catch (err) {
    alert("error" + err);
  }
}

export function* deletePost(action) {
  try {
    yield effect.call(remove , action);
    yield effect.put({ type: typ.POST });
  } catch (err) {
    alert("error" + err);
  }
}
