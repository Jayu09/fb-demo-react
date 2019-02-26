import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "../reducers";
import JWT from "jsonwebtoken";
import axios from "axios";
import { rootSaga } from "../sagas";
const token = localStorage.getItem("token");
axios.defaults.headers.common["Authorization"] = token;
const sagaMiddleware = createSagaMiddleware();
const initialState = {
  users: {
    token: token,
    valid: token ? true : false,
    id: token ? JWT.decode(token).sub : null
  }
};
const store = createStore(
  reducer,
  initialState,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
