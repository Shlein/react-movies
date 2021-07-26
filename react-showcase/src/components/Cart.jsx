import React from 'react'

const Cart = (props) => {
	const {
		quantity = 0,
		handleBasketShow = Function.prototype
	} = props

  return (
  	<div className='cart #7b1fa2 purple darken-2 white-text'
	       onClick={handleBasketShow}
	  >
	    <i className="material-icons">shopping_cart</i>
		  {quantity
			  ? <span className='cart-quantity'>{quantity}</span>
			  : null}
	  </div>
  )
}

export default Cart