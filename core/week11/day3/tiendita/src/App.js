import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Header from './components/Header'
import Products from './components/Products'

import { getProducts } from './data/products'

class App extends Component {
  state = {
    products: getProducts(),
    theme: 'light',
  }

  handleAddToCart = (product) => {
    if (product.stock <= product.cart) return

    const products = [...this.state.products]
    const index = products.indexOf(product)

    products[index] = { ...products[index], cart: (product.cart ?? 0) + 1 }

    this.setState({ ...this.state, products })
  }

  handleRemoveOneToCart = (product) => {
    if (!product.cart) return

    const products = [...this.state.products]
    const index = products.indexOf(product)

    products[index] = { ...products[index], cart: product.cart - 1 ?? null }

    this.setState({ ...this.state, products })
  }

  handleRemoveToCart = (product) => {
    const products = [...this.state.products]
    const index = products.indexOf(product)

    products[index] = { ...products[index], cart: null }

    this.setState({ ...this.state, products })
  }

  handleSwitchTheme = () => {
    const theme = this.state.theme === 'dark' ? 'light' : 'dark'

    this.setState({ ...this.state, theme })
  }

  filterCartProducts = () => {
    return this.state.products.filter((p) => p.cart > 0)
  }

  filterStockedProducts = () => {
    return this.state.products.filter((p) => (p.cart || 0) < p.stock)
  }

  render() {
    return (
      <>
        <Header
          theme={this.state.theme}
          onSwitchTheme={this.handleSwitchTheme}
          filteredProducts={this.filterCartProducts()}
          onIncrementToCart={this.handleAddToCart}
          onDecrementToCart={this.handleRemoveOneToCart}
          onRemoveToCart={this.handleRemoveToCart}
        />
        <Products
          theme={this.state.theme}
          products={this.filterStockedProducts()}
          onAddToCart={this.handleAddToCart}
        />
      </>
    )
  }
}

export default App
