import React, { Component } from "react";
class App extends Component {
  render() {
    return (
        <div className="m-0 p-0">
            {this.props.children}
        </div>
    );
  }
}
export default App;
