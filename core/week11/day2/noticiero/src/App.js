import { Component } from "react";
import Header from "./components/Header";
import News from "./components/News";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <News />
      </>
    );
  }
}

export default App;
