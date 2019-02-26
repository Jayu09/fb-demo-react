import { ADD_POST, VIEW_POST, POST} from "../actions";

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case VIEW_POST:
      return {
        ...state,
        items: action.payload
      };

    case ADD_POST:
      return {
        ...state,
        item: action.payload
      };

    case POST:
      return {
        ...state,
        item: action.payload
      };

    default:
      return state;
  }
}
