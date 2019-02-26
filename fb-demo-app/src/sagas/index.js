import * as effect from "redux-saga/effects";
import * as typ from "../actions";
import * as posts from "./postSaga";
import * as users from "./userSaga";

export function* rootSaga() {
	yield effect.all([
		yield effect.takeLatest(typ.ADD_USER, users.addUser),
		yield effect.takeEvery(typ.REQUEST, users.sendRequest),
		yield effect.takeEvery(typ.RESPONCE, users.responceRequest),
		yield effect.takeLatest(typ.LOGIN_USER, users.loginUser),
		yield effect.takeLatest(typ.LOG_OUT, users.signOut),
		yield effect.takeEvery(typ.NEW_POST, posts.addPost),
		yield effect.takeEvery(typ.POST, posts.viewPosts),
		yield effect.takeEvery(typ.USER, users.getUser),
		yield effect.takeEvery(typ.DETAILS_USER, users.getDetails),
		yield effect.takeEvery(typ.UPDATE_USER, users.updateUser),
		yield effect.takeEvery(typ.SEARCH_USER, users.searchUser),
		yield effect.takeEvery(typ.NOTIFICATION, users.getnotification)
	]);
}
