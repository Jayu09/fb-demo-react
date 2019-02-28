import * as effect from "redux-saga/effects";
import * as typ from "../actions";
import * as userapi from "../api/apiUsers";

export function* addUser(action) {
	try {
		const api = yield effect.call(userapi.addUser, action.payload);
		if (api.token) {
			yield effect.put({ type: typ.SIGN_UP, payload: api });
		} else {
			yield effect.put({ type: typ.SIGNUP_ERROR, payload: api.msg });
		}
	} catch (err) {
		throw err;
	}
}
export function* loginUser(action) {
	try {
		const api = yield effect.call(userapi.loginUser, action.payload);
		if (api) {
			yield effect.put({ type: typ.VERIFY_USER, payload: api });
		} else {
			yield effect.put({ type: typ.LOGIN_ERROR, payload: api.msg });
		}
	} catch (err) {
		throw err;
	}
}

export function* updateUser(action) {
	try {
		yield effect.call(userapi.updateUser, action.payload);
		yield effect.put({ type: typ.DETAILS_USER });
	} catch (err) {
		throw err;
	}
}

export function* signOut() {
	try {
		yield effect.call(userapi.logoutUser);
		yield effect.put({ type: typ.SIGN_OUT });
	} catch (err) {
		throw err;
	}
}

export function* sendRequest(action) {
	try {
		yield effect.call(userapi.sendRequest, action.user);
		yield effect.put({ type: typ.USER });
	} catch (err) {
		throw err;
	}
}

export function* responceRequest(action) {
	try {
		yield effect.call(userapi.responceRequest, action.data);
		yield effect.put({ type: typ.USER });
	} catch (err) {
		throw err;
	}
}

export function* getUser(action) {
	try {
		const api = yield effect.call(userapi.getUsers, action.payload);
		yield effect.put({ type: typ.VIEW_SUGGESTIONS, payload: api });
	} catch (err) {
		throw err;
	}
}

export function* getDetails() {
	try {
		const api = yield effect.call(userapi.getDeatails);
		yield effect.put({ type: typ.DETAILS, payload: api });
	} catch (err) {
		throw err;
	}
}

export function* getnotification() {
	try {
		const api = yield effect.call(userapi.getDeatails);
		yield effect.put({type: typ.SET_NOTIFICATION ,  payload:api.user.notification})
	} catch (err) {
		throw err;
	}
}

export function* searchUser(action) {
	try {
		const api = yield effect.call(userapi.searchUser, action.name)
		yield effect.put({ type: typ.VIEW_LIST, payload: api })
	} catch (err) {
		throw err
	}
}