import React, { Component } from 'react'

export class B extends Component {
  render() {
    return (
      <div>
        soy C y necesito: {this.props.dataY} y tambien necesito {this.props.dataX}
      </div>
    )
  }
}

export default B
