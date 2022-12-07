import React from "react";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

const Counter = ({ value, onIncrement, onDecrement }) => {
  return (
    <div>
      <Button onClick={onDecrement} variant="primary" size="lg" active>
        decrementa
      </Button>

      <Badge bg={value === 0 ? "warning" : "light"} text="dark">
        {value}
      </Badge>

      <Button onClick={onIncrement} variant="primary" size="lg" active>
        Incrementar
      </Button>
    </div>
  );
};

export default Counter;
