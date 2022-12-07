// import logo from './logo.svg';
import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Products from "./components/Products";

class App extends Component {
  state = {
    products: [
      { id: 1, name: "Dorada", price: 60, count: 0 },
      { id: 2, name: "Entrecot Bueno", price: 13.4, count: 3 },
      { id: 3, name: "Filipinos", price: 3.21, count: 0 },
      { id: 4, name: "Arroz", price: 2.5, count: 0 },
    ],
  };

  handleReset = () => {
    const products = this.state.products.map((p) => ({ ...p, count: 0 }));

    this.setState({ products });
  };

  handleIncrement = (product) => {
    const products = [...this.state.products];
    const index = products.indexOf(product);

    products[index] = { ...products[index] };
    products[index].count++;

    this.setState({ products });
  };

  handleDecrement = (product) => {
    const products = [...this.state.products];
    const index = products.indexOf(product);

    products[index] = { ...products[index] };
    products[index].count--;

    this.setState({ products });
  };

  handleDelete = (product) => {
    const products = this.state.products.filter((p) => p !== product);

    this.setState({ products });
  };

  render() {
    const totalProducts = this.state.products.reduce(
      (aggregateValue, product) => aggregateValue + product.count,
      0
    );

    return (
      <Container fluid>
        <Header totalProducts={totalProducts} />
        <Products
          products={this.state.products}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onReset={this.handleReset}
        />
      </Container>
    );
  }
}

export default App;
