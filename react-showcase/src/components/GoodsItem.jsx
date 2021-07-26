import React from 'react'

const GoodsItem = (props) => {
  const {
    id,
    name,
    description,
    price,
    full_background,
    image,
    addToBasket
  } = props

  return (
    <div className="card">
      <div className="card-image">
        <img
          onError={
            (e) => {
              e.target.onerror = null
              e.target.src = `https://via.placeholder.com/300x300?text=${name}`}
          }
          src={full_background ? full_background : image}
          alt={name}
        />
      </div>
      <div className="card-content">
        <p>{description}</p>
      </div>
      <div className='card-action'>
        <button
          className='btn'
          onClick={() => addToBasket({id, name, price})}
        >
          Купить
        </button>
        <span className='right' style={{fontSize: '1.8rem'}}>{price} руб.</span>
      </div>
    </div>
  )
}

export default GoodsItem