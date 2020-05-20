import counterReducer from './counter'
import loggedReducer from './isLogged'
import counterCart from './cart';
import { combineReducers } from 'redux'

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  cart: counterCart,
})

export default allReducers