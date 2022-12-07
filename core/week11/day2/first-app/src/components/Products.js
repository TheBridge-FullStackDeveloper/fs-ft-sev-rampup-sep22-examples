// import logo from './logo.svg';
import React from "react";
import { Button, Card, CardGroup } from "react-bootstrap";
import Counter from "./Counter";

const Products = ({
  products,
  onIncrement,
  onDecrement,
  onDelete,
  onReset,
}) => {
  return (
    <>
      <h2>
        Carrito de la compra{" "}
        <Button onClick={onReset} variant="info">
          Reset
        </Button>
      </h2>

      <CardGroup>
        {products.map((product) => (
          <Card key={product.id} style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {product.price}
              </Card.Subtitle>

              <Counter
                value={product.count}
                onIncrement={() => onIncrement(product)}
                onDecrement={() => onDecrement(product)}
              />

              <Button
                onClick={() => onDelete(product)}
                variant="danger"
                className="mt-3"
              >
                Borrar
              </Button>
            </Card.Body>
          </Card>
        ))}
      </CardGroup>
    </>
  );
};

export default Products;
