import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

class Counter extends Component {
  state = { count: 0 }

  incrementa = () => {
   this.setState({count: this.state.count + 1})
  }

  decrementa = () => {
    if (!this.state.count) return

    this.setState({count: this.state.count - 1})
   }

  render() {
    return (

    <div>
      {this.state.count !== 0 && 
        <Button onClick={this.decrementa} variant="primary" size="lg" active>decrementa</Button>
      }
      
        <Badge bg={this.formatBadge()} text="dark">{this.state.count}</Badge>

        <Button onClick={this.incrementa} variant="primary" size="lg" active>Incrementar</Button>
    </div>
    );
  }

  formatBadge () {
    return  (this.state.count === 0) ? "warning" : "light"
  }
}

export default Counter;
