import React, { Component } from "react";
//import component
import PostForm from './PostForm';
import TimeLine from './Timeline';

import "../css/App-Content.css";

class App extends Component {
  render() {
    return (
      <div className="App-middle ">
        <PostForm />
        <TimeLine />
      </div>
    );
  }
}
export default App;
