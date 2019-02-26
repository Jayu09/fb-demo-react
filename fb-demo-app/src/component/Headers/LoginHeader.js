import React, { Component } from "react";
import logo from "../../svg/facebook.svg";
import "../../css/Header.css";

class LoginHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.change = this.change.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  change(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleClick(e) {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(user);

     }
  render() {
    return (
      <nav className="nav navbar-expand-lg fixed-top App-header">
        <nav className="nav navbar-nav mr-auto">
          <img src={logo} className="App-logo rounded-circle" alt="logo" />
        </nav>
        <nav className="nav navbar-nav ml-auto ">
          <form className="form-inline">
          <div className="form-row align-items-center mt-3">
              <div className="col-auto">
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Email id"
                  name="email"
                  onChange={this.change}
                />
              </div>
              <div className="col-auto">
                <div className="input-group mb-2">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    onChange={this.change}
                  />
                </div>
              </div>
              <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-2" onClick={this.handleClick}>
                  Log In
                </button>
              </div>
            </div>
          </form>
        </nav>
      </nav>
    );
  }
}
export default LoginHeader;
