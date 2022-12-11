import React, { Component } from 'react'
import D from './D'
import E from './E'

export class B extends Component {
  render() {
    return (
      <>
        <D dataX={this.props.dataX} dataY={this.props.dataY} />
        <E dataX={this.props.dataX} />
      </>
    )
  }
}

export default B
