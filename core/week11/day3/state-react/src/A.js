import React, { Component } from 'react'
import B from './B'
import C from './C'

export class A extends Component {
  state = {
    y: 2,
    x: 5,
  }

  render() {
    return (
      <>
        <B dataY={this.state.y} dataX={this.state.x} />
        <C dataY={this.state.y} dataX={this.state.x} />
      </>
    )
  }
}

export default A
