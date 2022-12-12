import React, { Component } from "react";

import Child from "./components/Child";

class App extends Component {
  constructor() {
    super();
    console.log("App Constructor");
  }

  componentDidMount() {
    console.log("App despues de montarse");
  }

  render() {
    console.log("App renderizada");

    return <Child />;
  }
}

export default App;
