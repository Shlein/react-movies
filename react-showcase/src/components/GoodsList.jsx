import React from 'react'
import GoodsItem from "./GoodsItem";

const GoodsList = (props) => {
	const {goods = [], addToBasket = Function.prototype} = props

  return (
		<div className='goods'>
			{goods.length ? goods.map(good => <GoodsItem key={good.id} {...good} addToBasket={addToBasket}/>)
				: <h4>Nothing found</h4>
			}
		</div>
  )
}

export default GoodsList