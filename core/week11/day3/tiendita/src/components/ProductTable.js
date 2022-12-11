import React from 'react'
import Table from 'react-bootstrap/Table'
import ProductRow from './ProductRow'

const ProductTable = ({ theme, products, onAddToCart }) => {
  return (
    <Table striped variant={theme}>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Categorias</th>
          <th>Precio</th>
          <th>Stock</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <ProductRow
            key={product.id}
            {...product}
            onAddToCart={() => onAddToCart(product)}
          />
        ))}
      </tbody>
    </Table>
  )
}

export default ProductTable
