import React, { Component } from "react";
import "../css/SignUp.css";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: ""
    };
    this.change = this.change.bind(this);
  }
  change(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleClick = async e => {
    e.preventDefault();
    if (this.state.password === this.state.password2) {
      const user = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      };
      await this.props.addUser(user);
    } else {
      alert("password not same");
    }
    window.location.reload()
  };
  render() {
    return (
      <div className="card col-5 offset-md-3 signUp">
        <form className="card-body " onSubmit={e => this.handleClick(e)}>
          <div className="form-group">
            {this.props.error ? (
              <div className="alert alert-danger">{this.props.error}</div>
            ) : null}
            <label className="font-weight-bold label">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={this.change}
              placeholder="name"
            />
          </div>
          <div className="form-group">
            <label className="font-weight-bold label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={this.change}
              placeholder="example@email.com"
            />
          </div>
          <div className="form-group">
            <label className="font-weight-bold label">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={this.change}
              placeholder="password"
            />
          </div>
          <div className="form-group">
            <label className="font-weight-bold label">Re-Enter Password</label>
            <input
              type="password"
              className="form-control"
              name="password2"
              onChange={this.change}
              placeholder="verify password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}
