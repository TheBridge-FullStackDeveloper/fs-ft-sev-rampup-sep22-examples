import React, { Component } from "react";
import Row from "./Row";

export class Child extends Component {
  constructor(props) {
    super(props);
    console.log("Child constructor");
    this.state = {
      value: "Estado",
      items: ["Item1", "Item2"],
    };
  }

  componentDidMount() {
    // Consulta a una api
    console.log("Child Ultima actualización tras montado");

    this.setState({ items: ["Item01", "Item02", "Item03"] });
  }

  render() {
    console.log("Child Render");
    return (
      <div>
        {this.state.items.map((item, index) => (
          <Row key={index} value={this.state.value} />
        ))}
      </div>
    );
  }
}

export default Child;
