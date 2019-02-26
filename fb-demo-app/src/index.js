import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App";
import store from "./store";
import axios from "axios";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route} from "react-router-dom";
//importing component
import loginAuth from "./component/HOCs/loginAuth";
import logoutAuth from "./component/HOCs/logoutAuth";
import LoginScreen from "./component/LoginScreen";
import UserScreen from "./component/UserScreen";
const jwtToken = localStorage.getItem("token");
axios.defaults.headers.common["Authorization"] = jwtToken;
ReactDOM.render(
  <Provider store={store}>
        <Router>
        <App>
          <Route exact path="/SignIn" component={logoutAuth(LoginScreen)} />
          <Route exact path="/" component={loginAuth(UserScreen)} />
        </App>
      </Router>
  </Provider>,
  document.getElementById("root")
);
