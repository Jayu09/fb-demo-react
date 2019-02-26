import React, { Component } from "react";
import { connect } from "react-redux";

export default OriginalComponent => {
  class MixedComponent extends Component {
    checkAuth() {
      if (this.props.users) {
        return this.props.history.push("/");
      }
    }

    componentDidMount() {
      this.checkAuth();
    }

    componentDidUpdate() {
      this.checkAuth();
    }

    render() {
      return <OriginalComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return {
      users: state.users.valid
    };
  }

  return connect(mapStateToProps)(MixedComponent);
};
