import React, { Component } from 'react'

export class D extends Component {
  render() {
    return (
      <div>
        soy D y necesito: {this.props.dataX} y tambien necesito {this.props.dataY}
      </div>
    )
  }
}

export default D
