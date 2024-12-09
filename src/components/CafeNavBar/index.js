import {useState, useContext, useEffect} from 'react'
import {FaShoppingCart} from 'react-icons/fa'

import CartContext from '../../CartContext'
import './index.css'

const CafeNavBar = () => {
  const {cartCounts} = useContext(CartContext)
  const totalCount = Object.values(cartCounts).reduce(
    (sum, count) => sum + count,
    0,
  )
  const [restaurantName, setRestaurantName] = useState('')

  useEffect(() => {
    const fetchRestaurantLogo = async () => {
      const dishesApiUrl =
        'https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details'
      const options = {
        method: 'GET',
      }
      try {
        const response = await fetch(dishesApiUrl, options)
        const data = await response.json()
        setRestaurantName(data[0].restaurant_name)
      } catch (error) {
        console.error('Failed to fetch data:', error)
      }
    }
    fetchRestaurantLogo()
  }, [])

  return (
    <nav className="nav-bar">
      <h1 className="nav-logo">{restaurantName}</h1>
      <div className="cart-container">
        <p className="my-orders-text">My Orders</p>
        <FaShoppingCart className="CartLogo" />
        <div className="CartCount">{totalCount}</div>
      </div>
    </nav>
  )
}

export default CafeNavBar
