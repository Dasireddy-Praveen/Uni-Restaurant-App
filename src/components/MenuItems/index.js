import DishCard from '../DishCard'
import './index.css'

const MenuItems = props => {
  const {activeCategory, cafeData} = props

  const modifiedData = cafeData.filter(e => e.menu_category === activeCategory)

  const dishes = modifiedData.length > 0 ? modifiedData[0].category_dishes : []

  const modifiedDishes = dishes.map(e => ({
    dishId: e.dish_id,
    dishName: e.dish_name,
    dishImage: e.dish_image,
    dishPrice: e.dish_price,
    dishCurrency: e.dish_currency,
    dishDescription: e.dish_description,
    addonCat: e.addonCat,
    dishCalories: e.dish_calories,
    dishAvailability: e.dish_Availability,
    dishType: e.dish_Type,
  }))

  return (
    <ul className="dish-ul">
      {modifiedDishes.map(dishesData => (
        <DishCard key={dishesData.dishId} dishItem={dishesData} />
      ))}
    </ul>
  )
}

export default MenuItems
