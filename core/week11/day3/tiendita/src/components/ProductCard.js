import React from 'react'
import { Card, Button } from 'react-bootstrap'

const ProductCard = ({ theme, name, category, stock, price, onAddToCart }) => {
  return (
    <Card variant={theme}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <ul>
            <li>Categoría: {category.name}</li>
            <li>Precio: {stock}</li>
            <li>Almacen: {stock}</li>
          </ul>
          <Button onClick={onAddToCart} variant={theme}>
            Añade a carrito
          </Button>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ProductCard
