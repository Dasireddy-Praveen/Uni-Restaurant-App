import {useContext} from 'react'
import CartContext from '../../CartContext'
import './index.css'

const logosStickers = {
  veg:
    'https://res.cloudinary.com/dg14m0ern/image/upload/v1716537361/veg_logo.png',
  nonveg:
    'https://res.cloudinary.com/dg14m0ern/image/upload/v1716537361/non_veg_logo.png',
}

const DishCard = ({dishItem}) => {
  const {cartCounts, incrementCount, decrementCount} = useContext(CartContext)
  const dishCount = cartCounts[dishItem.dishId] || 0
  const isCustomizeAvailable =
    dishItem.addonCat.length > 0 ? 'Customizations available' : ''

  const isVegLogo =
    dishItem.dishType === 2 ? logosStickers.veg : logosStickers.nonveg

  return (
    <li className="dish-item" key={dishItem.dishId}>
      <img src={isVegLogo} alt="veg_or_Non-veg" className="dish-type" />
      <div className="dish-details">
        <h1 className="dish-name">{dishItem.dishName}</h1>
        <p className="dish-cost">
          {dishItem.dishCurrency} {dishItem.dishPrice}
        </p>
        <p className="dish-description">{dishItem.dishDescription}</p>
        {dishItem.dishAvailability ? (
          <div className="count-div">
            <button
              type="button"
              className="count-button"
              onClick={() => {
                if (dishCount > 0) {
                  decrementCount(dishItem.dishId)
                }
              }}
            >
              -
            </button>
            <p className="dish-count">{dishCount}</p>
            <button
              type="button"
              className="count-button"
              onClick={() => {
                incrementCount(dishItem.dishId)
              }}
            >
              +
            </button>
          </div>
        ) : (
          <p className="dish-available-text"> Not available</p>
        )}

        {dishItem.addonCat.length > 0 && (
          <p className="customize-text">{isCustomizeAvailable}</p>
        )}
      </div>
      <p className="calories">{dishItem.dishCalories} Calories</p>
      <img
        src={dishItem.dishImage}
        alt={dishItem.dishName}
        className="dish-img"
      />
    </li>
  )
}

export default DishCard
