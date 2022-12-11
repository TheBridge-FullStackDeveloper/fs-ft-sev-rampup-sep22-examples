import React from 'react'
import { Button } from 'react-bootstrap'

const ProductRow = ({ name, category, price, stock, onAddToCart }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{category.name}</td>
      <td>{price}</td>
      <td>{stock}</td>
      <td>
        <Button onClick={onAddToCart} variant='dark'>
          Añade a carrito
        </Button>
      </td>
    </tr>
  )
}

export default ProductRow
