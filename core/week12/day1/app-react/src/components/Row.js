import React, { Component } from "react";

export class Row extends Component {
  constructor(props) {
    super(props);
    console.log("Row constructor");
  }

  componentDidUpdate(prevProps, prevState) {
    // Inserción en la base de datos

    console.log("ROW ACTUALIZADA");
  }

  componentWillUnmount() {
    console.log("Clean up roow");
  }

  render() {
    console.log("Row renderizada");

    return <div>{this.props.value}</div>;
  }
}

export default Row;
