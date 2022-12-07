import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import ProductRow from "./ProductRow";

class ProductTable extends Component {
  render() {
    return (
      <Table striped>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Categorias</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Like</th>
          </tr>
        </thead>
        <tbody>
          {this.props.products.map((product) => (
            <ProductRow key={product.id} product={product} />
          ))}
        </tbody>
      </Table>
    );
  }
}

export default ProductTable;
