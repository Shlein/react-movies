import React ,{useState, useEffect} from 'react'
import {API_URL, API_KEY} from "../config";
import Preloader from "./Preloader";
import GoodsList from "../components/GoodsList";
import Cart from "../components/Cart";
import BasketList from "../components/BasketList";
import Alert from "../components/Alert";

const Shop = () => {
  const [goods, setGoods] = useState([])
  const [loading, setLoading] = useState(true)
  const [order, setOrder] = useState([])
  const [isBasketShow, setBasketShow] = useState(false)
  const [alertName, setAlertName] = useState('')

  const addToBasket = (item) => {
    const itemIndex = order.findIndex(orderItem => orderItem.id === item.id)

    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1
      }
      setOrder([...order, newItem])
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1
          }
        } else {
          return orderItem
        }
      })
      setOrder(newOrder)
    }
    setAlertName(item.name)
  }

  const removeFromBasket = (itemId) => {
    const newOrder = order.filter(item => item.id !== itemId)
    setOrder(newOrder)
  }

  const increaseQuantity = (itemId) => {
    const newOrder = order.map(el => {
      if (el.id === itemId) {
        const newQuantity = el.quantity + 1
        return {
          ...el,
          quantity: newQuantity
        }
      } else {
        return el
      }
    })
    setOrder(newOrder)
  }

  const decreaseQuantity = (itemId) => {
    const newOrder = order.map(el => {
      if (el.id === itemId) {
        const newQuantity = el.quantity - 1
        return {
          ...el,
          quantity: newQuantity
        }
      } else {
        return el
      }
    })
    setOrder(newOrder)
  }

  const handleBasketShow = () => {
    setBasketShow(!isBasketShow)
  }

  const closeAlert = () => {
    setAlertName('')
  }

  useEffect(function getGoods () {
    fetch(API_URL, {headers: {Authorization: API_KEY}})
      .then(response => response.json())
      .then(data => {
	      data.featured && setGoods(data.featured)
        setLoading(false)
      })
  }, [])

  return (
    <main className='container content'>
      <Cart quantity={order.length} handleBasketShow={handleBasketShow}/>
      {loading
        ? <Preloader />
        : <GoodsList goods={goods} addToBasket={addToBasket}/>
      }
      {
        isBasketShow
        &&
        <BasketList
          order={order}
          handleBasketShow={handleBasketShow}
          removeFromBasket={removeFromBasket}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
        />
      }
      {
        alertName && <Alert name={alertName} closeAlert={closeAlert} />
      }
    </main>
  )
}

export default Shop