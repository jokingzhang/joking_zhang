import React, { Component } from "react";
import ReactDOM from "react-dom";
import Mouse from "./Mouse";
// import Cat from "./Cat";

import "./styles.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Mouse />
        {/* <Cat /> */}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
