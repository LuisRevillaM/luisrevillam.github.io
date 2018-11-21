import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="Senior">
        <div className="App">
          <div className="Top" />
          <div className="F2" />
          <div className="F3" />
          <div className="F4" />
          <div className="F5" />
          <div className="Left" />
          <div className="Middle">
            <div className="F1" />
            <div className="triangle-bottomleft" />
            <div className="triangle-bottomright" />
          </div>

          <div className="Right"> </div>

          <div className="MainText">
            <h1 className="Title">Luis Revilla</h1>
            <div className="SubTitle">Software Engineer based in New York</div>
            <div className="SubTitle">
              {" "}
              +3 years of JavaScript experience
            </div>{" "}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
