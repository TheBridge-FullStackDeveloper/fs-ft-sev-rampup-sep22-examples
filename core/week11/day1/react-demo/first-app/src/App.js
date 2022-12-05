// import logo from './logo.svg';
import React, {Component, Fragment} from 'react';
import Counter from './components/Counter'

import './App.css';

class App extends Component {
  state = {
    user: <em>Pedro</em>,
    products: [
      {id: 1, name: "Dorada", price: 60},
      {id: 2, name: "Entrecot Bueno", price: 13.40},
      {id: 3, name: "Filipinos", price: 3.21},
      {id: 4, name: "Arroz", price: 2.5},
    ]
  }

  styles = { backgroundColor: "red"}

  render() {
    return (
    <Fragment>
        <h1 
          className="container" 
          /*style={this.styles}*/ 
          /* style={styles} */
          style={{backgroundColor: "red"}}
        >
            Hello {this.state.user}
        </h1>

        <h2>Carrito de la compra</h2>

        <ul>
        {this.state.products.map(({id, name, price}) => (
          <li key={id}>
            <h3>{name}.</h3>
            <Counter />
            <span>{price} €</span>
          </li>
        ))}
        </ul>
    </Fragment>
    );
  }
}

export default App;
