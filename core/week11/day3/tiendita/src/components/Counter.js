import React from 'react'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'

const Counter = ({ value, onIncrementToCart, onDecrementToCart }) => {
  return (
    <div>
      <Badge style={{ fontSize: '1rem' }} text='info'>
        {value}
      </Badge>

      <i
        onClick={onIncrementToCart}
        style={{
          cursor: 'pointer',
          fontSize: '1.5rem',
          marginRight: '10px',
          marginLeft: '10px',
        }}
        className='bi bi-plus-circle-fill'
      ></i>

      <i
        onClick={onDecrementToCart}
        style={{ cursor: 'pointer', fontSize: '1.5rem' }}
        className='bi bi-dash-circle-fill'
      ></i>
    </div>
  )
}

export default Counter
