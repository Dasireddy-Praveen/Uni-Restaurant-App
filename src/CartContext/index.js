import {createContext, useState} from 'react'

const CartContext = createContext()

export const CartProvider = ({children}) => {
  const [cartCounts, setCartCounts] = useState({})

  const incrementCount = dishId => {
    setCartCounts(prevCounts => ({
      ...prevCounts,
      [dishId]: (prevCounts[dishId] || 0) + 1,
    }))
  }

  const decrementCount = dishId => {
    setCartCounts(prevCounts => ({
      ...prevCounts,
      [dishId]: Math.max((prevCounts[dishId] || 0) - 1, 0),
    }))
  }

  return (
    <CartContext.Provider value={{cartCounts, incrementCount, decrementCount}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext
