import React, { useState, useRef } from 'react'
import Form from 'react-bootstrap/Form'
import Overlay from 'react-bootstrap/Overlay'
import Popover from 'react-bootstrap/Popover'

import { Navbar, Container, Button } from 'react-bootstrap'
import Counter from './Counter'

const Header = ({
  theme,
  onSwitchTheme,
  filteredProducts,
  onIncrementToCart,
  onDecrementToCart,
  onRemoveToCart,
}) => {
  const [show, setShow] = useState(false)
  const [target, setTarget] = useState(null)
  const ref = useRef(null)

  const handleClick = (event) => {
    setShow(!show)
    setTarget(event.target)
  }

  const getCartCount = () => {
    return filteredProducts.reduce((acc, { cart }) => acc + cart, 0)
  }

  const getCartPrice = () => {
    return filteredProducts
      .reduce((acc, { cart, price }) => acc + cart * price, 0)
      .toFixed(2)
  }

  const themeSwitch = (
    <>
      <Form>
        <Form.Check
          onClick={onSwitchTheme}
          className='mx-2'
          type='switch'
          id='custom-switch'
        />
      </Form>

      {theme === 'dark' ? (
        <i className='bi bi-moon'></i>
      ) : (
        <i className='bi bi-sun'></i>
      )}
    </>
  )

  return (
    <Navbar bg={theme} variant={theme}>
      <Container fluid>
        <Navbar.Brand style={{ display: 'flex' }} href='#home'>
          Nombre tienda {themeSwitch}
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
          <Navbar.Text>
            <div ref={ref}>
              <i
                onClick={handleClick}
                style={{ fontSize: '2.5rem', cursor: 'pointer' }}
                className='bi bi-cart'
              >
                <span
                  style={{
                    fontSize: '1rem',
                    position: 'relative',
                    top: '-10px',
                    left: '-24px',
                    fontWeight: 'bold',
                    color: '#f10000',
                  }}
                >
                  {getCartCount()}
                </span>
              </i>

              <Overlay
                show={filteredProducts.length && show}
                target={target}
                placement='bottom'
                container={ref}
                containerPadding={20}
              >
                <Popover id='popover-contained'>
                  <Popover.Header as='h3'>
                    <strong>Total: {getCartPrice()} €</strong>
                  </Popover.Header>
                  <Popover.Body>
                    {filteredProducts.map((product) => (
                      <p
                        style={{
                          width: '500px',
                          lineHeight: '50px',
                          display: 'flex',
                          gap: '10px',
                        }}
                        key={product.id}
                      >
                        {product.name}
                        <Counter
                          value={product.cart}
                          onIncrementToCart={() => onIncrementToCart(product)}
                          onDecrementToCart={() => onDecrementToCart(product)}
                        />

                        <i
                          onClick={() => onRemoveToCart(product)}
                          style={{ fontSize: '1.5rem', cursor: 'pointer' }}
                          className='bi bi-trash'
                        ></i>
                      </p>
                    ))}
                  </Popover.Body>
                </Popover>
              </Overlay>
            </div>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
