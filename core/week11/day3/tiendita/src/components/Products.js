import React, { Component } from 'react'
import { Container, ButtonGroup, Button } from 'react-bootstrap'
import ProductTable from './ProductTable'
import ProductGrid from './ProductGrid'

class Products extends Component {
  state = { gridMode: false }

  handleGridView = () => this.setState({ gridMode: true })
  handleListView = () => this.setState({ gridMode: false })

  render() {
    const { theme, products, onAddToCart } = this.props

    return (
      <Container fluid>
        {products.length !== 0 && (
          <div className='d-flex mt-3'>
            <p>Mostrando {products.length} artículos.</p>
            <ButtonGroup>
              <Button variant={theme} onClick={this.handleGridView}>
                <i
                  style={{ fontSize: '1.5rem', cursor: 'pointer' }}
                  className='bi bi-grid'
                ></i>
              </Button>
              <Button variant={theme} onClick={this.handleListView}>
                <i
                  style={{ fontSize: '1.5rem', cursor: 'pointer' }}
                  className='bi bi-list-ul'
                ></i>
              </Button>
            </ButtonGroup>
          </div>
        )}

        {this.state.gridMode ? (
          <ProductGrid
            theme={theme}
            products={products}
            onAddToCart={onAddToCart}
          />
        ) : (
          <ProductTable
            theme={theme}
            products={products}
            onAddToCart={onAddToCart}
          />
        )}
      </Container>
    )
  }
}

export default Products
