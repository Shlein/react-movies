import React from 'react'

const BasketItem = (props) => {
	const {
		id,
		name,
		price,
		quantity,
		removeFromBasket,
		decreaseQuantity,
		increaseQuantity
	} = props

  return (
	  <li className="collection-item">
		  {name}
		  <button className='btn btn-change' onClick={() => decreaseQuantity(id)}>-</button>
		  {quantity}
		  <button className='btn btn-change' onClick={() => increaseQuantity(id)}>+</button>
		  = {price * quantity} руб.
		  <span className='secondary-content'>
				<i className="material-icons basket-delete" onClick={() => removeFromBasket(id)}>close</i>
		  </span>
	  </li>
  )
}

export default BasketItem