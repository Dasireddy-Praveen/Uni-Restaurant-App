import {CartProvider} from './CartContext'
import CafePage from './components/CafePage'
import './App.css'

const App = () => (
  <CartProvider>
    <CafePage />
  </CartProvider>
)

export default App
