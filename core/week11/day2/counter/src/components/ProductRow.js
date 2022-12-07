import React, { Component } from "react";

export class ProductRow extends Component {
  state = {
    isLiked: false,
  };

  handleLike = () => {
    this.setState({ isLiked: !this.state.isLiked });
  };

  render() {
    const { name, category, price, stock } = this.props.product;

    return (
      <tr>
        <td>{name}</td>
        <td>{category.name}</td>
        <td>{price}</td>
        <td>{stock}</td>
        <td>
          <i
            onClick={this.handleLike}
            style={{ cursor: "pointer" }}
            className={this.printLike()}
          ></i>
        </td>
      </tr>
    );
  }

  printLike() {
    let classes = "bi bi-balloon-heart";
    if (this.state.isLiked) classes += "-fill";

    return classes;
  }
}

export default ProductRow;
