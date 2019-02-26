import React, { Component } from "react";
import LoginHeader from "../container/LoginHeader";
import SignUp from "../container/SignUp";
import "../css/SignUp.css";

export default class LoginScreen extends Component {
  render() {
    return (
      <div className ="container col">
        <LoginHeader />
        <div className="container col-auto ">
        <SignUp />
      </div>
      </div>
    );
  }
}
