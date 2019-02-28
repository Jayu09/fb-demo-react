import {
	SIGN_UP,
	VERIFY_USER,
	LOGIN_ERROR,
	SIGNUP_ERROR,
	SIGN_OUT,
	VIEW_SUGGESTIONS,
  DETAILS,
  VIEW_LIST,
  SET_NOTIFICATION
} from "../actions";

const initialState = {
	valid: false,
	token: "",
	error: "",
	id: "",
	items: [],
  profile: {},
	list: [],
	msg:'',
  notification:[]
};

export default function(state = initialState, action) {
	switch (action.type) {
		case SIGN_UP:
			return {
				...state,
				token: action.payload.token,
				id: action.payload._id,
				valid: false,
				error: "",
				msg:action.payload.msg
			};
		case VERIFY_USER:
			return {
				...state,
				token: action.payload,
				id: action.payload._id,
				valid: true,
				error: "",
				profile: action.payload.user
			};
    case VIEW_LIST:
			return {
				...state,
				list: action.payload
			};
		case VIEW_SUGGESTIONS:
			return {
				...state,
				items: action.payload
			};
		case LOGIN_ERROR:
			return {
				...state,
				valid: false,
				error: action.payload
			};
		case SIGNUP_ERROR:
			return {
				...state,
				valid: false,
				error: action.payload
			};
		case SIGN_OUT:
			return {
				...state,
				valid: false,
				token: ""
			};
		case DETAILS:
			return {
				...state,
				profile: action.payload.user
      };
    case SET_NOTIFICATION:
      return {
        ...state,
        notification: action.payload
      }
		default:
			return state;
	}
}
