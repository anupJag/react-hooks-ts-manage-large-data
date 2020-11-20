import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import EntryApp from "./App";

import "./style.css";

interface AppProps {}
interface AppState {
  initialCount: number;
}

class App extends Component<AppProps, AppState> {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     initialCount: 10
  //   };
  // }

  render() {
    return (
      <BrowserRouter>
        <EntryApp />
      </BrowserRouter>
    );
  }
}

render(<App />, document.getElementById("root"));
