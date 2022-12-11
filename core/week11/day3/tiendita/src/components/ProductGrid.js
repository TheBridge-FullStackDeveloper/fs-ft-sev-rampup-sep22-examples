import React from 'react'
import { Col } from 'react-bootstrap'
import ProductCard from './ProductCard'

const ProductGrid = ({ theme, products, onAddToCart }) => {
  return (
    <Col className='d-flex flex-wrap justify-content-around'>
      {products.map((product) => (
        <ProductCard
          theme={theme}
          key={product.id}
          {...product}
          onAddToCart={() => onAddToCart(product)}
        />
      ))}
    </Col>
  )
}

export default ProductGrid
