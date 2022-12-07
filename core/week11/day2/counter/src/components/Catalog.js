import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import { getProducts } from "../data/products";
import ProductTable from "./ProductTable";

class Catalog extends Component {
  state = {
    products: getProducts(),
  };
  render() {
    console.log(this.state.products);
    return (
      <Container fluid>
        {this.state.products.length !== 0 && (
          <p>Mostrando {this.state.products.length} artículos.</p>
        )}

        <ProductTable products={this.state.products} />
      </Container>
    );
  }
}

export default Catalog;
